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

        const res: AxiosResponse<(PhoneItem & { _id?: string })[]> =
          await axios.get("http://localhost:3000/api/phones", {
            signal: controller.signal,
          });

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
