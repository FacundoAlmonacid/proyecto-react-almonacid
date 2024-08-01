import { ProductCard } from "../../components/productCard/ProductCard";
import "./ItemList.css";
import React from "react";
import { Box, Container } from "@mui/material";

const ItemList = ({ items }) => {
  return (

  <Container>



    <Box className="customBox" display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
      {items.map((elemento) => (
        <ProductCard
          key={elemento.id}
          img={elemento.img}
          title={elemento.title}
          description={elemento.description}
          category={elemento.category}
          price={elemento.price}
          stock={elemento.stock}
          id={elemento.id}
        />
      ))}
    </Box>
</Container>
    
  );
};

export default ItemList;
