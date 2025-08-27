// src/components/Accessories.tsx
import React, { useMemo, useState } from "react";
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
  TextField,
  InputAdornment,
  Fade,
  Stack,
  IconButton,
  Tooltip,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Dialog,
  DialogContent,
} from "@mui/material";
import {
  Search,
  ClearAll,
  AddShoppingCart,
  RemoveShoppingCart,
  Close,
} from "@mui/icons-material";
import { accessoriesData } from "../MockData/mock-dataAccessories";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { addToCart, removeFromCart } from "../redux/cartSlice";

type AccessoryItem = {
  id?: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
  price?: number;
};

const Accessories: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogProduct, setDialogProduct] = useState<AccessoryItem | null>(
    null
  );

  const cartItems = useSelector((state: RootState) => state.cart.accessories);
  const dispatch = useDispatch<AppDispatch>();

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

  const handleAddToCart = (item: AccessoryItem) =>
    dispatch(addToCart({ ...item, type: "accessory" }));

  const handleRemoveFromCart = (item: AccessoryItem) =>
    dispatch(removeFromCart({ ...item, type: "accessory" }));

  const getItemQuantity = (item: AccessoryItem) =>
    cartItems.find(
      (p) =>
        p.item.type === "accessory" &&
        p.item.title.toLowerCase() === item.title.toLowerCase()
    )?.quantity ?? 0;

  const handleOpenDialog = (product: AccessoryItem) => {
    setDialogProduct(product);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setDialogProduct(null);
  };

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
      {/* Header */}
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Typography variant="h4" color="primary" fontWeight="bold">
          Accesorios
        </Typography>
      </Stack>

      <Grid container spacing={2}>
        {/* Sidebar */}
        <Grid item xs={12} md={3}>
          <Box mb={2} sx={{ boxShadow: 1, borderRadius: 2, p: 1 }}>
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

          <Box
            p={2}
            border="1px solid #ddd"
            borderRadius={2}
            sx={{ boxShadow: 1, mb: 4 }}
          >
            <Typography variant="h6" gutterBottom>
              Filtrar por categoría
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
                      <CardActionArea onClick={() => handleOpenDialog(product)}>
                        <CardMedia
                          component="img"
                          height="200"
                          image={product.image.trim()}
                          alt={product.alt}
                          sx={{
                            objectFit: "contain",
                            p: 2,
                            backgroundColor: "#fafafa",
                            borderBottom: "1px solid #eee",
                          }}
                        />
                        <CardContent>
                          <Typography
                            variant="h6"
                            color="text.primary"
                            fontWeight="medium"
                            gutterBottom
                            noWrap
                          >
                            {highlightText(product.title, searchQuery)}
                          </Typography>

                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }}
                          >
                            {highlightText(product.description, searchQuery)}
                          </Typography>

                          {product.price !== undefined && (
                            <Typography
                              variant="h6"
                              color="primary"
                              sx={{ mt: 2, fontWeight: "bold" }}
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
                          onClick={() => handleOpenDialog(product)}
                          sx={{
                            color: "#084f96ff", // texto verde
                            borderColor: "#1976d3", // borde verde
                            "&:hover": {
                              backgroundColor: "#1882ecff", // fondo verde al hover
                              color: "#fff", // texto blanco al hover
                            },
                          }}
                        >
                          Ver más
                        </Button>

                        <Stack direction="row" spacing={1} alignItems="center">
                          <Tooltip title="Quitar del carrito">
                            <span>
                              <IconButton
                                size="small"
                                onClick={() => handleRemoveFromCart(product)}
                                disabled={getItemQuantity(product) === 0}
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
                            {getItemQuantity(product)}
                          </Typography>

                          <Tooltip title="Añadir al carrito">
                            <IconButton
                              size="small"
                              onClick={() => handleAddToCart(product)}
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

      {/* Dialog producto */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
      >
        {dialogProduct && (
          <DialogContent sx={{ position: "relative", pt: 4 }}>
            {/* Botón cerrar */}
            <IconButton
              onClick={handleCloseDialog}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "error.main",
              }}
            >
              <Close />
            </IconButton>

            {/* Imagen del producto */}
            <Box
              component="img"
              src={dialogProduct.image}
              alt={dialogProduct.alt}
              sx={{
                width: "100%",
                borderRadius: 2,
                mb: 2,
                objectFit: "contain",
                backgroundColor: "#fafafa",
                p: 1,
              }}
            />

            {/* Nombre del producto */}
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {dialogProduct.title}
            </Typography>

            {/* Descripción */}
            <Typography variant="body1" sx={{ color: "text.primary", mt: 2 }}>
              <Box component="span" sx={{ fontWeight: "bold", mr: 1 }}>
                Descripción:
              </Box>
              {dialogProduct.description}
            </Typography>

            {/* Precio */}
            {dialogProduct.price !== undefined && (
              <Typography
                variant="h6"
                color="primary"
                fontWeight="bold"
                gutterBottom
              >
                Precio: ${" "}
                {dialogProduct.price.toLocaleString("es-AR", {
                  minimumFractionDigits: 2,
                })}
              </Typography>
            )}
            <Box mt={3} display="flex" justifyContent="flex-start">
              <Button
                variant="contained"
                color="success"
                fullWidth
                size="large"
                onClick={() => {
                  handleAddToCart(dialogProduct);
                  setOpenDialog(false);
                }}
              >
                Comprar ahora
              </Button>
            </Box>
          </DialogContent>
        )}
      </Dialog>
    </Container>
  );
};

export default Accessories;
