import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../products";
import { useParams } from "react-router-dom";
import "./ItemDetail.css";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = () => {
  const {addToCart,getQuantityById}=useContext(CartContext)
  const { id } = useParams();

  const [item, setItem] = useState({});

  let initialValue = getQuantityById(+id)

  useEffect(() => {
    let product = products.find((product) => product.id === +id);
    if (product) {
      setItem(product);
    }
  }, [id]);

  
  const onAdd = (quantity) => {
    let finalProduct = { ...item, quantity:quantity };
    addToCart(finalProduct)

    
  };

  return <ItemDetail item={item} onAdd={onAdd} initialValue={initialValue}/>;
};

export default ItemDetailContainer;
