import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  Button,
  Avatar,
  Typography,
  Link as MuiLink,
  Stack,
  Drawer,
  IconButton,
  Badge,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { menuItems } from "../MockData/mock-nadvar-types";
import { useSelector } from "react-redux";
import { selectCartTotalQuantity } from "../redux/selectors/cartSelectors";
import CartShopping from "./CartShopping";

function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleCartToggle = () => setCartOpen(!cartOpen);
  const totalQuantity = useSelector(selectCartTotalQuantity);
  const drawer = (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography
        sx={{
          width: "100%",
          color: "rgba(25, 118, 210, 1)",
          fontWeight: 700,
          fontSize: "1.5rem",
          py: 1.5,
          px: 2,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          textAlign: "center",
          letterSpacing: 0.5,
        }}
      >
        Menú
      </Typography>
      <Divider sx={{ my: 2 }} />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={item.external ? "a" : Link}
              to={!item.external ? item.path : undefined}
              href={item.external ? item.path : undefined}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              onClick={handleDrawerToggle}
              sx={{
                px: 3,
                py: 2,
                borderRadius: 1,
                "&:hover": { bgcolor: "rgba(52,158,235,0.1)" },
              }}
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
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Navbar */}
      <AppBar
        position="static"
        sx={{ background: "#fff", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* Logo */}
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

            {/* Desktop menu */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 2,
                alignItems: "center",
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
                      bgcolor: "rgba(52,158,235,0.05)",
                      borderRadius: 1,
                    },
                  }}
                >
                  {item.icon}
                  <Box sx={{ ml: 0.5 }}>{item.text}</Box>
                </Button>
              ))}

              {/* Carrito desktop */}
              <IconButton
                color="primary"
                onClick={handleCartToggle}
                sx={{
                  borderRadius: 2,
                  bgcolor: "rgba(52,158,235,0.1)",
                  "&:hover": { bgcolor: "rgba(52,158,235,0.2)" },
                  p: 1,
                }}
              >
                <Badge
                  badgeContent={totalQuantity}
                  color="error"
                  sx={{
                    "& .MuiBadge-badge": {
                      fontSize: "0.7rem",
                      minWidth: 18,
                      height: 18,
                      top: 4,
                      right: 4,
                    },
                  }}
                >
                  <ShoppingCartIcon fontSize="medium" />
                </Badge>
              </IconButton>
            </Box>

            {/* Mobile buttons */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                gap: 1,
                alignItems: "center",
              }}
            >
              {/* Carrito mobile */}
              <IconButton
                color="primary"
                onClick={handleCartToggle}
                sx={{
                  borderRadius: "50%",
                  bgcolor: "rgba(52,158,235,0.1)",
                  "&:hover": { bgcolor: "rgba(52,158,235,0.2)" },
                  p: 1,
                }}
              >
                <Badge
                  badgeContent={totalQuantity}
                  color="error"
                  sx={{
                    "& .MuiBadge-badge": {
                      fontSize: "0.65rem",
                      minWidth: 16,
                      height: 16,
                      top: 2,
                      right: 2,
                    },
                  }}
                >
                  <ShoppingCartIcon fontSize="medium" />
                </Badge>
              </IconButton>

              {/* Menu mobile */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  color: mobileOpen ? "#e53935" : "#349eeb",
                  transition: "color 0.3s ease",
                }}
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>

        {/* Cart drawer */}
        <CartShopping open={cartOpen} onClose={() => setCartOpen(false)} />

        {/* Drawer mobile */}
        <Drawer
          anchor="left"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
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

      {/* Main content */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Outlet />
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
          <MuiLink
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
            <InstagramIcon /> Instagram
          </MuiLink>
          <MuiLink
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
            <WhatsAppIcon /> WhatsApp
          </MuiLink>
          <MuiLink
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
            <LocationOnIcon /> Calle Catamarca 23, Mendoza
          </MuiLink>
        </Stack>
        <Typography variant="body2">
          © 2025 Todos los derechos reservados
        </Typography>
      </Box>
    </Box>
  );
}

export default Layout;
