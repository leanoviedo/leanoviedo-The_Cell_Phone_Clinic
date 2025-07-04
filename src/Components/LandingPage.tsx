import { Container, Typography, Button, Box, Paper } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Carousel from "react-material-ui-carousel";
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
                  component="img"
                  src={item.image}
                  alt={item.alt}
                  sx={{
                    width: "100%",
                    maxHeight: { xs: "400px", md: "700px" },
                    objectFit: "contain",
                  }}
                />
                <Box sx={{ p: 2, backgroundColor: "rgba(0,0,0,0.5)" }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color="white"
                    gutterBottom
                  >
                    {item.alt}
                  </Typography>
                  <Typography variant="body1" color="white" gutterBottom>
                    {item.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    href={item.link}
                    sx={{ mt: 1 }}
                  >
                    Ver más...!!!
                  </Button>
                </Box>
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
          py: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          La Clínica del Celular
        </Typography>
        <Typography variant="body1">📞 Teléfono: +54 9 261-777-0900</Typography>
        <Typography variant="body1">
          📸 Instagram: @laclinicadelcelular
        </Typography>
        <Typography>
          📍 Ubicación: Calle Catamarca 23, Ciudad de Mendoza, Argentina
          (Galería Tonsa Apolo 4)
        </Typography>
        <Typography variant="body2" mt={1}>
          © 2025 Todos los derechos reservados
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingPages;
