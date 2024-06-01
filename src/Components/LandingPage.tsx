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
} from "@mui/material";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Carousel from "react-material-ui-carousel";
import CustomSidebar from "./CustomSidebar";

const items = [
  {
    name: "Promoción 1",
    description: "Descripción de la promoción 1",
    image: "https://via.placeholder.com/600x300?text=Promocion+1",
    link: "/phone",
  },
  {
    name: "Promoción 2",
    description: "Descripción de la promoción 2",
    image: "https://via.placeholder.com/600x300?text=Promocion+2",
    link: "/Accessories/",
  },
  {
    name: "Promoción 3",
    description: "Descripción de la promoción 3",
    image: "https://via.placeholder.com/600x300?text=Promocion+3",
    link: "/repair",
  },
];

const LandingPages: React.FC = () => {
  return (
    <Container>
      <CustomSidebar />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        padding={0}
        sx={{ marginBottom: 0 }}
      >
        <Grid item>
          <img
            src="./public/homerjpeg.jpg"
            alt="The Simpsons Left"
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
      <Grid container spacing={4} justifyContent="center">
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
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
                  sx={{
                    position: "absolute",
                    top: "0.875rem",
                    right: "0.5rem",
                  }}
                >
                  <BookmarkAdd />
                </IconButton>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  href={item.link}
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
      <Carousel>
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
                href={item.link}
                sx={{ marginLeft: "auto" }}
              >
                Ver más
              </Button>
            </CardActions>
          </Card>
        ))}
      </Carousel>
      <Typography
        variant="h6"
        align="center"
        color="textPrimary"
        paragraph
        sx={{ marginTop: 4 }}
      >
        Servicio técnico: los mejores presupuestos a los mejores precios,
        pedi tu presupuesto aqui...!!!
      </Typography>
      <Grid container justifyContent="center">
        <Button
          variant="contained"
          color="success"
          href="https://wa.me/2615555634?text=hola%20vengo%20de%20tu%20pagina%20web%20necesito%20reparar%20mi%20celular"
          startIcon={<WhatsAppIcon />}

        >
          Servicio técnico
        </Button>
      </Grid>
    </Container>
  );
};

export default LandingPages;
