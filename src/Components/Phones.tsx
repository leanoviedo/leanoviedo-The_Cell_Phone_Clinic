// src/components/Phones.tsx
import React, { useState, useMemo } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Box,
  Dialog,
  DialogContent,
  TextField,
  InputAdornment,
  Fade,
  Stack,
  IconButton,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Tooltip,
  Divider,
} from "@mui/material";
import {
  Search,
  ClearAll,
  Delete,
  Add,
  Remove,
  Close,
  AddShoppingCart,
  RemoveShoppingCart,
} from "@mui/icons-material";
import { useFetchPhones } from "../Hooks/useFetchPhones";
import { PhoneItem } from "../types/types_Data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addToCart, removeFromCart, removeItem } from "../redux/cartSlice";

const Phones: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedPhone, setSelectedPhone] = useState<PhoneItem | null>(null);

  const { phones: phonesData, loading, error } = useFetchPhones();
  const cartItems = useSelector((state: RootState) => state.cart.phones);
  const dispatch = useDispatch();

  // 🔦 Resalta coincidencias usando markup real
  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <mark key={i}>{part}</mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  };

  const handleCardClick = (phone: PhoneItem) => {
    setSelectedPhone(phone);
    setOpen(true);
  };

  const handleBrandToggle = (brand: string) =>
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );

  const handleClearFilters = () => {
    setSelectedBrands([]);
    setSearchQuery("");
  };

  const handleAddToCart = (item: PhoneItem) =>
    dispatch(addToCart({ ...item, type: "phone" }));

  const handleRemoveFromCart = (item: PhoneItem) =>
    dispatch(removeFromCart({ ...item, type: "phone" }));

  const handleRemoveItem = (item: PhoneItem) =>
    dispatch(removeItem({ ...item, type: "phone" }));

  const getItemQuantity = (item: PhoneItem) =>
    cartItems.find((p) => p.item.id === item.id)?.quantity ?? 0;

  const filteredPhones = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return phonesData.filter((phone) => {
      const matchesBrand =
        selectedBrands.length === 0 || selectedBrands.includes(phone.brand);

      const matchesSearch =
        query === "" ||
        Object.values(phone).some((value) =>
          value?.toString().toLowerCase().includes(query)
        );

      return matchesBrand && matchesSearch;
    });
  }, [phonesData, selectedBrands, searchQuery]);

  const totalCartPrice = useMemo(() => {
    return cartItems
      .filter(({ item }) => item.type === "phone")
      .reduce((total, { item, quantity }) => total + item.price * quantity, 0);
  }, [cartItems]);

  if (loading)
    return (
      <Container sx={{ mt: 4 }}>
        <Typography>Cargando celulares...</Typography>
      </Container>
    );

  if (error)
    return (
      <Container sx={{ mt: 4 }}>
        <Typography color="error">{error}</Typography>
      </Container>
    );

  return (
    <Container sx={{ mt: 4, mb: 6 }}>
      {/* Header */}
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Typography variant="h4" color="primary" fontWeight="bold">
          Celulares
        </Typography>
      </Stack>

      <Grid container spacing={2}>
        {/* Sidebar */}
        <Grid item xs={12} md={3}>
          <Box mb={2} sx={{ boxShadow: 1, borderRadius: 2, p: 1 }}>
            <TextField
              label="Buscar celulares"
              variant="standard"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box
            p={2}
            border="1px solid #ddd"
            borderRadius={2}
            sx={{ boxShadow: 1, mb: 4 }}
          >
            <Typography variant="h6" gutterBottom>
              Filtrar por marca
            </Typography>
            <FormControl component="fieldset">
              <FormGroup>
                {[...new Set(phonesData.map((p) => p.brand))].map((brand) => (
                  <FormControlLabel
                    key={brand}
                    control={
                      <Checkbox
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandToggle(brand)}
                      />
                    }
                    label={brand}
                  />
                ))}
              </FormGroup>
            </FormControl>

            <Stack direction="row" justifyContent="flex-end" mt={2}>
              <Button
                size="small"
                variant="outlined"
                disabled={
                  selectedBrands.length === 0 && searchQuery.trim() === ""
                }
                onClick={handleClearFilters}
                startIcon={<ClearAll />}
              >
                Limpiar filtros
              </Button>
            </Stack>
          </Box>
        </Grid>

        {/* Lista de productos */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {filteredPhones.length === 0 ? (
              <Grid item xs={12}>
                <Box
                  sx={{
                    textAlign: "center",
                    p: 4,
                    border: "1px dashed #ccc",
                    borderRadius: 2,
                    backgroundColor: "#fafafa",
                  }}
                >
                  <Typography
                    variant="h6"
                    color="black"
                    fontWeight="bold"
                    gutterBottom
                  >
                    😕 No encontramos celulares que coincidan con tu búsqueda.
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Intenta con otra palabra clave o limpia los filtros.
                  </Typography>
                </Box>
              </Grid>
            ) : (
              filteredPhones.map((phone) => (
                <Fade in timeout={500} key={phone.id || phone.title}>
                  <Grid item xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        borderRadius: 3,
                        boxShadow: 2,
                        transition: "transform 0.25s ease-in-out",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: 5,
                        },
                      }}
                    >
                      <CardActionArea onClick={() => handleCardClick(phone)}>
                        <CardMedia
                          component="img"
                          height="200"
                          image={phone.image.trim()}
                          alt={`${phone.brand} ${phone.title}`}
                          sx={{
                            objectFit: "contain",
                            p: 2,
                            backgroundColor: "#fafafa",
                            borderBottom: "1px solid #eee",
                          }}
                        />
                        <CardContent>
                          <Typography
                            variant="h5"
                            color="text.primary"
                            fontWeight="medium"
                            gutterBottom
                            noWrap
                          >
                            {highlightText(phone.title, searchQuery)}
                          </Typography>

                          <Stack direction="column" spacing={1} mt={2}>
                            {phone.brand === "Apple"
                              ? phone.battery && (
                                  <Typography variant="body2" fontSize={14}>
                                    <strong>Batería:</strong>{" "}
                                    {highlightText(phone.battery, searchQuery)}
                                  </Typography>
                                )
                              : phone.ram && (
                                  <Typography variant="body2" fontSize={14}>
                                    <strong>RAM:</strong>{" "}
                                    {highlightText(phone.ram, searchQuery)}
                                  </Typography>
                                )}
                            {phone.color && (
                              <Typography variant="body2" fontSize={14}>
                                <strong>Color:</strong>{" "}
                                {highlightText(phone.color, searchQuery)}
                              </Typography>
                            )}
                            {phone.storage && (
                              <Typography variant="body2" fontSize={14}>
                                <strong>Almacenamiento:</strong>{" "}
                                {highlightText(phone.storage, searchQuery)}
                              </Typography>
                            )}
                            {phone.description && (
                              <Typography
                                variant="body2"
                                fontSize={14}
                                sx={{
                                  display: "-webkit-box",
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: "vertical",
                                  overflow: "hidden",
                                }}
                              >
                                <strong>Descripción:</strong>{" "}
                                {highlightText(phone.description, searchQuery)}
                              </Typography>
                            )}
                          </Stack>

                          <Typography
                            variant="h6"
                            color="primary"
                            sx={{ mt: 2, fontWeight: "bold" }}
                          >
                            ${" "}
                            {phone.price.toLocaleString("es-AR", {
                              minimumFractionDigits: 2,
                            })}
                          </Typography>
                        </CardContent>
                      </CardActionArea>

                      <CardActions
                        sx={{
                          px: 2,
                          pb: 2,
                          justifyContent: "space-between",
                          mt: "auto",
                        }}
                      >
                        <Button
                          size="small"
                          variant="outlined"
                          onClick={() => handleCardClick(phone)}
                          sx={{
                            color: "#084f96ff",
                            borderColor: "#1976d3",
                            "&:hover": {
                              backgroundColor: "#1882ecff",
                              color: "#fff",
                            },
                          }}
                        >
                          Ver más
                        </Button>

                        <Stack direction="row" spacing={1} alignItems="center">
                          <Tooltip title="Quitar unidad">
                            <span>
                              <IconButton
                                size="small"
                                onClick={() => handleRemoveFromCart(phone)}
                                disabled={getItemQuantity(phone) === 0}
                                color="error"
                              >
                                <RemoveShoppingCart />
                              </IconButton>
                            </span>
                          </Tooltip>

                          <Typography
                            variant="body1"
                            sx={{
                              minWidth: 24,
                              textAlign: "center",
                              fontWeight: "bold",
                            }}
                          >
                            {getItemQuantity(phone)}
                          </Typography>

                          <Tooltip title="Agregar unidad">
                            <IconButton
                              size="small"
                              onClick={() => handleAddToCart(phone)}
                              color="success"
                            >
                              <AddShoppingCart />
                            </IconButton>
                          </Tooltip>
                        </Stack>
                      </CardActions>
                    </Card>
                  </Grid>
                </Fade>
              ))
            )}
          </Grid>
        </Grid>
      </Grid>

      {/* Modal detalles */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
      >
        {selectedPhone && (
          <>
            <IconButton
              onClick={() => setOpen(false)}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "error.main",
              }}
              aria-label="Cerrar detalles"
            >
              <Close />
            </IconButton>
            <DialogContent>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <img
                    src={selectedPhone.image.trim()}
                    alt={selectedPhone.title}
                    style={{
                      width: "100%",
                      maxHeight: "80vh",
                      objectFit: "contain",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h4" gutterBottom>
                    {selectedPhone.title}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {selectedPhone.description}
                  </Typography>
                  <Typography variant="h6" color="black">
                    Marca: <strong>{selectedPhone.brand}</strong>
                  </Typography>
                  {selectedPhone.brand === "Apple" && selectedPhone.battery && (
                    <Typography variant="h6" color="black">
                      Batería: <strong>{selectedPhone.battery}</strong>
                    </Typography>
                  )}
                  {selectedPhone.ram && (
                    <Typography variant="h6" color="black">
                      RAM: <strong>{selectedPhone.ram}</strong>
                    </Typography>
                  )}
                  <Typography variant="h6" color="black">
                    Almacenamiento: <strong>{selectedPhone.storage}</strong>
                  </Typography>
                  <Typography variant="h6" color="black">
                    Color: <strong>{selectedPhone.color}</strong>
                  </Typography>
                  <Typography variant="h6" color="primary">
                    Precio:{" "}
                    <strong>
                      $
                      {selectedPhone.price.toLocaleString("es-AR", {
                        minimumFractionDigits: 2,
                      })}
                    </strong>
                  </Typography>
                  <Box mt={3}>
                    <Button
                      variant="contained"
                      color="success"
                      fullWidth
                      size="large"
                      onClick={() => {
                        handleAddToCart(selectedPhone);
                        setOpen(false);
                      }}
                    >
                      Comprar ahora
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
          </>
        )}
      </Dialog>

      {/* Modal carrito */}
      <Dialog open={cartOpen} onClose={() => setCartOpen(false)} maxWidth="sm">
        <DialogContent dividers sx={{ pt: 6 }}>
          {cartItems.filter(({ item }) => item.type === "phone").length ===
          0 ? (
            <Typography align="center" color="text.secondary">
              No hay celulares en el carrito.
            </Typography>
          ) : (
            <>
              {cartItems
                .filter(({ item }) => item.type === "phone")
                .map(({ item, quantity }) => (
                  <Box
                    key={item.id}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                  >
                    <Typography>
                      {item.title} (x{quantity})
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <IconButton
                        size="small"
                        onClick={() => handleRemoveFromCart(item as PhoneItem)}
                        disabled={quantity === 0}
                      >
                        <Remove />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleAddToCart(item as PhoneItem)}
                      >
                        <Add />
                      </IconButton>
                      <IconButton
                        size="small"
                        color="error"
                        onClick={() => handleRemoveItem(item as PhoneItem)}
                      >
                        <Delete />
                      </IconButton>
                    </Stack>
                  </Box>
                ))}
              <Divider sx={{ my: 2 }} />
              <Typography
                variant="h6"
                align="right"
                color="primary"
                sx={{ fontWeight: "bold" }}
              >
                Total: $
                {totalCartPrice.toLocaleString("es-AR", {
                  minimumFractionDigits: 2,
                })}
              </Typography>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Phones;
