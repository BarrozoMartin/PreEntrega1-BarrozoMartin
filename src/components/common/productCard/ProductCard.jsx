import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import CounterContainer from "../counter/CounterContainer"; 
import { products } from "../../../productsMock"; 

const ProductCard = ({ item }) => {
  const product = products.find((p) => p.id === item.id);

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia sx={{ height: 300 }} image={item.img} title={`image ${item.title}`} />
      <CardContent sx={{ height: 2 }}>
        <Typography gutterBottom variant="h4" component="div">
          {item.title}
        </Typography>
        <Typography variant="h6" color="text.primary">
          {item.description}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          AR$ {item.price}
        </Typography>
      </CardContent>
      <CardActions>
          <CounterContainer product={product} />
          <Link to={`/itemDetail/${item.id}`}>
            <Button sx={{ mt: 18 , width: 1 }} size="large" variant="outlined">
              Ver detalle
            </Button>
          </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
