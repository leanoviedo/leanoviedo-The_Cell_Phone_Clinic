import { useState, useEffect } from "react";
import axios from "axios";
import { PhoneItem } from "../types/types_Data";

type PhonesByBrand = Record<string, PhoneItem[]>;

export const useFetchPhones = () => {
  const [phonesData, setPhonesData] = useState<PhonesByBrand>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<PhoneItem[]>("/api/phones");
        const grouped = data.reduce((acc: PhonesByBrand, phone: PhoneItem) => {
          if (!acc[phone.brand]) acc[phone.brand] = [];
          acc[phone.brand].push(phone);
          return acc;
        }, {});
        setPhonesData(grouped);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { phonesData, loading };
};
