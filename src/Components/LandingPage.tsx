import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  CircularProgress,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Carousel from "react-material-ui-carousel";
import { Link as RouterLink } from "react-router-dom";
import { serviceImages } from "../MockData/mock-serviceImages.tsx";
import { useFetchAccessories } from "../Hooks/useFetchAccessories.tsx";
import { useFetchPhones } from "../Hooks/useFetchPhones.tsx";
import { PromotionData } from "../types/types_Data.ts";

const LandingPages = () => {
  const { accessoriesData, loading, error } = useFetchAccessories();
  const {
    phones,
    loading: loadingPhones,
    error: errorPhones,
  } = useFetchPhones();

  // Aplanamos los accesorios por categoría
  const accessoriesArray: PromotionData[] =
    Object.values(accessoriesData).flat();
  const promoAccessories = accessoriesArray.filter((item) => item.promotion);
  const promoPhones = phones.filter((phone) => phone.promotion);

  // Todas las promociones juntas
  const promociones = [...promoAccessories, ...promoPhones];

  const loadingAll = loading || loadingPhones;
  const errorAll = error || errorPhones;
  const showEmptySlide = promociones.length === 0 || !!errorAll;

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
          {/* Título principal */}
          <Typography
            variant="h4"
            align="center"
            color="white"
            fontWeight="bold"
            mb={4}
          >
            Servicio técnico especializado en celulares
          </Typography>

          {/* Carrusel de servicios */}
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
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

          {/* Título promociones */}
          <Typography
            variant="h4"
            align="center"
            color="white"
            fontWeight="bold"
            mt={6}
            mb={4}
          >
            Descubre nuestras promociones
          </Typography>

          {/* Loader */}
          {loadingAll && (
            <CircularProgress
              color="secondary"
              sx={{ display: "block", mx: "auto", my: 4 }}
            />
          )}

          {/* Carrusel de promociones */}
          {!loadingAll && (
            <Carousel
              autoPlay={!showEmptySlide}
              navButtonsAlwaysVisible={!showEmptySlide}
              indicators={!showEmptySlide}
              animation="slide"
              interval={4000}
              sx={{ maxWidth: "1400px", margin: "auto", py: 4 }}
            >
              {showEmptySlide ? (
                <Paper
                  sx={{
                    p: 6,
                    borderRadius: "16px",
                    textAlign: "center",
                    backgroundColor: errorAll ? "#f8d7da" : "#fff",
                    minHeight: "350px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    color={errorAll ? "error" : "primary"}
                    gutterBottom
                  >
                    {errorAll
                      ? "Ocurrió un error al cargar las promociones"
                      : "No hay promociones disponibles"}
                  </Typography>
                  <Typography variant="body1" mb={2}>
                    {errorAll
                      ? "Por favor, intenta recargar la página más tarde."
                      : "Vuelve pronto para descubrir nuestras novedades."}
                  </Typography>
                  {errorAll && (
                    <Button
                      variant="contained"
                      color="success"
                      href="https://wa.me/2615555634?text=Hola%20vengo%20de%20tu%20página%20web%20y%20necesito%20reparar%20mi%20celular"
                      startIcon={<WhatsAppIcon />}
                      sx={{ mt: 1 }}
                    >
                      Contactar por WhatsApp
                    </Button>
                  )}
                </Paper>
              ) : (
                promociones.map((item: PromotionData, index: number) => {
                  return (
                    <Paper
                      key={index}
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: "center",
                        justifyContent: "space-between",
                        p: 3,
                        borderRadius: "16px",
                        backgroundColor: "#fff",
                        minHeight: { xs: "350px", md: "300px" },
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: 8,
                        },
                      }}
                    >
                      {/* Imagen */}
                      <Box
                        component={RouterLink}
                        to={item.link}
                        sx={{
                          width: { xs: "100%", md: "40%" },
                          height: { xs: "200px", md: "250px" },
                          overflow: "hidden",
                          borderRadius: "16px",
                          mb: { xs: 2, md: 0 },
                        }}
                      >
                        <Box
                          component="img"
                          src={item.image}
                          alt={item.title}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            transition: "transform 0.3s ease",
                            "&:hover": { transform: "scale(1.05)" },
                          }}
                        />
                      </Box>

                      {/* Detalle */}
                      <Box
                        sx={{
                          width: { xs: "100%", md: "55%" },
                          display: "flex",
                          flexDirection: "column",
                          alignItems: { xs: "center", md: "flex-start" },
                          textAlign: { xs: "center", md: "left" },
                          px: { xs: 0, md: 2 },
                        }}
                      >
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                          {item.title}
                        </Typography>
                        <Typography variant="h6" color="primary" gutterBottom>
                          ${item.price.toLocaleString("es-AR")}
                        </Typography>
                        <Typography variant="body1" mb={2}>
                          {item.description.length > 100
                            ? item.description.slice(0, 100) + "..."
                            : item.description}
                        </Typography>
                        <Button
                          variant="contained"
                          color="primary"
                          size="large"
                          href={item.link}
                          sx={{ alignSelf: { xs: "center", md: "flex-start" } }}
                        >
                          Ver más
                        </Button>
                      </Box>
                    </Paper>
                  );
                })
              )}
            </Carousel>
          )}
        </Container>
      </Box>
    </Box>
  );
};
export default LandingPages;
