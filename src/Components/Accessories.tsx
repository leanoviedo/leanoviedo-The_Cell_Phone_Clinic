import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
} from "@mui/material";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";

const Accessories: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Accesorios
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="https://source.unsplash.com/random"
              alt="Accesorio"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Nombre del Accesorio
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Descripción del accesorio.
              </Typography>
              <IconButton
                aria-label="bookmark accessory"
                color="primary"
                sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
              >
                <BookmarkAdd />
              </IconButton>
            </CardContent>
            <Button size="small" color="primary">
              Ver más
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="https://source.unsplash.com/random"
              alt="Accesorio"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Nombre del Accesorio
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Descripción del accesorio.
              </Typography>
              <IconButton
                aria-label="bookmark accessory"
                color="primary"
                sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
              >
                <BookmarkAdd />
              </IconButton>
            </CardContent>
            <Button size="small" color="primary">
              Ver más
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="https://source.unsplash.com/random"
              alt="Accesorio"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Nombre del Accesorio
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Descripción del accesorio.
              </Typography>
              <IconButton
                aria-label="bookmark accessory"
                color="primary"
                sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
              >
                <BookmarkAdd />
              </IconButton>
            </CardContent>
            <Button size="small" color="primary">
              Ver más
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="https://source.unsplash.com/random"
              alt="Accesorio"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Nombre del Accesorio
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Descripción del accesorio.
              </Typography>
              <IconButton
                aria-label="bookmark accessory"
                color="primary"
                sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
              >
                <BookmarkAdd />
              </IconButton>
            </CardContent>
            <Button size="small" color="primary">
              Ver más
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Accessories;
