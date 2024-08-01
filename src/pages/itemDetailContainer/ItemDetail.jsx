import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Container, Paper } from "@mui/material";
import CounterContainer from "../../components/counter/CounterContainer";

const ItemDetail = ({ item,onAdd,initialValue }) => {
  return (
    <Container style={{display:"flex",justifyContent:"center",margin:"30px"}}>
      <Card sx={{ width: "80vw", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <CardMedia
        component="img"
        image={item.img}
        
        sx={{
          width: { xs: "50%", sm: "50%", md: "50%", lg: "100%", xl: "100%" },
          height: { xs: 200, sm: 250, md: 300, lg: 350, xl: 400 }, // Ajuste de altura según breakpoints
          borderRadius: 2, // Bordes redondeados

        }} />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {item.description}
          </Typography>
        </CardContent>
     

        <CounterContainer onAdd={onAdd} stock={item.stock} initialValue ={initialValue }/>

      </Card>

    
    </Container>
  );
};

export default ItemDetail;
