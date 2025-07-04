import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { AppBar, Toolbar, Box, Container, Button, Avatar } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const menuItems = [
  { text: "Home", icon: <HomeIcon sx={{ mr: 1 }} />, path: "/" },
  {
    text: "Accessories",
    icon: <HeadphonesIcon sx={{ mr: 1 }} />,
    path: "/Accessories",
  },
  {
    text: "Phones",
    icon: <PhoneAndroidIcon sx={{ mr: 1 }} />,
    path: "/Phones",
  },
  {
    text: "",
    icon: <WhatsAppIcon sx={{ mr: 1, color: "green" }} />,
    path: "/https://wa.me/2615555634?text=Hola%20vengo%20de%20tu%20página%20web%20y%20necesito%20reparar%20mi%20celular",
  },
  {
    text: "",
    icon: <InstagramIcon sx={{ mr: 1, color: "violet" }} />,
    path: "/http://instagram.com/la.clinica.del.celular/",
  },
];

function ResponsiveAppBar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              "&:hover": {
                opacity: 0.8,
              },
            }}
          >
            <Avatar
              src="/images/imageslogodog.jpeg"
              alt="logo_Doc"
              sx={{
                width: 80,
                height: 80,
                mr: 1,
              }}
            />
            <Box
              sx={{
                color: "#349eeb",
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              La Clinica del Celular
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                sx={{
                  color: "#349eeb", // 🖤 Botones con texto negro
                  display: "flex",
                  alignItems: "center",
                  textTransform: "none",
                  px: 2,
                  "&:hover": {
                    backgroundColor: "#f0f0f0", // 🎨 Fondo gris claro al pasar el mouse
                  },
                }}
              >
                {item.icon}
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
