// 📦 Interfaces para tipado
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
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
  id?: string;
  price?: number; // Optional price field
}
export interface Promotions {
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
}

export interface AccessoriesData {
  auriculares: AccessoryItem[];
  RelojSmart: AccessoryItem[];
  cables: AccessoryItem[];
  cargador: AccessoryItem[];
  luces: AccessoryItem[];
  joysticks: AccessoryItem[];
  pendrive_memories: AccessoryItem[];
}

// 📦 Datos
export const accessoriesData: AccessoriesData = {
  auriculares: [
    {
      id: "auricular-samsung-blanco-1",
      title: "Auricular Samsung blanco ",
      description: "Auricular samsung.color blanco",
      image:
        " /images/imagenes de accesorios/auriculares/v4xzfnygr94x3xlg2tg3nwunaml0lypxwdu6cyci1-242a55555454b31d6916933459293535-1024-1024.webp",
      alt: "auriculares samsung",
      link: "/accessories/",
      price: 2500,
    },
    {
      id: "auricular-samsung-S10-plus-2",
      title: "Auricular Samsung S10+",
      description: "Auricular samsung S10+",
      image:
        " /images/imagenes de accesorios/auriculares/61c08494a6a4a1-1f8de48ecb0cbbd65516933460314928-1024-1024.webp",
      alt: "auriculares S10+",
      link: "/accessories/",
      price: 3500,
    },
    {
      id: "auricular-samsung-S10-plus-typeC-3",
      title: "Auricular Samsung S10+ tipo C",
      description: "Auricular samsung S10+",
      image:
        " /images/imagenes de accesorios/auriculares/qk6b8g4zby5imkfexsxsdtadw2yhg8iqkw5n7yih-db5fffc9ed3e32bdf517146832233437-1024-1024.webp",
      alt: "auriculares S10+ tipo C",
      link: "/accessories/",
      price: 4000,
    },
    {
      id: "auricular-boca-river-4",
      title: "auricular boca-river",
      description: "auricular boca-river",
      image:
        "/images/imagenes de accesorios/auriculares/63f8f390f20fe-fdd6f29beda3f1f75917116647075136-1024-1024.webp",
      alt: "auricular boca-river",
      link: "/accessories/",
      price: 2500,
    },
    {
      id: "auricular-wireless-5",
      title: "Auricular wireles",
      description: "Auricular wireles bluothooh",
      image:
        "/images/imagenes de accesorios/auriculares/wirrless-auriculares.webp",
      alt: "auricular wireless",
      link: "/accessories/",
      price: 5000,
    },
    {
      id: "auricular-E6s-6",
      title: "Auricular E6s",
      description: "Auricular E6s",
      image:
        "/images/imagenes de accesorios/auriculares/woj29gyehddpkygajr99kxqhj4aqq5sbeeuulxcf1-0fac5175a684525fe316952316847011-1024-1024.webp",
      alt: "Auricular E6s",
      link: "/accessories/",
      price: 8000,
    },
    {
      id: "auricular-bluetooth-TWS-F9-7",
      title: "Auricular TWS F9",
      description: "Auriculares Bluothooh Tws F9 color negro",
      image:
        "/images/imagenes de accesorios/auriculares/16509851200461-d000c0e1fafb13cae616509857742852-1024-10241-cd8ef6189004c3ff1216929871942084-1024-1024.webp",
      alt: "auricular bluetooth TWS F9",
      link: "/accessories/",
      price: 9500,
    },
    {
      id: "auricular-alphina-F9-5-8",
      title: "Auricular Alphina F9-5",
      description: "Auricular Alphina F9-5 coilor negro.",
      image:
        "/images/imagenes de accesorios/auriculares/f9-5-alpina11-734db68f6a4bb01cdc16894733982168-1024-1024.webp",
      alt: "Auricular Alphina F9-5",
      link: "/accessories/",
      price: 12000,
    },
    {
      id: "auricular-alphina-F10-pro-9",
      title: "Auricular Alphina F10-pro",
      description: "Auricular Alphina F10-pro color negro.",
      image: "/images/imagenes de accesorios/auriculares/alphinaF10pro.webp",
      alt: "Auricular Alphina F10-pro",
      link: "/accessories/",
      price: 10000,
    },
    {
      id: "auricular-vincha-river-10",
      title: "Auricular  vincha river",
      description: "Auricular vincha River",
      image:
        " /images/imagenes de accesorios/auriculares/k048shli27mfitvfsu1ow5yjymc2ujvautenh56c-5d041f5e574051fcc417072552219932-1024-1024.webp",
      alt: "Auricular vincha River",
      link: "/accessories/",
      price: 15000,
    },
    {
      id: "auricular-wireless-p47-M-11",
      title: "Auricular wireless p47 M",
      description: "Auricular wireless p47 M varios coleres.",
      image:
        " /images/imagenes de accesorios/auriculares/img-20231218-wa0032-e6f9a117550fb334cc17029199280406-1024-1024.webp",
      alt: "Auricular wireless p47 M",
      link: "/accessories/",
      price: 12000,
    },
    {
      id: "auricular-wireless-p47-12",
      title: "Auricular wireless-p47 ",
      description: "Auricular wireless con control multimedia p47 color Rojo.",
      image:
        " /images/imagenes de accesorios/auriculares/p47-rojo1-8d3d2b26e2dc9639d316929925240990-1024-1024.webp",
      alt: "Auricular wireless p47 ",
      link: "/accessories/",
      price: 12000,
    },
  ],
  RelojSmart: [
    {
      id: "smart-band-S6-1",
      title: "Smart-Band S6 ",
      description: "reloj Smart-Band S6",
      image: " /images/imagenes de accesorios/reloojes-smart/reloj-S6.webp",
      alt: "smart-band-s6",
      link: "/accessories/",
      price: 15000,
    },
    {
      id: "smart-band-D20-2",
      title: "Smart-Band D20",
      description: "Smart-Band D20",
      image:
        " /images/imagenes de accesorios/reloojes-smart/Reloj-smartk-D20.webp",
      alt: "smart-band-D-20",
      link: "/accessories/",
      price: 12000,
    },
    {
      id: "smart-band-M7-3",
      title: "Smart-Band M7",
      description: "SmartBand M7.",
      image:
        " /images/imagenes de accesorios/reloojes-smart/smat-reloj-M7.webp",
      alt: "Smart_Band_M7",
      link: "/accessories/",
      price: 10000,
    },
  ],
  cables: [
    {
      id: "cable-data-samsung-1",
      title: "Cable Data Samsung ",
      description: "Cable Data Samsung Tipo C-Tipo C 3A",
      image:
        " /images/imagenes de accesorios/cargador y adaptadores/USB-Samsung-Tipo-C-A Tipo-C.webp",
      alt: "cable data samsung type-c",
      link: "/accessories/",
      price: 3000,
    },
    {
      id: "cable-usb-samsung-V8-2",
      title: "Cable usb Samsung V8",
      description: "Usb Samsung type-V8  color Negro.",
      image:
        " /images/imagenes de accesorios/cargador y adaptadores/usb-Samsung-V8.webp",
      alt: "cable USB Samsung V8",
      link: "/accessories/",
      price: 5000,
    },
    {
      id: "cable-motorola-typeC-3",
      title: "Cable Motorola Tipo C ",
      description: "cable Data 3.0 Motorola tipo C",
      image:
        " /images/imagenes de accesorios/cargador y adaptadores/cable-motorola-v8-caja-blanca-1e4c1ac5622046baf117024923680059-1024-1024.webp",
      alt: "cable Motorola Type C",
      link: "/accessories/",
      price: 3500,
    },
    {
      id: "cable-usb-iphone-4",
      title: "Cable usb Iphone",
      description: "Usb iphone 1 metro color blanco.",
      image:
        " /images/imagenes de accesorios/cargador y adaptadores/usb-iphone.webp",
      alt: "cable USB iPhone",
      link: "/accessories/",
      price: 4000,
    },
    {
      id: "cable-samsung-usb-typeC-5",
      title: "Cable Samsung-usb-type-C",
      description: "Cable Samsung 5.0A usb-tipo C",
      image:
        " /images/imagenes de accesorios/cargador y adaptadores/usb-Samsung-tipo-C.webp",
      alt: "cable Samsung USB Type C",
      link: "/accessories/",
      price: 6000,
    },
    {
      id: "cable-olny-eco-6",
      title: "Cable Olny Eco",
      description: "Cable Olny Eco type-C color blanco",
      image:
        " /images/imagenes de accesorios/cargador y adaptadores/cable-V8-Eco.webp",
      alt: "cable USB Eco Olny",
      link: "/accessories/",
      price: 2000,
    },
  ],

  cargador: [
    {
      id: "cargador-motorola-50W-1",
      title: "Cargador Motorola 50 W",
      description: " cargador Samsung 50W 2-tipo C + 2 usb tipo-C.",
      image:
        " /images/imagenes de accesorios/cargador-usb-50w-tipoc+2usb-tipoc.webp",
      alt: "cargador Motorola 50W",
      link: "/accessories/",
      price: 8000,
    },
    {
      id: "cargador-adaptador-motorola-50w-2",
      title: " cargador adaptador  Motorola 50w",
      description: "Adaptador Motorola type-c +1 usb type-c. color negro",
      image:
        " /images/imagenes de accesorios/cargador y adaptadores/cargador-Samsung 1usb_type-C -50W.webp",
      alt: "cargador adaptador Motorola 50W",
      link: "/accessories/",
      price: 14000,
    },
    {
      id: "cargador-iphone-35W-3",
      title: "Cargador Iphone 35W ",
      description: "Adaptador usb-C+C 35W + usb + C .",
      image:
        " /images/imagenes de accesorios/cargador y adaptadores/cargador+cable-35w-iphone.webp",
      alt: "cargador iPhone 35W",
      link: "/accessories/",
      price: 25000,
    },
    {
      id: "adaptador-cargador-ibek-4",
      title: "adaptador Cargador Ibek",
      description: "adaptator IBEK usb 2.5A. ",
      image:
        " /images/imagenes de accesorios/cargador y adaptadores/Cabezal-ibek.webp",
      alt: "adaptador cargador Ibek",
      link: "/accessories/",
      price: 5000,
    },
    {
      id: "cargador-ibek-5-v5",
      title: "Cargador Ibek",
      description: "Cargador Ibek + Usb tipe-C 2.6A.",
      image:
        " /images/imagenes de accesorios/reloojes-smart/cargador+cable-ibek.webp",
      alt: "cargador IBEK 2.6A",
      link: "/accessories/",
      price: 6000,
    },
    {
      id: "cargador-ibek-5-8A-6",
      title: "Cargador IBEK 5.8A",
      description: "Cargador Ibek color Negro,Amarrillo,Rosa 5.8A usb-type-C ",
      image:
        " /images/imagenes de accesorios/reloojes-smart/cargador+cable- 5.1ibek.webp.webp",
      alt: "cargador IBEK 5.8A",
      link: "/accessories/",
      price: 7000,
    },
  ],
  luces: [
    {
      id: "foco-luz-led-giratorio-1",
      title: "Foco de luz Led giratorio  ",
      description: "foco giratorio luz led.",
      image: "  /images/imagenes de accesorios/luces Let-foco-simole.webp",
      alt: "foco led giratorio",
      link: "/accessories/",
      price: 4000,
    },
    {
      id: "tira-luz-led-RGB-2",
      title: "Tira de Luz led RGB ",
      description: "Tira de luz led  rgb 5 metros con control.",
      image: "  /images/imagenes de accesorios/luz-led-5-metros.webp",
      alt: "tira de 5 metros luz LED RGB",
      link: "/accessories/",
      price: 12000,
    },
  ],
  joysticks: [
    {
      id: "joystick-playstation-2-1",
      title: "Joystick  paystation 2",
      description: "Descripción del joystick 2.",
      image: "  /images/imagenes de accesorios/yostig-play-2.webp",
      alt: "joystick Playstation 2",
      link: "/accessories/",
      price: 15000,
    },
    {
      id: "joystick-playstation-3-2",
      title: "Joystick  paystation 3",
      description: "joystick  boubleshock para playstation 4.",
      image:
        " /images/imagenes%20de%20accesorios/p2eowgjjysojdgurw5izhzy69cw1qlcdeegjdhxc1-0a6c5e0298e3dc614e16929963434619-1024-1024.webp",
      alt: "joystick Playstation 3",
      link: "/accessories/",
      price: 20000,
    },
    {
      id: "joystick-playstation-4-3",
      title: "Joystick  paystation 4",
      description: " joystick  boubleshock para playstation 4.",
      image: " /images/imagenes de accesorios/Josting-sin-nombre-play4.webp",
      alt: "joystick Playstation 4",
      link: "/accessories/",
      price: 35000,
    },
  ],
  pendrive_memories: [
    {
      id: "memoria-sandisk-64GB-1",
      title: "Memoria SanDisk ",
      description: "Memoria SanDisk de 64GB",
      image: "  /images/imagenes de accesorios/Memories-SanDisk-64Gb .webp",
      alt: "memoria SanDisk 64GB",
      link: "/accessories/",
      price: 13000,
    },
    {
      id: "memoria-sandisk-128GB-2",
      title: "Memoria SanDisk ",
      description: "Memoria SanDisk ultra 128GB.",
      image: "  /images/imagenes de accesorios/MenoriasSanDisk128GB.webp",
      alt: "memoria SanDisk 128GB",
      link: "/accessories/",
      price: 25000,
    },
    {
      id: "pendrive-datatraveller-128GB-3",
      title: "Pendrive DataTravel ",
      description: "Pendrive DataTravel 128GB ",
      image: " /images/imagenes de accesorios/Pendrive-DataTravel-128GB.webp",
      alt: "pendrive DataTravel 128GB",
      link: "/accessories/",
      price: 20000,
    },
    {
      id: "pendrive-sandisk-8GB-4",
      title: "Pendrive SandDisk ",
      description: " Pendrive SandDisk 8GB",
      image: "  /images/imagenes de accesorios/pendrive- SanDisk-8GB.webp",
      alt: "pendrive SanDisk 8GB",
      link: "/accessories/",
      price: 5000,
    },
    {
      id: "pendrive-sandisk-64GB-5",
      title: "Pendrive SandDisk ",
      description: " Pendrive SandDisk 64GB",
      image: "  /images/imagenes de accesorios/sanDIsk-64GB.webp",
      alt: "pendrive SanDisk 64GB",
      link: "/accessories/",
      price: 15000,
    },
    {
      id: "pendrive-datatraveller-64GB-6",
      title: "Pendrive DataTravel ",
      description: "Pendrive DataTravel 64GB",
      image: " /images/imagenes de accesorios/pendrive-DataTravel-64gb.webp",
      alt: "pendrive DataTravel 64GB",
      link: "/accessories/",
      price: 12000,
    },
  ],
};
export const promotions: Promotions[] = [
  {
    title: "Pendrive DataTravel ",
    description: "Pendrive DataTravel 64GB ",
    image: " /images/imagenes de accesorios/pendrive-DataTravel-64gb.webp",
    alt: "DataTravel-64GB",
    link: "/accessories/",
  },
  {
    title: "Joystick  paystation 2",
    description: "Descripción del joystick 2.",
    image: "  /images/imagenes de accesorios/yostig-play-2.webp",
    alt: "joystick 1",
    link: "/accessories/",
  },
  {
    title: "Auricular E6s",
    description: "Auricular E6s $8.000",
    image:
      "/images/imagenes de accesorios/auriculares/woj29gyehddpkygajr99kxqhj4aqq5sbeeuulxcf1-0fac5175a684525fe316952316847011-1024-1024.webp",
    alt: "Auricular Alphina F9-5",
    link: "/accessories/",
  },
  {
    title: "Auricular Samsung S10+",
    description: "Auricular samsung S10+",
    image:
      " /images/imagenes de accesorios/auriculares/61c08494a6a4a1-1f8de48ecb0cbbd65516933460314928-1024-1024.webp",
    alt: "auriculares S10+",
    link: "/accessories/",
  },
];
// export const phoneimages: Phoneimages[] =
// samsung: [
//     {
//       title: "samsung  ",
//       description: "",
//       image: "  /images/",
//       alt: "Samsung",
//       link: "/phones/samsung/",
//     },
//     {
//            title: "samsung  ",
//       description: "",
//       image: "  /images/",
//       alt: "Samsung",
//       link: "/phones/samsung/",
//     },

//     {
//          title: "samsung  ",
//       description: "",
//       image: "  /images/",
//       alt: "Samsung",
//       link: "/phones/samsung/",
//     },
//     {
//       title: "Pendrive SandDisk ",
//       description: " Pendrive SandDisk 8GB precio:$.",
//       image: "  /images/imagenes de accesorios/pendrive- SanDisk-8GB.webp",
//       alt: "pendrive-8GB",
//       link: "/accessories/",
//     },
//     {
//            title: "samsung  ",
//       description: "",
//       image: "  /images/",
//       alt: "Samsung",
//       link: "/phones/samsung/",
//     },
//     {
//         title: "samsung  ",
//       description: "",
//       image: "  /images/",
//       alt: "Samsung",
//       link: "/phones/samsung/",
//     },
//]
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
