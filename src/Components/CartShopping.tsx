import React from "react";
import {
  Drawer,
  Typography,
  IconButton,
  Divider,
  List,
  Avatar,
  Stack,
  Button,
  Paper,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Close, Delete, Remove, Add } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../redux/selectors/cartSelectors";
import {
  addToCart,
  removeFromCart,
  removeItem,
  clearCart,
  CartProduct,
} from "../redux/cartSlice";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  onCheckout?: () => void;
}

const CartShopping: React.FC<CartDrawerProps> = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // ✅ Hook de navegación

  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotalPrice);

  const theme = useTheme();
  const isXs = useMediaQuery("(max-width:360px)");
  const isMd = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLg = useMediaQuery(theme.breakpoints.up("md"));

  const handleAdd = (item: CartProduct) => dispatch(addToCart(item));
  const handleRemove = (item: CartProduct) => dispatch(removeFromCart(item));
  const handleRemoveItem = (item: CartProduct) => dispatch(removeItem(item));
  const handleClearCart = () => dispatch(clearCart());

  const handleCheckoutClick = () => {
    onClose(); // Cerramos el Drawer
    navigate("/checkout"); // Navegamos al formulario
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(price);

  const drawerWidth = isLg ? 420 : isMd ? 360 : 320;
  const avatarSize = isLg ? 90 : isMd ? 80 : 70;
  const fontSizeTitle = isLg ? "subtitle1" : isMd ? "subtitle2" : "body1";

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: isXs ? "100%" : drawerWidth,
          maxWidth: "100%",
          p: isXs ? 2 : 3,
          backgroundColor: "#fdfdfd",
          borderRadius: isXs ? 0 : "12px 0 0 12px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        },
      }}
    >
      {/* Header */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2, borderBottom: "1px solid #ddd", pb: 1 }}
      >
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
          Carrito de compras
        </Typography>

        <IconButton
          onClick={onClose}
          sx={{ color: "#e53935" }}
          aria-label="Cerrar carrito"
        >
          <Close />
        </IconButton>
      </Stack>

      {/* Contenido */}
      {cartItems.length === 0 ? (
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 2,
          }}
        >
          <Typography
            variant="body1"
            textAlign="center"
            sx={{ color: "text.secondary" }}
          >
            El carrito está vacío.
          </Typography>
        </Box>
      ) : (
        <Box sx={{ flex: 1, overflowY: "auto", pr: 1, pb: 2 }}>
          <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {cartItems.map(({ item, quantity }) => (
              <Paper
                key={item.id || item.title}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  display: "flex",
                  flexDirection: isXs ? "column" : "row",
                  alignItems: isXs ? "flex-start" : "center",
                  gap: 2,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  "&:hover": { boxShadow: "0 6px 30px rgba(0,0,0,0.15)" },
                }}
              >
                <Avatar
                  src={item.image}
                  alt={item.alt}
                  variant="rounded"
                  sx={{
                    width: avatarSize,
                    height: avatarSize,
                    borderRadius: 2,
                  }}
                />

                <Stack spacing={0.5} flex={1} minWidth={0}>
                  <Typography
                    variant={fontSizeTitle}
                    fontWeight="bold"
                    noWrap={!isXs}
                  >
                    {item.title}
                  </Typography>

                  {item.description && (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: isXs ? 3 : 2,
                        WebkitBoxOrient: "vertical",
                        fontSize: isXs ? 12 : 14,
                      }}
                    >
                      {item.description}
                    </Typography>
                  )}

                  {"type" in item && item.type === "phone" && (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: isXs ? 12 : 14 }}
                    >
                      {item.brand} - {item.storage} - {item.ram} -{" "}
                      {item.battery}
                    </Typography>
                  )}

                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    color="#349eeb"
                    mt={0.5}
                  >
                    Precio: {formatPrice(item.price || 0)}
                  </Typography>

                  {/* Contador */}
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    mt={0.5}
                  >
                    <IconButton
                      size="small"
                      onClick={() => handleRemove(item)}
                      sx={{
                        border: "1px solid #ddd",
                        borderRadius: 1,
                        "&:hover": { bgcolor: "rgba(52,158,235,0.1)" },
                      }}
                      aria-label="Disminuir cantidad"
                    >
                      <Remove fontSize="small" />
                    </IconButton>
                    <Typography>{quantity}</Typography>
                    <IconButton
                      size="small"
                      onClick={() => handleAdd(item)}
                      sx={{
                        border: "1px solid #ddd",
                        borderRadius: 1,
                        "&:hover": { bgcolor: "rgba(52,158,235,0.1)" },
                      }}
                      aria-label="Aumentar cantidad"
                    >
                      <Add fontSize="small" />
                    </IconButton>
                  </Stack>

                  <Typography variant="body2" fontWeight="bold" mt={0.5}>
                    Subtotal: {formatPrice((item.price || 0) * quantity)}
                  </Typography>
                </Stack>

                <IconButton
                  edge="end"
                  onClick={() => handleRemoveItem(item)}
                  sx={{
                    color: "#e53935",
                    "&:hover": { bgcolor: "rgba(229,57,53,0.1)" },
                    alignSelf: isXs ? "flex-end" : "center",
                    mt: isXs ? 1 : 0,
                  }}
                  aria-label="Eliminar item"
                >
                  <Delete />
                </IconButton>
              </Paper>
            ))}
          </List>

          <Divider sx={{ my: 3 }} />

          <Typography
            variant={isXs ? "subtitle1" : "h6"}
            textAlign="right"
            fontWeight="bold"
            sx={{ color: "#287bb5" }}
          >
            Total: {formatPrice(total)}
          </Typography>

          <Stack
            direction={isXs ? "column" : "row"}
            justifyContent="space-between"
            mt={2}
            gap={1}
          >
            <Button
              variant="outlined"
              color="error"
              onClick={handleClearCart}
              sx={{
                flex: 1,
                borderRadius: 2,
                textTransform: "none",
                "&:hover": { bgcolor: "rgba(229, 56, 53, 0.5)" },
              }}
            >
              Vaciar carrito
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCheckoutClick} // ✅ Función corregida
              sx={{
                flex: 1,
                borderRadius: 2,
                textTransform: "none",
                background: "linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)",
                },
              }}
            >
              Finalizar compra
            </Button>
          </Stack>
        </Box>
      )}
    </Drawer>
  );
};

export default CartShopping;
