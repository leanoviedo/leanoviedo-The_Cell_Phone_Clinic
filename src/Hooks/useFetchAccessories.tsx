import { useState, useEffect } from "react";
import axios from "axios";
import { AccessoryItem } from "../types/types_Data";

type AccessoriesByCategory = Record<string, AccessoryItem[]>;

export const useFetchAccessories = () => {
  const [accessoriesData, setAccessoriesData] = useState<AccessoriesByCategory>(
    {}
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<AccessoryItem[]>("/api/accessories");
        const grouped = data.reduce(
          (acc: AccessoriesByCategory, item: AccessoryItem) => {
            if (!acc[item.category]) acc[item.category] = [];
            acc[item.category].push(item);
            return acc;
          },
          {}
        );
        setAccessoriesData(grouped);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { accessoriesData, loading };
};
