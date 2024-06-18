import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@mui/material";

const accessoriesData = {
  auriculares: [
    {
      title: "Auricular Samsung blanco ",
      description: "Auricular samsung.color blanco. Precio $2500.",
      image:
        " /images/imagenes de accesorios/auriculares/v4xzfnygr94x3xlg2tg3nwunaml0lypxwdu6cyci1-242a55555454b31d6916933459293535-1024-1024.webp",
      alt: "auriculares samsung",
    },
    {
      title: "Auricular Samsung S10+",
      description: "Auricular samsung S10+ Precio $3.500",
      image:
        " /images/imagenes de accesorios/auriculares/61c08494a6a4a1-1f8de48ecb0cbbd65516933460314928-1024-1024.webp",
      alt: "",
    },
    {
      title: "Auricular Samsung S10+ tipo C",
      description: "Auricular samsung S10+ Precio $4.000",
      image:
        " /images/imagenes de accesorios/auriculares/qk6b8g4zby5imkfexsxsdtadw2yhg8iqkw5n7yih-db5fffc9ed3e32bdf517146832233437-1024-1024.webp",
      alt: "",
    },
    {
      title: "auricular boca-river",
      description: "auricular boca-river Precio $2.500.",
      image:
        "/images/imagenes de accesorios/auriculares/63f8f390f20fe-fdd6f29beda3f1f75917116647075136-1024-1024.webp",
      alt: "auricular boca-river",
    },
    {
      title: "Auricular wireles",
      description: "Auricular wireles bluothooh  Precio $5.000",
      image:
        "/images/imagenes de accesorios/auriculares/wirrless-auriculares.webp",
      alt: "",
    },
    {
      title: "Auricular E6s",
      description: "Auricular E6s $8.000",
      image:
        "/images/imagenes de accesorios/auriculares/woj29gyehddpkygajr99kxqhj4aqq5sbeeuulxcf1-0fac5175a684525fe316952316847011-1024-1024.webp",
      alt: "Auricular Alphina F9-5",
    },
    {
      title: "Auricular TWS F9",
      description: "Auriculares Bluothooh Tws F9 color negro precio 9.500.",
      image:
        "/images/imagenes de accesorios/auriculares/16509851200461-d000c0e1fafb13cae616509857742852-1024-10241-cd8ef6189004c3ff1216929871942084-1024-1024.webp",
      alt: "auricular bluthooh",
    },
    {
      title: "Auricular Alphina F9-5",
      description: "Auricular Alphina F9-5 coilor negro. precio $12.000",
      image:
        "/images/imagenes de accesorios/auriculares/f9-5-alpina11-734db68f6a4bb01cdc16894733982168-1024-1024.webp",
      alt: "Auricular Alphina F9-5",
    },
    {
      title: "Auricular Alphina F10-pro",
      description: "Auricular Alphina F10-pro color negro. precio $10.000",
      image: "/images/imagenes de accesorios/auriculares/alphinaF10pro.webp",
      alt: "Auricular Alphina F10-pro",
    },
    {
      title: "Auricular  vincha river",
      description: "Auricular vincha River   precio $15000",
      image:
        " /images/imagenes de accesorios/auriculares/k048shli27mfitvfsu1ow5yjymc2ujvautenh56c-5d041f5e574051fcc417072552219932-1024-1024.webp",
      alt: "Auricular vincha River",
    },
    {
      title: "Auricular wireless p47 M",
      description: "Auricular wireless p47 M varios coleres. precio $12000",
      image:
        " /images/imagenes de accesorios/auriculares/img-20231218-wa0032-e6f9a117550fb334cc17029199280406-1024-1024.webp",
      alt: "Auricular wireless p47 M",
    },
    {
      title: "Auricular wireless-p47 ",
      description:
        "Auricular wireless con control multimedia p47 color Rojo. precio $12000",
      image:
        " /images/imagenes de accesorios/auriculares/p47-rojo1-8d3d2b26e2dc9639d316929925240990-1024-1024.webp",
      alt: "Auricular wireless p47 ",
    },
  ],
  RelojSmart: [
    {
      title: "Smart-Band S6 ",
      description: "reloj Smart-Band S6 precio $.",
      image: " /images/imagenes de accesorios/reloojes-smart/reloj-S6.webp",
      alt: "smart-band-s6",
    },
    {
      title: "Smart-Band D20",
      description: "Smart-Band D20 precio:$.",
      image:
        " /images/imagenes de accesorios/reloojes-smart/Reloj-smartk-D20.webp",
      alt: "smart-band-D-20",
    },
    {
      title: "Smart-Band M7",
      description: "SmartBand M7. Precio:$",
      image:
        " /images/imagenes de accesorios/reloojes-smart/smat-reloj-M7.webp",
      alt: "Smart_Band_M7",
    },
  ],
  cables: [
    {
      title: "Cable Data Samsung ",
      description: "Cable Data Samsung Tipo C-Tipo C 3A precio $.",
      image:
        " /images/imagenes de accesorios/cargador y adaptadores/USB-Samsung-Tipo-C-A Tipo-C.webp",
      alt: "cable 1",
    },
    {
      title: "Cable usb Samsung V8",
      description: "Usb Samsung type-V8  color Negro precio:$.",
      image:
        " /images/imagenes de accesorios/cargador y adaptadores/usb-Samsung-V8.webp",
      alt: "cable Usb iphone",
    },
    {
      title: "Cable Motorola Tipo C ",
      description: "cable Data 3.0 Motorola tipo C. Precio:$",
      image:
        " /images/imagenes de accesorios/cargador y adaptadores/cable-motorola-v8-caja-blanca-1e4c1ac5622046baf117024923680059-1024-1024.webp",
      alt: "cable 2",
    },
    {
      title: "Cable usb Iphone",
      description: "Usb iphone 1 metro color blanco precio:$.",
      image:
        " /images/imagenes de accesorios/cargador y adaptadores/usb-iphone.webp",
      alt: "cable Usb iphone",
    },
    {
      title: "Cable Samsung-usb-type-C",
      description: "Cable Samsung 5.0A usb-tipo C.Precio:$",
      image:
        " /images/imagenes de accesorios/cargador y adaptadores/usb-Samsung-tipo-C.webp",
      alt: "cable usb a type C",
    },
    {
      title: "Cable Olny Eco",
      description: "Cable Olny Eco type-C color blanco precio:$.",
      image:
        " /images/imagenes de accesorios/cargador y adaptadores/cable-V8-Eco.webp",
      alt: "cable Usb Eco olny",
    },
  ],

  cargador: [
    {
      title: "Cargador Motorola 50 W",
      description: " cargador Samsung 50W 2-tipo C + 2 usb tipo-C Precio :$.",
      image:
        " /images/imagenes de accesorios/cargador-usb-50w-tipoc+2usb-tipoc.webp",
      alt: "cargador 1",
    },
    {
      title: "adaptador  Motorola 50w",
      description:
        "Adaptador Motorola type-c +1 usb type-c. color negro precio:$",
      image:
        " /images/imagenes de accesorios/cargador y adaptadores/cargador-Samsung 1usb_type-C -50W.webp",
      alt: "cargador Motorola 50 W",
    },
    {
      title: "Cargador Iphone 35W ",
      description: "Adaptador usb-C+C 35W + usb+C + C precio:$  .",
      image:
        " /images/imagenes de accesorios/cargador y adaptadores/cargador+cable-35w-iphone.webp",
      alt: "cargador IPhone ",
    },
    {
      title: "adaptador Cargador Ibek",
      description: "adaptator IBEK usb 2.5A. Precio: $ 00.00",
      image:
        " /images/imagenes de accesorios/cargador y adaptadores/Cabezal-ibek.webp",
      alt: "cargador 2",
    },
    {
      title: "Cargador Ibek",
      description: "Cargador Ibek + Usb tipe-C 2.6A.",
      image:
        " /images/imagenes de accesorios/reloojes-smart/cargador+cable-ibek.webp",
      alt: "cargador IBEK 2.6A",
    },
    {
      title: "Cargador IBEK 5.8A",
      description:
        "Cargador Ibek color Negro,Amarrillo,Rosa 5.8A usb-type-C Precio:$00.",
      image:
        " /images/imagenes de accesorios/reloojes-smart/cargador+cable- 5.1ibek.webp.webp",
      alt: "cargador 2",
    },
  ],
  luces: [
    {
      title: "Foco de luz Led giratorio  ",
      description: "foco giratorio luz led precio: .",
      image: "  /images/imagenes de accesorios/luces Let-foco-simole.webp",
      alt: "foco led",
    },
    {
      title: "Tira de Luz led RGB ",
      description: "Tira de luz led  rgb 5 metros con control.",
      image: "  /images/imagenes de accesorios/luz-led-5-metros.webp",
      alt: "tira de 5 metros luz Led ",
    },
  ],
  joysticks: [
    {
      title: "Joystick  paystation 2",
      description: "Descripción del joystick 2.",
      image: "  /images/imagenes de accesorios/yostig-play-2.webp",
      alt: "joystick 1",
    },
    {
      title: "Joystick  paystation 3",
      description: "joystick  boubleshock para playstation 4 precio 20.0000.",
      image:
        " /images/imagenes%20de%20accesorios/p2eowgjjysojdgurw5izhzy69cw1qlcdeegjdhxc1-0a6c5e0298e3dc614e16929963434619-1024-1024.webp",
      alt: "joystickpalystation3",
    },
    {
      title: "Joystick  paystation 4",
      description: " joystick  boubleshock para playstation 4 precio 30.0000.",
      image: " /images/imagenes de accesorios/Josting-sin-nombre-play4.webp",
      alt: "joystick play 4 ",
    },
  ],
  pendrive_memories: [
    {
      title: "Memoria SanDisk ",
      description: "Memoria SanDisk de 64GB Precio:$00",
      image: "  /images/imagenes de accesorios/Memories-SanDisk-64Gb .webp",
      alt: "pendrive-64GB",
    },
    {
      title: "Memoria SanDisk ",
      description: "Memoria SanDisk ultra 128GB  precio .",
      image: "  /images/imagenes de accesorios/MenoriasSanDisk128GB.webp",
      alt: "SanDisk-128GB",
    },
    {
      title: "Pendrive DataTravel ",
      description: "Pendrive DataTravel 128GB precio $.",
      image: " /images/imagenes de accesorios/Pendrive-DataTravel-128GB.webp",
      alt: "DataTravel-64GB",
    },
    {
      title: "Pendrive SandDisk ",
      description: " Pendrive SandDisk 8GB precio:$.",
      image: "  /images/imagenes de accesorios/pendrive- SanDisk-8GB.webp",
      alt: "pendrive-8GB",
    },
    {
      title: "Pendrive SandDisk ",
      description: " Pendrive SandDisk 64GB precio:$.",
      image: "  /images/imagenes de accesorios/sanDIsk-64GB.webp",
      alt: "joystick play 4 ",
    },
    {
      title: "Pendrive DataTravel ",
      description: "Pendrive DataTravel 64GB  precio .",
      image: " /images/imagenes de accesorios/pendrive-DataTravel-64gb.webp",
      alt: "DataTravel-64GB",
    },
  ],
};

const Accessories: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleCardClick = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <Container>
      {Object.entries(accessoriesData).map(([section, products]) => (
        <Box key={section} mb={4}>
          <Typography variant="h4" gutterBottom>
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Typography>
          <Grid container spacing={4}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea
                    onClick={() => handleCardClick(product.image)}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={product.image}
                      alt={product.alt}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogTitle></DialogTitle>
        <DialogContent>
          {selectedImage && (
            <img src={selectedImage} alt="Ampliada" style={{ width: "100%" }} />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Accessories;
