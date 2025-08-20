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
  DialogActions,
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
import { accessoriesData } from "../MockData/mock-dataAccessories";

type AccessoryItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
  id?: string;
  price?: number;
};

type CartItem = {
  item: AccessoryItem;
  quantity: number;
};

const Accessories: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const highlightText = (text: string, query: string) =>
    !query
      ? text
      : text.split(new RegExp(`(${query})`, "gi")).map((part, idx) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <span
              key={idx}
              style={{ backgroundColor: "yellow", borderRadius: "4px" }}
            >
              {part}
            </span>
          ) : (
            part
          )
        );

  const handleCardClick = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleCategoryToggle = (category: string) =>
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSearchQuery("");
  };

  const addToCart = (item: AccessoryItem) =>
    setCartItems((prev) => {
      const exists = prev.find((p) => p.item.title === item.title);
      return exists
        ? prev.map((p) =>
            p.item.title === item.title ? { ...p, quantity: p.quantity + 1 } : p
          )
        : [...prev, { item, quantity: 1 }];
    });

  const removeFromCart = (item: AccessoryItem) =>
    setCartItems((prev) =>
      prev
        .map((p) =>
          p.item.title === item.title ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0)
    );

  const clearCart = () => setCartItems([]);

  const getItemQuantity = (item: AccessoryItem) =>
    cartItems.find((p) => p.item.title === item.title)?.quantity ?? 0;

  const totalCartQuantity = useMemo(
    () => cartItems.reduce((acc, p) => acc + p.quantity, 0),
    [cartItems]
  );

  const totalCartPrice = useMemo(() => {
    return cartItems.reduce(
      (acc, p) => acc + (p.item.price ?? 0) * p.quantity,
      0
    );
  }, [cartItems]);

  const filteredProducts = useMemo(() => {
    const allProducts = Object.entries(accessoriesData)
      .filter(
        ([category]) =>
          selectedCategories.length === 0 ||
          selectedCategories.includes(category)
      )
      .flatMap(([, products]) => products);

    const query = searchQuery.toLowerCase();

    return allProducts.filter(({ title, description, price }) => {
      return (
        title.toLowerCase().includes(query) ||
        description.toLowerCase().includes(query) ||
        (price !== undefined && price.toString().includes(query))
      );
    });
  }, [selectedCategories, searchQuery]);

  return (
    <Container sx={{ mt: 4, mb: 6 }}>
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Typography variant="h4" color="primary" fontWeight={"bold"}>
          Accesorios
        </Typography>
        <IconButton color="primary" onClick={() => setCartOpen(true)}>
          <Badge badgeContent={totalCartQuantity} color="secondary">
            <ShoppingCart fontSize="large" />
          </Badge>
        </IconButton>
      </Stack>

      <Grid container spacing={2}>
        {/* Sidebar */}
        <Grid item xs={12} md={3}>
          {/* Buscador */}
          <Box
            mb={2}
            sx={{
              boxShadow: 1,
              borderRadius: 2,
              p: 1,
            }}
          >
            <TextField
              label="Buscar accesorios"
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

          {/* Filtros */}
          <Box
            p={2}
            border="1px solid #ddd"
            borderRadius={2}
            sx={{ boxShadow: 1, mb: 4 }}
          >
            <Typography variant="h5" gutterBottom>
              Filtrar búsqueda
            </Typography>
            <FormControl component="fieldset">
              <FormGroup>
                {Object.keys(accessoriesData).map((category) => (
                  <FormControlLabel
                    key={category}
                    control={
                      <Checkbox
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryToggle(category)}
                      />
                    }
                    label={category
                      .replace(/_/g, " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase())}
                  />
                ))}
              </FormGroup>
            </FormControl>
            <Stack direction="row" justifyContent="flex-end" mt={2}>
              <Button
                size="small"
                variant="outlined"
                disabled={
                  selectedCategories.length === 0 && searchQuery.trim() === ""
                }
                onClick={handleClearFilters}
                startIcon={<ClearAll />}
              >
                Limpiar filtros
              </Button>
            </Stack>
          </Box>
        </Grid>

        {/* Productos */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {filteredProducts.length === 0 ? (
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
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    😕 No encontramos accesorios que coincidan con tu búsqueda.
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Intenta con otra palabra clave o limpia los filtros.
                  </Typography>
                </Box>
              </Grid>
            ) : (
              filteredProducts.map((product) => (
                <Fade in key={product.id || product.title} timeout={500}>
                  <Grid item xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        maxWidth: 345,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: 3,
                        borderRadius: 3,
                        "&:hover": { transform: "scale(1.03)" },
                        transition: "transform 0.2s",
                      }}
                    >
                      <CardActionArea
                        onClick={() => handleCardClick(product.image)}
                      >
                        <CardMedia
                          component="img"
                          height="200"
                          image={product.image.trim()}
                          alt={product.alt}
                          sx={{ objectFit: "cover" }}
                        />
                        <CardContent>
                          <Typography variant="h6">
                            {highlightText(product.title, searchQuery)}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ height: 60, overflow: "hidden" }}
                          >
                            {highlightText(product.description, searchQuery)}
                          </Typography>
                          {product.price !== undefined && (
                            <Typography
                              variant="subtitle1"
                              color="primary"
                              sx={{ mt: 1 }}
                            >
                              ${" "}
                              {product.price.toLocaleString("es-AR", {
                                minimumFractionDigits: 2,
                              })}
                            </Typography>
                          )}
                        </CardContent>
                      </CardActionArea>
                      <CardActions
                        sx={{ mt: "auto", justifyContent: "space-between" }}
                      >
                        <Button
                          size="small"
                          variant="outlined"
                          onClick={() => handleCardClick(product.image)}
                        >
                          Ver más
                        </Button>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Tooltip title="Quitar del carrito">
                            <span>
                              <IconButton
                                size="small"
                                onClick={() => removeFromCart(product)}
                                disabled={getItemQuantity(product) === 0}
                                color="error"
                              >
                                <RemoveShoppingCart />
                              </IconButton>
                            </span>
                          </Tooltip>
                          <Typography>{getItemQuantity(product)}</Typography>
                          <Tooltip title="Añadir al carrito">
                            <IconButton
                              size="small"
                              onClick={() => addToCart(product)}
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

      {/* Dialog imagen ampliada */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md">
        {selectedImage && (
          <>
            <IconButton
              onClick={() => setOpen(false)}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "error.main",
              }}
            >
              <Close />
            </IconButton>
            <DialogContent>
              <img
                src={selectedImage.trim()}
                alt="Ampliada"
                style={{
                  width: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                }}
              />
            </DialogContent>
          </>
        )}
      </Dialog>

      {/* Dialog carrito con X roja para cerrar */}
      <Dialog open={cartOpen} onClose={() => setCartOpen(false)} maxWidth="sm">
        <IconButton
          onClick={() => setCartOpen(false)}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "error.main",
            zIndex: 1,
          }}
        >
          <Close />
        </IconButton>

        <DialogContent dividers sx={{ pt: 6 }}>
          {cartItems.length === 0 ? (
            <Typography align="center" color="text.secondary">
              No hay productos en el carrito.
            </Typography>
          ) : (
            <>
              {cartItems.map(({ item, quantity }) => (
                <Box
                  key={item.title}
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
                          prev.filter((p) => p.item.title !== item.title)
                        )
                      }
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

        <DialogActions>
          <Button
            onClick={clearCart}
            variant="outlined"
            color="success"
            disabled={cartItems.length === 0}
          >
            pagar y finalizar compra
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Accessories;
