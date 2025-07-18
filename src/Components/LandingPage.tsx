import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Link,
  Stack,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Carousel from "react-material-ui-carousel";
import { Link as RouterLink } from "react-router-dom";
import { promotions, serviceImages } from "../MockData/mock-data.tsx";

const LandingPages = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/images/fondo1.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box sx={{ backdropFilter: "brightness(0.8)", py: 5 }}>
        <Container>
          <Typography
            variant="h4"
            align="center"
            color="white"
            fontWeight="bold"
            mb={4}
          >
            Servicio técnico especializado en celulares
          </Typography>
          {/* Carrusel de servicio */}
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              maxWidth: "1400px",
              margin: "auto",
            }}
          >
            {serviceImages.map((item, index) => (
              <SwiperSlide key={index}>
                <Box sx={{ position: "relative" }}>
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{
                      width: "100%",
                      maxHeight: { xs: "400px", md: "700px" },
                      objectFit: "contain",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      width: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      color: "white",
                      py: 2,
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="h5" fontWeight="bold">
                      {item.name}
                    </Typography>
                    <Typography variant="body1">{item.description}</Typography>
                    <Button
                      variant="contained"
                      color="success"
                      href="https://wa.me/2615555634?text=Hola%20vengo%20de%20tu%20página%20web%20y%20necesito%20reparar%20mi%20celular"
                      startIcon={<WhatsAppIcon />}
                      sx={{ mt: 1 }}
                    >
                      Contactar por WhatsApp
                    </Button>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Carrusel de accesorios */}
          <Typography
            variant="h4"
            align="center"
            color="white"
            fontWeight="bold"
            mt={6}
            mb={4}
          >
            Descubre nuestras promociones y accesorios
          </Typography>
          <Carousel
            autoPlay
            indicators
            navButtonsAlwaysVisible
            animation="slide"
            sx={{
              maxWidth: "1200px",
              margin: "auto",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: 6,
            }}
          >
            {promotions.map((item, index) => (
              <Paper
                key={index}
                sx={{
                  textAlign: "center",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: "300px", md: "500px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f5f5f5", // Fondo neutro detrás de la imagen
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component={RouterLink}
                    to={item.link}
                    sx={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      textDecoration: "none",
                    }}
                  >
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain", // evita cortes
                        cursor: "pointer", // Cambia el cursor para indicar clic
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.03)", // efecto sutil al pasar el mouse
                        },
                      }}
                    />
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href={item.link}
                  sx={{ mt: 1 }}
                >
                  Ver más...!!!
                </Button>
              </Paper>
            ))}
          </Carousel>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          backgroundColor: "#212121",
          color: "white",
          py: 4,
          px: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          La Clínica del Celular
        </Typography>

        <Stack
          direction="row"
          spacing={4}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          sx={{ mb: 2 }}
        >
          {/* Instagram */}
          <Link
            href="https://instagram.com/la.clinica.del.celular"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "white",
              textDecoration: "none",
              "&:hover": { color: "violet" },
            }}
          >
            <InstagramIcon />
            Instagram
          </Link>

          {/* WhatsApp */}
          <Link
            href="https://wa.me/2615555634"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "white",
              textDecoration: "none",
              "&:hover": { color: "#25D366" },
            }}
          >
            <WhatsAppIcon />
            WhatsApp
          </Link>

          {/* Ubicación */}
          <Link
            href="https://maps.app.goo.gl/FBmdCqcW2YumcuRo8"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "white",
              textDecoration: "none",
              "&:hover": { color: "#f44336" },
            }}
          >
            <LocationOnIcon />
            Calle Catamarca 23, Mendoza
          </Link>
        </Stack>

        <Typography variant="body2">
          © 2025 Todos los derechos reservados
        </Typography>
      </Box>
    </Box>
  );
};
export default LandingPages;
