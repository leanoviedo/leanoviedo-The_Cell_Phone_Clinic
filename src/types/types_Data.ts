export interface ServiceImage {
  name: string;
  description: string;
  image: string;
  style: {
    height: { xs: string; md: string };
    objectFit: string;
  };
}

export interface AccessoryItem {
  _id: string;
  category: string;
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
  price: number;
  promotion: true;
}

export interface PromotionData {
  title: string;
  price: number;
  description: string;
  image: string;
  link: string;
  promotion: boolean;
  batery?: string;
  color?: string;
  ram?: string;
}

export interface AccessoriesData {
  auriculares: AccessoryItem[];
  RelojSmart: AccessoryItem[];
  cables: AccessoryItem[];
  cargador: AccessoryItem[];
  luces: AccessoryItem[];
  parlantes: AccessoryItem[];
  joysticks: AccessoryItem[];
  pendrive_memories: AccessoryItem[];
  computacion: AccessoryItem[];
  varios: AccessoryItem[];
  [key: string]: AccessoryItem[];
}
// Interfaces para celulares

export interface PhoneItem {
  id: string;
  price: number;
  title: string;
  brand: string;
  ram?: string;
  storage: string;
  battery?: string;
  model?: string;
  color?: string;
  description: string;
  image: string;
  alt: string;
  link: string;
  promotion: true;
}
