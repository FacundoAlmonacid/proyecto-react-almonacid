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
    <Container>
      <Card sx={{ width: "100vw", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <CardMedia
        component="img"
        image={item.img}
        
        sx={{
          objectPosition: "center",
          width: { xs: "50%", sm: "50%", md: "50%", lg: "100%", xl: "100%" },
          height: { xs: 200, sm: 250, md: 300, lg: 350, xl: 400 }, // Ajuste de altura según breakpoints
          objectFit: "cover", // Escalar la imagen para llenar el contenedor
          borderRadius: 2, // Bordes redondeados

        }} />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>

        <CounterContainer onAdd={onAdd} stock={item.stock} initialValue ={initialValue }/>

      </Card>

      {/*   
      <Paper
        sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
      >
        <img
          src={item.img}
          alt=""
          style={{
            width:{ xs: "30px", sm: "30px" } ,
            
         

          }}
        />
        <p>{item.title}</p>
      </Paper>

      
      
      
      
      
      <img src={item.img} alt="" />
      <p>{item.title}</p>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <p>{item.stock}</p>
      <p>{item.category}</p> */}
    </Container>
  );
};

export default ItemDetail;
