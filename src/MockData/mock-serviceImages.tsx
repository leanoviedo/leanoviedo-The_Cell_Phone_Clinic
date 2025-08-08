export interface ServiceImage {
  name: string;
  description: string;
  image: string;
  style: {
    height: { xs: string; md: string };
    objectFit: string;
  };
}
export const serviceImages: ServiceImage[] = [
  {
    name: "Cambio de pantalla",
    description: "Especialistas en cambios de módulos y pantallas.",
    image: "/images/banner3.jpeg",
    style: { height: { xs: "400px", md: "650px" }, objectFit: "cover" },
  },
  {
    name: "Reparación de placas",
    description: "Reparación de componentes electrónicos dañados.",
    image: "/images/banner2.jpeg",
    style: { height: { xs: "400px", md: "650px" }, objectFit: "cover" },
  },
  {
    name: "Baño químico",
    description: "Limpieza profunda para dispositivos mojados.",
    image: "/images/banner1.jpeg",
    style: { height: { xs: "400px", md: "650px" }, objectFit: "cover" },
  },
];
