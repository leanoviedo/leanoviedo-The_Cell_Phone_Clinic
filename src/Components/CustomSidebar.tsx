import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const menuItems = [
  { text: "Home", icon: <HomeIcon />, path: "/" },
  {
    text: "Accessorios",
    icon: <HeadphonesIcon />,
    path: "/Accessories",
  },
  {
    text: "Celulares",
    icon: <PhoneAndroidIcon />,
    path: "/Phones",
  },
  {
    text: "WhatsApp",
    icon: <WhatsAppIcon sx={{ color: "green" }} />,
    path: "https://wa.me/2615555634?text=Hola%20vengo%20de%20tu%20página%20web%20y%20necesito%20reparar%20mi%20celular",
    external: true,
  },
  {
    text: "Instagram",
    icon: <InstagramIcon sx={{ color: "violet" }} />,
    path: "http://instagram.com/la.clinica.del.celular/",
    external: true,
  },
];

function ResponsiveAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: "center", mt: 2 }}>
      <Box
        component={Link}
        to="/"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 2,
          textDecoration: "none",
        }}
        onClick={handleDrawerToggle}
      >
        <Avatar
          src="/images/imageslogodog.jpeg"
          alt="logo_Doc"
          sx={{
            width: 60,
            height: 60,
            mr: 1,
          }}
        />
        <Typography variant="h6" sx={{ color: "#349eeb", fontWeight: "bold" }}>
          La Clínica del Celular
        </Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={item.external ? "a" : Link}
              to={item.external ? undefined : item.path}
              href={item.external ? item.path : undefined}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              sx={{ textAlign: "center" }}
              onClick={handleDrawerToggle}
            >
              <ListItemIcon
                sx={{ minWidth: 0, mr: 2, justifyContent: "center" }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ color: "#349eeb" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
              La Clínica del Celular
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={item.external ? "a" : Link}
                to={item.external ? undefined : item.path}
                href={item.external ? item.path : undefined}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                sx={{
                  color: "#349eeb",
                  display: "flex",
                  alignItems: "center",
                  textTransform: "none",
                  px: 2,
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                }}
              >
                {item.icon &&
                  React.cloneElement(item.icon, {
                    sx: { mr: 1, ...item.icon.props.sx },
                  })}
                {item.text}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { md: "none" },
              color: mobileOpen ? "red" : "#349eeb",
              transition: "color 0.3s ease",
            }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "50%",
            height: "40vh",
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default ResponsiveAppBar;
