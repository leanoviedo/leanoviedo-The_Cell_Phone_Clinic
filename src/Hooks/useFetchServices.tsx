import { useState, useEffect } from "react";
import axios from "axios";
import { ServiceImage } from "../types/types_Data";

export function useFetchServices(): {
  services: ServiceImage[];
  loading: boolean;
  error: string | null;
} {
  const [services, setServices] = useState<ServiceImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchServices = async () => {
      try {
        setLoading(true);
        setError(null);

        const baseURL = import.meta.env.VITE_API_URL;

        if (!baseURL) {
          throw new Error("VITE_API_URL no está definida");
        }

        const response = await axios.get<ServiceImage[]>(
          `${baseURL}/api/services`,
          {
            signal: controller.signal,
          }
        );

        console.log("SERVICIOS DESDE API:", response.data);

        if (!Array.isArray(response.data)) {
          throw new Error("La respuesta no es un array");
        }

        setServices(response.data);
      } catch (err) {
        if (axios.isCancel(err)) return;

        console.error("Error al obtener servicios:", err);
        setError("Error al cargar los servicios");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();

    return () => controller.abort();
  }, []);

  return {
    services,
    loading,
    error,
  };
}