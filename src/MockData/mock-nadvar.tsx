import HomeIcon from "@mui/icons-material/Home";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
//📦 Interfaces para tipado
export const menuItems = [
  { text: "Inicio", icon: <HomeIcon />, path: "/" },
  { text: "Accesorios", icon: <HeadphonesIcon />, path: "/Accessories" },
  { text: "Celulares", icon: <PhoneAndroidIcon />, path: "/Phones" },
  {
    text: "WhatsApp",
    icon: <WhatsAppIcon sx={{ color: "green" }} />,
    path: "https://wa.me/2615555634?text=Hola%20vengo%20de%20tu%20página%20web%20y%20necesito%20reparar%20mi%20celular",
    external: true,
  },
  {
    text: "Facebook",
    icon: <FacebookIcon sx={{ color: "blue" }} />,
    path: "https://www.facebook.com/laclinicadelcelular.07",
    external: true,
  },
  {
    text: "Instagram",
    icon: <InstagramIcon sx={{ color: "#E1306C" }} />,
    path: "https://www.instagram.com/laclinicadelcelular.07/",
    external: true,
  }, 
];
