// src/hooks/useFetchPhones.ts
import { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import { PhoneItem } from "../types/types_Data";

export const useFetchPhones = () => {
  const [phones, setPhones] = useState<PhoneItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchPhones = async () => {
      try {
        setLoading(true);
        setError(null);
        const baseURL = import.meta.env.VITE_API_URL;
        if (!baseURL) throw new Error("VITE_API_URL no está definida");

        const res: AxiosResponse<PhoneItem[]> = await axios.get<PhoneItem[]>(
          `${baseURL}/api/phones`,
          { signal: controller.signal }
        );

        if (!Array.isArray(res.data)) {
          throw new Error("La respuesta del backend no es un array");
        }   

        const normalized: PhoneItem[] = res.data.map((phone) => ({
          ...phone,
          id: phone._id ?? phone.id,
        }));

        setPhones(normalized);
      } catch (err) {
        if (axios.isCancel(err)) return;

        const axiosError = err as AxiosError;
        console.error("Error al obtener teléfonos:", axiosError.message);
        setError("Error al cargar los celulares");
      } finally {
        setLoading(false);
      }
    };

    fetchPhones();

    return () => controller.abort();
  }, []);

  return { phones, loading, error };
};
