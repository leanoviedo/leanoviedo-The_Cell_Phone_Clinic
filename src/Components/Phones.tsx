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
  Badge,
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
  ShoppingCart,
  Delete,
  Add,
  Remove,
  Close,
  AddShoppingCart,
  RemoveShoppingCart,
} from "@mui/icons-material";

import { phonesData, PhoneItem } from "../MockData/type-data-phones.tsx";

type CartItem = {
  item: PhoneItem;
  quantity: number;
};

const Phones: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedPhone, setSelectedPhone] = useState<PhoneItem | null>(null);

  // Resalta texto buscado (con keys para fragmentos)
  const highlightText = (text: string, query: string) => {
    if (!query || query.trim().length < 3) return text;

    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} style={{ backgroundColor: "yellow" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  // Abrir modal con detalles
  const handleCardClick = (phone: PhoneItem) => {
    setSelectedPhone(phone);
    setOpen(true);
  };

  // Toggle filtro marca
  const handleBrandToggle = (brand: string) =>
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );

  // Limpiar filtros y búsqueda
  const handleClearFilters = () => {
    setSelectedBrands([]);
    setSearchQuery("");
  };

  // Añadir al carrito
  const addToCart = (item: PhoneItem) =>
    setCartItems((prev) => {
      const exists = prev.find((p) => p.item.id === item.id);
      if (exists) {
        return prev.map((p) =>
          p.item.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { item, quantity: 1 }];
    });

  // Quitar del carrito
  const removeFromCart = (item: PhoneItem) =>
    setCartItems((prev) =>
      prev
        .map((p) =>
          p.item.id === item.id ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0)
    );

  // Vaciar carrito
  // const clearCart = () => setCartItems([]);

  // Obtener cantidad de item en carrito
  const getItemQuantity = (item: PhoneItem) =>
    cartItems.find((p) => p.item.id === item.id)?.quantity ?? 0;

  // Total cantidad y precio en carrito (memoizados)
  const totalCartQuantity = useMemo(
    () => cartItems.reduce((acc, p) => acc + p.quantity, 0),
    [cartItems]
  );
  const totalCartPrice = useMemo(
    () =>
      cartItems.reduce((acc, p) => acc + (p.item.price ?? 0) * p.quantity, 0),
    [cartItems]
  );

  // Listar todos los modelos con la marca integrada
  const allPhonesWithBrand = useMemo(() => {
    return phonesData.flatMap(({ brand, models }) =>
      models.map((model) => ({ ...model, brand }))
    );
  }, []);

  // Filtrar por marca seleccionada y búsqueda
  const filteredPhones = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    if (query.length > 0 && query.length < 3) {
      // Si hay 1 o 2 letras, solo filtra por marca
      return allPhonesWithBrand.filter(
        ({ brand }) =>
          selectedBrands.length === 0 || selectedBrands.includes(brand)
      );
    }

    // Si no hay texto o hay 3+ letras, filtra por marca y texto
    return allPhonesWithBrand.filter(
      ({ brand, title, description, price, storage, ram, color, battery }) => {
        const matchesBrand =
          selectedBrands.length === 0 || selectedBrands.includes(brand);

        const matchesSearch =
          title.toLowerCase().includes(query) ||
          description.toLowerCase().includes(query) ||
          (price !== undefined && price.toString().includes(query)) ||
          (storage && storage.toLowerCase().includes(query)) ||
          (ram && ram.toLowerCase().includes(query)) ||
          (color && color.toLowerCase().includes(query)) ||
          (battery && battery.toLowerCase().includes(query));

        return matchesBrand && matchesSearch;
      }
    );
  }, [allPhonesWithBrand, selectedBrands, searchQuery]);

  return (
    <Container sx={{ mt: 4, mb: 6 }}>
      {/* Header y carrito */}
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Typography variant="h2" color="primary" fontWeight={"bold"}>
          Celulares
        </Typography>
        <IconButton color="primary" onClick={() => setCartOpen(true)}>
          <Badge badgeContent={totalCartQuantity} color="secondary">
            <ShoppingCart fontSize="large" />
          </Badge>
        </IconButton>
      </Stack>

      <Grid container spacing={2}>
        {/* Sidebar con búsqueda y filtro */}
        <Grid item xs={12} md={3}>
          {/* Buscador */}
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

          {/* Filtro por marca */}
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
                {phonesData.map(({ brand }) => (
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

        {/* Lista de productos filtrados */}
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
                    fontWeight={"bold"}
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
                <Fade in key={phone.id} timeout={500}>
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
                            {phone.brand === "Apple" ? (
                              <>
                                {phone.battery && (
                                  <Typography variant="body2" fontSize={14}>
                                    <strong>Batería:</strong>{" "}
                                    {highlightText(phone.battery, searchQuery)}
                                  </Typography>
                                )}
                              </>
                            ) : (
                              <>
                                {phone.ram && (
                                  <Typography variant="body2" fontSize={14}>
                                    <strong>RAM:</strong>{" "}
                                    {highlightText(phone.ram, searchQuery)}
                                  </Typography>
                                )}
                              </>
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
                        >
                          Ver más
                        </Button>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Tooltip title="Quitar del carrito">
                            <span>
                              <IconButton
                                size="small"
                                onClick={() => removeFromCart(phone)}
                                disabled={getItemQuantity(phone) === 0}
                                color="error"
                              >
                                <RemoveShoppingCart />
                              </IconButton>
                            </span>
                          </Tooltip>
                          <Typography>{getItemQuantity(phone)}</Typography>
                          <Tooltip title="Añadir al carrito">
                            <IconButton
                              size="small"
                              onClick={() => addToCart(phone)}
                              color="primary"
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

      {/* Modal imagen ampliada */}
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
                  <Typography variant="h6" color="black" gutterBottom>
                    Marca: <strong>{selectedPhone.brand}</strong>
                  </Typography>

                  {selectedPhone.brand === "Apple" ? (
                    <>
                      {selectedPhone.battery && (
                        <Typography variant="h6" color="black">
                          Batería: <strong>{selectedPhone.battery}</strong>
                        </Typography>
                      )}
                    </>
                  ) : (
                    <>
                      {selectedPhone.ram && (
                        <Typography variant="h6" color="black">
                          RAM: <strong>{selectedPhone.ram}</strong>
                        </Typography>
                      )}
                    </>
                  )}

                  <Typography variant="h6" color="black" gutterBottom>
                    Almacenamiento: <strong>{selectedPhone.storage}</strong>
                  </Typography>
                  <Typography variant="h6" color="black">
                    Color: <strong>{selectedPhone.color}</strong>
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom>
                    <strong></strong>
                    Precio:{" "}
                    <strong>
                      ${" "}
                      {selectedPhone.price.toLocaleString("es-AR", {
                        minimumFractionDigits: 2,
                      })}
                    </strong>
                  </Typography>

                  <Box mt={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      href={selectedPhone.link}
                      target="_blank"
                      rel="noopener noreferrer"
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
          {cartItems.length === 0 ? (
            <Typography align="center" color="text.secondary">
              No hay productos en el carrito.
            </Typography>
          ) : (
            <>
              {cartItems.map(({ item, quantity }) => (
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
                      onClick={() => removeFromCart(item)}
                    >
                      <Remove />
                    </IconButton>
                    <IconButton size="small" onClick={() => addToCart(item)}>
                      <Add />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() =>
                        setCartItems((prev) =>
                          prev.filter((p) => p.item.id !== item.id)
                        )
                      }
                      aria-label={`Eliminar ${item.title} del carrito`}
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
                Total: ${" "}
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
