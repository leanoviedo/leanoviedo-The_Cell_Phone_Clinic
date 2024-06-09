import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  IconButton,
  Box,
  CardActionArea,
} from "@mui/material";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Carousel from "react-material-ui-carousel";
import CustomSidebar from "./CustomSidebar";
import { useNavigate } from "react-router-dom"; 

const items = [
  {
    name: "Promoción 1",
    description: "Descripción de la promoción 1",
    image: "public/images/imagenes de accesorios/Memories-SanDisk-64Gb .webp",
    link: "/accessories/",
  },
  {
    name: "Promoción 2",
    description: "Descripción de la promoción 2",
    image:
      "public/images/imagenes de accesorios/auriculares/61c08494a6a4a1-1f8de48ecb0cbbd65516933460314928-1024-1024.webp",
    link: "/accessories",
  },
  {
    name: "Promoción 3",
    description: "Descripción de la promoción 3",
    image:
      "public/images/imagenes de accesorios/auriculares/v4xzfnygr94x3xlg2tg3nwunaml0lypxwdu6cyci1-242a55555454b31d6916933459293535-1024-1024.webp",
    link: "/accessories",
  },
];

const LandingPages: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: "-160px" }}>
      <CustomSidebar />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={0}
        sx={{ mb: 2 }}
      >
        <Grid item>
          <img
            src="public/images/imageslogodog.jpeg"
            alt="logo_Doc"
            style={{ height: "150px", width: "180px" }}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="h2"
            align="center"
            color="primary"
            sx={{ fontWeight: "bold" }}
          >
            La Clinica del Celular
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        Encuentra los mejores productos a los mejores precios.
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
                <IconButton
                  aria-label={`bookmark ${item.name}`}
                  color="primary"
                  sx={{ position: "absolute", top: 10, right: 10 }}
                >
                  <BookmarkAdd />
                </IconButton>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate(item.link)}
                  sx={{ marginLeft: "auto" }}
                >
                  Ver más
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography
        variant="h6"
        align="center"
        color="textPrimary"
        paragraph
        sx={{ marginTop: 4 }}
      >
        Promociones de reparación de celulares
      </Typography>
      <Box sx={{ maxWidth: 800, mx: "auto" }}>
        <Carousel
          autoPlay
          animation="slide"
          indicators
          navButtonsAlwaysVisible
          navButtonsProps={{
            style: {
              backgroundColor: "transparent",
              color: "#555",
            },
          }}
          indicatorContainerProps={{
            style: {
              position: "absolute",
              bottom: -30,
              textAlign: "center",
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: "#555",
            },
          }}
        >
          {items.map((item, i) => (
            <Card key={i}>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate(item.link)}
                  sx={{ marginLeft: "auto" }}
                >
                  Ver más
                </Button>
              </CardActions>
            </Card>
          ))}
        </Carousel>
      </Box>

      <Grid container justifyContent="center">
        <Card sx={{ maxWidth: 550 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200px"
              width="200px"
              image="public/images/logo de reparacion.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                variant="h6"
                align="center"
                color="textPrimary"
                paragraph
                sx={{ marginTop: 4 }}
              >
                Servicio técnico: los mejores presupuestos a los mejores
                precios, pedi tu presupuesto aqui...!!!
              </Typography>
              <Typography variant="body2" color="text.secondary">
                hacemos cambios de modulo,baterias,pines de carga,reparacion de
                placa,cambio de class,baño quimico y mucho mas
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              variant="contained"
              color="success"
              size="large"
              sx={{ marginLeft: "130px" }}
              href="https://wa.me/2615555634?text=hola%20vengo%20de%20tu%20pagina%20web%20necesito%20reparar%20mi%20celular"
              startIcon={<WhatsAppIcon />}
            >
              Servicio técnico
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
};

export default LandingPages;
