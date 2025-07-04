import React, { useState } from "react";
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
  DialogTitle,
  DialogActions,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { accessoriesData } from "../MockData/mock-data";

type AccessoryItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
};


const Accessories: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCardClick = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prev) =>
        prev.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories((prev) => [...prev, category]);
    }
  };

  // Filtrar productos según las categorías seleccionadas
  let filteredProducts: AccessoryItem[] = [];
  if (selectedCategories.length === 0) {
    // Si no hay categorías seleccionadas, mostrar todos los productos
    filteredProducts = Object.values(accessoriesData).flat();
  } else {
    filteredProducts = Object.entries(accessoriesData)
      .filter(([category]) => selectedCategories.includes(category))
      .flatMap(([, products]) => products);
  }

  return (
    <Container sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h3" align="center" gutterBottom color="primary">
        Accesorios
      </Typography>

      <Grid container spacing={2}>
        {/* Sidebar con filtros */}
        <Grid item xs={12} md={3}>
          <Box mb={4} p={2} border="1px solid #ddd" borderRadius={2}>
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
                        color="primary"
                      />
                    }
                    label={
                      category.charAt(0).toUpperCase() +
                      category.slice(1).replace(/_/g, " ")
                    }
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Box>
        </Grid>

        {/* Productos */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {filteredProducts.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    maxWidth: 345,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
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
                      <Typography gutterBottom variant="h6" component="div">
                        {product.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ height: "60px", overflow: "hidden" }}
                      >
                        {product.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions sx={{ mt: "auto", justifyContent: "space-between" }}>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      href={product.link}
                    >
                      Ver más
                    </Button>
                    <Button size="small" color="secondary">
                      <AddShoppingCart />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Dialog para imagen ampliada */}
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogTitle>Vista previa</DialogTitle>
        <DialogContent>
          {selectedImage && (
            <img
              src={selectedImage.trim()}
              alt="Ampliada"
              style={{
                width: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
              }}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Accessories;