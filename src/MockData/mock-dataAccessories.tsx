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
  price?: number;
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
  parlantes?: AccessoryItem[];
  joysticks: AccessoryItem[];
  pendrive_memories: AccessoryItem[];
  computacion: AccessoryItem[];
  varios: AccessoryItem[];
}
export const accessoriesData: AccessoriesData = {
  auriculares: [
    {
      id: "auricular-samsung-blanco-1",
      title: "Auricular Samsung blanco ",
      description: "Auricular samsung.color blanco",
      image:
        " /images/imagenes_de_accesorios/auriculares/v4xzfnygr94x3xlg2tg3nwunaml0lypxwdu6cyci1-242a55555454b31d6916933459293535-1024-1024.webp",
      alt: "auriculares samsung",
      link: "/accessories/",
      price: 2500,
    },
    {
      id: "auricular-samsung-S10-plus-2",
      title: "Auricular Samsung S10+",
      description: "Auricular samsung S10+",
      image:
        " /images/imagenes_de_accesorios/auriculares/61c08494a6a4a1-1f8de48ecb0cbbd65516933460314928-1024-1024.webp",
      alt: "auriculares S10+",
      link: "/accessories/",
      price: 3500,
    },
    {
      id: "auricular-samsung-S10-plus-typeC-3",
      title: "Auricular Samsung S10+ tipo C",
      description: "Auricular samsung S10+",
      image:
        " /images/imagenes_de_accesorios/auriculares/qk6b8g4zby5imkfexsxsdtadw2yhg8iqkw5n7yih-db5fffc9ed3e32bdf517146832233437-1024-1024.webp",
      alt: "auriculares S10+ tipo C",
      link: "/accessories/",
      price: 4000,
    },
    {
      id: "auricular-boca-river-4",
      title: "auricular boca-river",
      description: "auricular boca-river",
      image:
        "/images/imagenes_de_accesorios/auriculares/63f8f390f20fe-fdd6f29beda3f1f75917116647075136-1024-1024.webp",
      alt: "auricular boca-river",
      link: "/accessories/",
      price: 2500,
    },
    {
      id: "auricular-wireless-5",
      title: "Auricular wireles",
      description: "Auricular wireles bluothooh",
      image:
        "/images/imagenes_de_accesorios/auriculares/wirrless-auriculares.webp",
      alt: "auricular wireless",
      link: "/accessories/",
      price: 5000,
    },
    {
      id: "auricular-E6s-6",
      title: "Auricular E6s",
      description: "Auricular E6s",
      image:
        "/images/imagenes_de_accesorios/auriculares/woj29gyehddpkygajr99kxqhj4aqq5sbeeuulxcf1-0fac5175a684525fe316952316847011-1024-1024.webp",
      alt: "Auricular E6s",
      link: "/accessories/",
      price: 8000,
    },
    {
      id: "auricular-bluetooth-TWS-F9-7",
      title: "Auricular TWS F9",
      description: "Auriculares Bluothooh Tws F9 color negro",
      image:
        "/images/imagenes_de_accesorios/auriculares/16509851200461-d000c0e1fafb13cae616509857742852-1024-10241-cd8ef6189004c3ff1216929871942084-1024-1024.webp",
      alt: "auricular bluetooth TWS F9",
      link: "/accessories/",
      price: 9500,
    },
    {
      id: "auricular-alphina-F9-5-8",
      title: "Auricular Alphina F9-5",
      description: "Auricular Alphina F9-5 coilor negro.",
      image:
        "/images/imagenes_de_accesorios/auriculares/f9-5-alpina11-734db68f6a4bb01cdc16894733982168-1024-1024.webp",
      alt: "Auricular Alphina F9-5",
      link: "/accessories/",
      price: 12000,
    },
    {
      id: "auricular-alphina-F10-pro-9",
      title: "Auricular Alphina F10-pro",
      description: "Auricular Alphina F10-pro color negro.",
      image: "/images/imagenes_de_accesorios/auriculares/alphinaF10pro.webp",
      alt: "Auricular Alphina F10-pro",
      link: "/accessories/",
      price: 10000,
    },
    {
      id: "auricular-vincha-river-10",
      title: "Auricular  vincha river",
      description: "Auricular vincha River",
      image:
        " /images/imagenes_de_accesorios/auriculares/k048shli27mfitvfsu1ow5yjymc2ujvautenh56c-5d041f5e574051fcc417072552219932-1024-1024.webp",
      alt: "Auricular vincha River",
      link: "/accessories/",
      price: 15000,
    },
    {
      id: "auricular-wireless-p47-M-11",
      title: "Auricular wireless p47 M",
      description: "Auricular wireless p47 M varios coleres.",
      image:
        " /images/imagenes_de_accesorios/auriculares/img-20231218-wa0032-e6f9a117550fb334cc17029199280406-1024-1024.webp",
      alt: "Auricular wireless p47 M",
      link: "/accessories/",
      price: 12000,
    },
    {
      id: "auricular-wireless-p47-12",
      title: "Auricular wireless-p47 ",
      description: "Auricular wireless con control multimedia p47 color Rojo.",
      image:
        " /images/imagenes_de_accesorios/auriculares/p47-rojo1-8d3d2b26e2dc9639d316929925240990-1024-1024.webp",
      alt: "Auricular wireless p47 ",
      link: "/accessories/",
      price: 12000,
    },
    {
      id: "auricular-wabe3080-13",
      title: "auricular  jbl wave 380",
      description: "Auricular bluethooh jbl wave 380.",
      image:
        " /images/imagenes_de_accesorios/auriculares/auricularesjblwave380.jpg",
      alt: "Auricular wave 380",
      link: "/accessories/",
      price: 45000,
    },
  ],
  RelojSmart: [
    {
      id: "smart-band-S6-1",
      title: "Smart-Band S6 ",
      description: "reloj Smart-Band S6",
      image: " /images/imagenes_de_accesorios/reloojes-smart/reloj-S6.webp",
      alt: "smart-band-s6",
      link: "/accessories/",
      price: 15000,
    },
    {
      id: "smart-band-D20-2",
      title: "Smart-Band D20",
      description: "Smart-Band D20",
      image:
        " /images/imagenes_de_accesorios/reloojes-smart/Reloj-smartk-D20.webp",
      alt: "smart-band-D-20",
      link: "/accessories/",
      price: 12000,
    },
    {
      id: "smart-band-M7-3",
      title: "Smart-Band M7",
      description: "SmartBand M7.",
      image:
        " /images/imagenes_de_accesorios/reloojes-smart/smat-reloj-M7.webp",
      alt: "Smart_Band_M7",
      link: "/accessories/",
      price: 10000,
    },
    {
      id: "smart-band-W-H Max7-4",
      title: "Smart-Band W-H Max7",
      description:
        "notificacion de llamadas mensajes control de sueño, ritmo cardiaco modo deporte y mucho mas..!! diferentes colores.",
      image: " /images/imagenes_de_accesorios/reloojes-smart/relojes-7.jpg",
      alt: "Smart_Band_M9",
      link: "/accessories/",
      price: 25000,
    },
  ],
  cables: [
    {
      id: "cable-data-samsung-1",
      title: "Cable Data Samsung ",
      description: "Cable Data Samsung Tipo C-Tipo C 3A",
      image:
        " /images/imagenes_de_accesorios/cargador y adaptadores/USB-Samsung-Tipo-C-A Tipo-C.webp",
      alt: "cable data samsung type-c",
      link: "/accessories/",
      price: 3000,
    },
    {
      id: "cable-usb-samsung-V8-2",
      title: "Cable usb Samsung V8",
      description: "Usb Samsung type-V8  color Negro.",
      image:
        " /images/imagenes_de_accesorios/cargador y adaptadores/usb-Samsung-V8.webp",
      alt: "cable USB Samsung V8",
      link: "/accessories/",
      price: 5000,
    },
    {
      id: "cable-motorola-typeC-3",
      title: "Cable Motorola Tipo C ",
      description: "cable Data 3.0 Motorola tipo C",
      image:
        " /images/imagenes_de_accesorios/cargador y adaptadores/cable-motorola-v8-caja-blanca-1e4c1ac5622046baf117024923680059-1024-1024.webp",
      alt: "cable Motorola Type C",
      link: "/accessories/",
      price: 3500,
    },
    {
      id: "cable-usb-iphone-4",
      title: "Cable usb Iphone",
      description: "Usb iphone 1 metro color blanco.",
      image:
        " /images/imagenes_de_accesorios/cargador y adaptadores/usb-iphone.webp",
      alt: "cable USB iPhone",
      link: "/accessories/",
      price: 4000,
    },
    {
      id: "cable-samsung-usb-typeC-5",
      title: "Cable Samsung-usb-type-C",
      description: "Cable Samsung 5.0A usb-tipo C",
      image:
        " /images/imagenes_de_accesorios/cargador y adaptadores/usb-Samsung-tipo-C.webp",
      alt: "cable Samsung USB Type C",
      link: "/accessories/",
      price: 6000,
    },
    {
      id: "cable-olny-eco-6",
      title: "Cable Olny Eco",
      description: "Cable Olny Eco type-C color blanco",
      image:
        " /images/imagenes_de_accesorios/cargador y adaptadores/cable-V8-Eco.webp",
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
        " /images/imagenes_de_accesorios/cargador y adaptadores/cargador-usb-50w-tipoc+2usb-tipoc.webp",
      alt: "cargador Motorola 50W",
      link: "/accessories/",
      price: 8000,
    },
    {
      id: "cargador-adaptador-motorola-50w-2",
      title: " cargador adaptador  Motorola 50w",
      description: "Adaptador Motorola type-c +1 usb type-c. color negro",
      image:
        " /images/imagenes_de_accesorios/cargador y adaptadores/cargador-Samsung 1usb_type-C -50W.webp",
      alt: "cargador adaptador Motorola 50W",
      link: "/accessories/",
      price: 14000,
    },
    {
      id: "cargador-iphone-35W-3",
      title: "Cargador Iphone 35W ",
      description: "Adaptador usb-C+C 35W + usb + C .",
      image:
        " /images/imagenes_de_accesorios/cargador y adaptadores/cargador+cable-35w-iphone.webp",
      alt: "cargador iPhone 35W",
      link: "/accessories/",
      price: 25000,
    },
    {
      id: "adaptador-cargador-ibek-4",
      title: "adaptador Cargador Ibek",
      description: "adaptator IBEK usb 2.5A. ",
      image:
        " /images/imagenes_de_accesorios/cargador y adaptadores/Cabezal-ibek.webp",
      alt: "adaptador cargador Ibek",
      link: "/accessories/",
      price: 5000,
    },
    {
      id: "cargador-ibek-5-v5",
      title: "Cargador Ibek",
      description: "Cargador Ibek + Usb tipe-C 2.6A.",
      image:
        " /images/imagenes_de_accesorios/reloojes-smart/cargador+cable-ibek.webp",
      alt: "cargador IBEK 2.6A",
      link: "/accessories/",
      price: 6000,
    },
    {
      id: "cargador-ibek-5-8A-6",
      title: "Cargador IBEK 5.8A",
      description: "Cargador Ibek color Negro,Amarrillo,Rosa 5.8A usb-type-C ",
      image:
        "/images/imagenes_de_accesorios/reloojes-smart/cargador+cable- 5.1ibek.webp.webp",
      alt: "cargador IBEK 5.8A",
      link: "/accessories/",
      price: 7000,
    },
  ],
  parlantes: [
    {
      id: "parlantes-1",
      title: "JBL Flip 6",
      description: "parlante bluethooh jbl flip 6 ",
      image: "/images/imagenes_de_accesorios/parlantes/jblflip6.jpg",
      alt: "parlantes",
      link: "/accesories/parlantes/",
      price: 75000,
    },
    {
      id: "parlantes-2",
      title: "parlante aiwa original",
      description: "parlante bluethooh Aiwa con iluminacion rgb + correa",
      image: "/images/imagenes_de_accesorios/parlantes/parlanteaiwa.jpg",
      alt: "parlante",
      link: "/accesories/parlantes/",
      price: 35000,
    },
    {
      id: "parlantes-3",
      title: "parlante olny ",
      description: "parlante bluethooh cilindro con iluminacion rgb olny",
      image:
        "/images/imagenes_de_accesorios/parlantes/parlantecilindroolny.jpg",
      alt: "parlante",
      link: "/accesories/",
      price: 35000,
    },
    {
      id: "parlantes-4",
      title: "parlante model kts15-15",
      description: "parlante bluethoh de 6 pulgadas con microfono",
      image:
        "/images/imagenes_de_accesorios/parlantes/parlante-con-migrofono.webp",
      alt: "parlante_microfono",
      link: "/accesories/",
      price: 35000,
    },
    {
      id: "parlantes-5",
      title: "parlante bluethooh",
      description: "parlante bluethooh con iluminacion rgb",
      image:
        "/images/imagenes_de_accesorios/parlantes/img-20231218-wa0031-1116a9139d74ab9fcc17029200378527-1024-1024.webp",
      alt: "parlante",
      link: "/accesories/",
      price: 35000,
    },
    {
      id: "parlantes-6",
      title: "",
      description: "parlante bluethooh rosa rgb con microfono",
      image: "/images/imagenes_de_accesorios/parlantes/parlante_rosa.jpg",
      alt: "parlante",
      link: "/accesories/",
      price: 35000,
    },
  ],
  luces: [
    {
      id: "foco-luz-led-giratorio-1",
      title: "Foco de luz Led giratorio  ",
      description: "foco giratorio luz led.",
      image: "/images/imagenes_de_accesorios/luces/luces Let-foco-simole.webp",
      alt: "foco led giratorio",
      link: "/accessories/",
      price: 5000,
    },
    {
      id: "tira-luz-led-RGB-2",
      title: "Tira de Luz led RGB ",
      description: "Tira de luz led  rgb 5 metros con control.",
      image: "  /images/imagenes_de_accesorios/luces/luz-led-5-metros.webp",
      alt: "tira de 5 metros luz LED RGB",
      link: "/accessories/",
      price: 15000,
    },
    {
      id: "tira-neon-led-RGB-2",
      title: "Tira de Luz  de Neon RGB ",
      description: "Tira de luz de neon rgb 5 metros con control.",
      image: "/images/imagenes_de_accesorios/luces/tiraledneon.jpg",
      alt: "tira de 5 metros luz Neon RGB",
      link: "/accessories/",
      price: 24000,
    },
  ],
  joysticks: [
    {
      id: "joystick-playstation-2-1",
      title: "Joystick  paystation 2",
      description: "Descripción del joystick 2.",
      image: "  /images/imagenes_de_accesorios/joysting/yostig-play-2.webp",
      alt: "joystick Playstation 2",
      link: "/accessories/",
      price: 15000,
    },
    {
      id: "joystick-playstation-3-2",
      title: "Joystick  paystation 3",
      description: "joystick boubleshock para playstation 4.",
      image:
        " /images/imagenes_de_accesorios/joysting/p2eowgjjysojdgurw5izhzy69cw1qlcdeegjdhxc1-0a6c5e0298e3dc614e16929963434619-1024-1024.webp",
      alt: "joystick Playstation 3",
      link: "/accessories/",
      price: 20000,
    },
    {
      id: "joystick-playstation-4-3",
      title: "Joystick  paystation 4",
      description: " joystick  boubleshock para playstation 4.",
      image:
        " /images/imagenes_de_accesorios/joysting/Josting-sin-nombre-play4.webp",
      alt: "joystick Playstation 4",
      link: "/accessories/",
      price: 35000,
    },
    {
      id: "joystick-playstation-5-4",
      title: "Joystick  paystation 5",
      description: " joystick  boubleshock para playstation 5.",
      image: "/images/imagenes_de_accesorios/joysting/joystick-ps5.jpg",
      alt: "joystick Playstation 5",
      link: "/accessories/",
      price: 50000,
    },
    {
      id: "joystick-pc-5",
      title: "Joystick PC Ucom",
      description: "Joystick-pc-usb.",
      image: "/images/imagenes_de_accesorios/joysting/joystingpc.jpg",
      alt: "joystick Xbox One",
      link: "/accessories/",
      price: 25000,
    },
  ],
  pendrive_memories: [
    {
      id: "memoria-sandisk-64GB-1",
      title: "Memoria SanDisk ",
      description: "Memoria SanDisk de 64GB",
      image:
        "  /images/imagenes_de_accesorios/pendrive-memorias/Memories-SanDisk-64Gb .webp",
      alt: "memoria SanDisk 64GB",
      link: "/accessories/",
      price: 13000,
    },
    {
      id: "memoria-sandisk-128GB-2",
      title: "Memoria SanDisk ",
      description: "Memoria SanDisk ultra 128GB.",
      image:
        "  /images/imagenes_de_accesorios/pendrive-memorias/MenoriasSanDisk128GB.webp",
      alt: "memoria SanDisk 128GB",
      link: "/accessories/",
      price: 25000,
    },
    {
      id: "pendrive-datatraveller-128GB-3",
      title: "Pendrive DataTravel ",
      description: "Pendrive DataTravel 128GB ",
      image:
        " /images/imagenes_de_accesorios/pendrive-memorias/Pendrive-DataTravel-128GB.webp",
      alt: "pendrive DataTravel 128GB",
      link: "/accessories/",
      price: 20000,
    },
    {
      id: "pendrive-sandisk-8GB-4",
      title: "Pendrive SandDisk ",
      description: " Pendrive SandDisk 8GB",
      image:
        "  /images/imagenes_de_accesorios/pendrive-memorias/pendrive- SanDisk-8GB.webp",
      alt: "pendrive SanDisk 8GB",
      link: "/accessories/",
      price: 5000,
    },
    {
      id: "pendrive-sandisk-64GB-5",
      title: "Pendrive SandDisk ",
      description: " Pendrive SandDisk 64GB",
      image:
        "  /images/imagenes_de_accesorios/pendrive-memorias/sanDIsk-64GB.webp",
      alt: "pendrive SanDisk 64GB",
      link: "/accessories/",
      price: 15000,
    },
    {
      id: "pendrive-datatraveller-64GB-6",
      title: "Pendrive DataTravel ",
      description: "Pendrive DataTravel 64GB",
      image:
        " /images/imagenes_de_accesorios/pendrive-memorias/pendrive-DataTravel-64gb.webp",
      alt: "pendrive DataTravel 64GB",
      link: "/accessories/",
      price: 12000,
    },
  ],
  computacion: [
    {
      id: "mouse-inalambrico-1",
      title: "mouse inalambrico",
      description: "mouse imalambrico tipo C recargable  con rgb.",
      image: "/images/imagenes_de_accesorios/computacion /mouseinalambrico.jpg",
      alt: "varios accesorios",
      link: "/accessories/",
      price: 18000,
    },
    {
      id: "Teclado-inalambrico-2",
      title: "teclado inalambrico con rgb",
      description: "teclado gamer inalambrico con rgb.",
      image: "/images/imagenes_de_accesorios/computacion /teclado-gamer.jpeg",
      alt: "teclado inalambrico",
      link: "/accessories/",
      price: 19500,
    },
    {
      id: "cargador-universal-timeC-3",
      title: "cargador-universal PC-time ",
      description: "cargador para notbook universal time hasta 24 wats.",
      image:
        "/images/imagenes_de_accesorios/computacion /cargador-universal-pc.jpeg",
      alt: "varios accesorios",
      link: "/accessories/",
      price: 20000,
    },
    {
      id: "cargador-universal-dinaxC-4",
      title: "cargador-universal PC-dinax",
      description: "cargador para notbook universal dinax hasta 24 wats.",
      image:
        "/images/imagenes_de_accesorios/computacion /cargador-universal-dinax.jpg",
      alt: "varios accesorios",
      link: "/accessories/",
      price: 20000,
    },

    {
      id: "adaptador-OTG-5",
      title: "Adaptador OTG tipo C",
      description: "adaptador otg tipo c a usd.",
      image: "/images/imagenes_de_accesorios/computacion /adaptadorotg+c.webp",
      alt: "varios accesorios",
      link: "/accessories/",
      price: 5000,
    },
    {
      id: "adaptador-OTG-6",
      title: "Adaptador OTG tipo V8",
      description: "adaptador otg tipo v8 a usb.",
      image: "/images/imagenes_de_accesorios/computacion /adaptadorotgv8.webp",
      alt: "varios accesorios",
      link: "/accessories/",
      price: 5000,
    },
    {
      id: "cable-red-ethernet-7",
      title: "Cable de red Ethernet",
      description: "Cable de red Ethernet 5 metros.",
      image: "/images/imagenes_de_accesorios/computacion /cables-de-red.jpeg",
      alt: "cable de red Ethernet",
      link: "/accessories/",
      price: 7000,
    },
  ],

  varios: [
    {
      id: "varios-1",
      title: "tvbox HEVIC android 6K",
      description:
        "Tvbox 6K android con control + hdmi almacenamiento 512Gb/ram 32Gb.",
      image: "/images/imagenes_de_accesorios/tv-box-6k.jpeg",
      alt: "balanza gramera digital",
      link: "/accessories/",
      price: 60000,
    },
    {
      id: "varios-2",
      title: "balanza Dinax",
      description: "balanza gramera digital dinax .",
      image: "/images/imagenes_de_accesorios/balanza-granera-dinax.webp",
      alt: "balanza gramera digital",
      link: "/accessories/",
      price: 12000,
    },
    {
      id: "varios-3",
      title: "soporte fijo para TV ",
      description: "soporte fijo para tv de 14 a 42.",
      image: "/images/imagenes_de_accesorios/soporte-para-pared40-80.jpg",
      alt: "soporte fijo para TV",
      link: "/accessories/",
      price: 14500,
    },
    {
      id: "varios-4",
      title: "soporte fijo para TV ",
      description: "soporte fijo para tv de 40 a 80.",
      image:
        "/images/imagenes_de_accesorios/cb51e13b-9515-4322-8c45-d06f4faa43df.jpg",
      alt: "soporte fijo para TV",
      link: "/accessories/",
      price: 18000,
    },
    {
      id: "varios-5",
      title: "adaptador de corriente universal",
      description: "adaptador de corriente universal.",
      image:
        "/images/imagenes_de_accesorios/computacion /adaptador-2-patas.webp",
      alt: "adaptador de corriente universal",
      link: "/accessories/",
      price: 5000,
    },
    {
      id: "varios-6",
      title: "cables de rca ",
      description: "cable de rca de 1 metro .",
      image: "/images/imagenes_de_accesorios/cables-rca.jpg",
      alt: "cables de rca",
      link: "/accessories/",
      price: 6000,
    },
    {
      id: "varios-7",
      title: "adaptador de vga a hdmi",
      description: "adaptador de vga a hdmi.",
      image:
        "/images/imagenes_de_accesorios/computacion /adaptador-vga-hdmi.webp",
      alt: "adaptador de vga a hdmi",
      link: "/accessories/",
      price: 8000,
    },
    {
      id: "varios-8",
      title: "adaptador de rca a hdmi",
      description: "adaptador de rca a hdmi.",
      image: "/images/imagenes_de_accesorios/adaptador-rca-hdmi.jpg",
      alt: "adaptador de rca a hdmi",
      link: "/accessories/",
      price: 7500,
    },
  ],
};
