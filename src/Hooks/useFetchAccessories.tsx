import { useState, useEffect } from "react";
import axios from "axios";
import { AccessoryItem } from "../types/types_Data";
type AccessoriesByCategory = Record<string, AccessoryItem[]>;

export const useFetchAccessories = () => {
  const [accessoriesData, setAccessoriesData] = useState<AccessoriesByCategory>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const baseURL = import.meta.env.VITE_API_URL;
        if (!baseURL) throw new Error("VITE_API_URL no está definida");

        const res = await axios.get<AccessoryItem[]>(`${baseURL}/api/accessories`);

        if (!Array.isArray(res.data)) {
          throw new Error("La respuesta del backend no es un array");
        }

        const grouped = res.data.reduce<AccessoriesByCategory>((acc, item) => {
          const accessory: AccessoryItem = { ...item, id: item._id || item.id };
          const category = accessory.category || "otros";
          if (!acc[category]) acc[category] = [];
          acc[category].push(accessory);
          return acc;
        }, {});

        setAccessoriesData(grouped);
      } catch (err) {
        console.error("Error al obtener los accesorios:", err);
        const message = err instanceof Error ? err.message : "Error desconocido";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchAccessories();
  }, []);

  return { accessoriesData, loading, error };
};
