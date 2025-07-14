import { useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  Button,
  Avatar,
  Typography,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { menuItems } from "../MockData/mock-data.tsx";

function ResponsiveAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography
        sx={{
          backgroundColor: "#349eeb",
          color: "white",
          fontWeight: "bold",
          fontSize: "24px",
          textTransform: "uppercase",
          letterSpacing: 1,
          boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
          borderBottom: "2px solid #349eeb",
          paddingY: "12px",
          mb: 2,
        }}
      >
        Menú
      </Typography>

      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={item.external ? "a" : Link}
              to={!item.external ? item.path : undefined}
              href={item.external ? item.path : undefined}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              sx={{
                justifyContent: "flex-start",
                px: 3,
                py: 2,
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
              onClick={handleDrawerToggle}
            >
              <ListItemIcon sx={{ minWidth: 40, color: "#349eeb" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  color: "#333",
                }}
              />
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
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "#349eeb",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            <Avatar
              src="/images/imageslogodog.jpeg"
              alt="logo_Doc"
              sx={{ width: 48, height: 48, mr: 1 }}
            />
            La Clínica del Celular
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1.5,
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={item.external ? "a" : Link}
                to={!item.external ? item.path : undefined}
                href={item.external ? item.path : undefined}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                sx={{
                  color: "#349eeb",
                  fontWeight: 600,
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  "&:hover": {
                    color: "#287bb5",
                  },
                }}
              >
                {item.icon}
                <Box sx={{ ml: 0.5 }}>{item.text}</Box>
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
              color: mobileOpen ? "#e53935" : "#349eeb",
              transition: "color 0.3s ease",
            }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer
        anchor="left"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: "75%",
            height: "100vh",
            boxSizing: "border-box",
            paddingTop: 2,
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default ResponsiveAppBar;
