import { Link } from "react-router-dom";
import "./ProductCard.css";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

export const ProductCard = ({
  title,
  description,
  price,
  stock,
  img,
  category,
  id,
}) => {
  return (
    <Link
      to={`/itemDetail/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Box m={2}>
        <Card
          sx={{
            borderRadius: "16px",
            transition: "0.2s",
            "&:hover": { transform: "scale(1.05)" },
            maxWidth: 300,
            minHeight: 300,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardActionArea
            sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
          >
            <CardMedia
              component="img"
              height="150"
              image={img}
              alt={title}
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
             
              <CardContent sx={{ backgroundColor: "lightgray", padding: 2 }}>
                <Typography variant="h5"> {title}</Typography>
                <Typography variant="body2">{category}</Typography>
                <Typography variant="body1" color="primary">
              {`Price: $${price}`}
            </Typography>
                
              </CardContent>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Link>
  );
};
