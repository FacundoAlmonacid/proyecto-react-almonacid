import { Link } from "react-router-dom";
import "./ProductCard.css";

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
    <div className="tarjeta">

      <img src={img} alt="x" />

      <p>{title}</p>
      <p>{description}</p>
      <p>{price}</p>
      <p>{stock}</p>
      <p>{category}</p>
      <Link to={`/itemDetail/${id}`} >Ver mas..</Link>
      
    </div>
  );
};
