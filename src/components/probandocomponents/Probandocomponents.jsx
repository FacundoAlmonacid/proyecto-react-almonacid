import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { products } from "../../products";

const Probandocomponents = () => {
  return (
    <div>
      <Card sx={{ Width: 200 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://res.cloudinary.com/dmax0s0fu/image/upload/v1719086117/afp-206-jpg1-big_w4t9b2.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {products[0].title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {products[0].description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Probandocomponents;
