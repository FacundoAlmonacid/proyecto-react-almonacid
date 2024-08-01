import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetail.css";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import {addDoc, collection, doc, getDoc } from"firebase/firestore"
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const {addToCart,getQuantityById}=useContext(CartContext)
  const { id } = useParams();

  const [item, setItem] = useState({});

  let initialValue = getQuantityById(id)

  useEffect(() => {
  
let productCollection= collection(db,"products")
let refDoc= doc(productCollection,id)
let getProduct = getDoc(refDoc)
getProduct.then((res)=>{

setItem({...res.data(),id:res.id})

})



  }, [id]);

  
  const onAdd = (quantity) => {
    let finalProduct = { ...item, quantity:quantity };
    addToCart(finalProduct)
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: true,
      timer: 1500
    })

    

    
  };

  return <ItemDetail item={item} onAdd={onAdd} initialValue={initialValue}/>;
};

export default ItemDetailContainer;
