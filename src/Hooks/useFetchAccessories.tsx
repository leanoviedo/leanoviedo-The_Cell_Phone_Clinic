import { useState, useEffect } from "react";
import axios from "axios";
import { AccessoryItem } from "../types/types_Data";

type AccessoriesByCategory = Record<string, AccessoryItem[]>;

export const useFetchAccessories = () => {
  const [accessoriesData, setAccessoriesData] = useState<AccessoriesByCategory>(
    {}
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const res = await axios.get<AccessoryItem[]>(
          "http://localhost:3000/api/accessories"
        );

        const grouped = res.data.reduce<AccessoriesByCategory>((acc, item) => {
          const accessory: AccessoryItem = { ...item, id: item._id };
          const cat = accessory.category || "otros";
          if (!acc[cat]) acc[cat] = [];
          acc[cat].push(accessory);
          return acc;
        }, {});

        setAccessoriesData(grouped);
      } catch (err) {
        console.error("Error al obtener los accesorios:", err);
        setError(
          typeof err === "object" && err !== null && "message" in err
            ? String((err as { message?: string }).message)
            : "Error desconocido"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAccessories();
  }, []);

  return { accessoriesData, loading, error };
};
