import {  Button,  Container, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, clearCart, deleteProduct, getTotalPrice } =
    useContext(CartContext);
 

  let total = getTotalPrice();

  console.log(cart);

  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Producto</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Precio</TableCell>
            <TableCell>Unidades</TableCell>
            <TableCell></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((elemento) => (
            <TableRow key={elemento.id}>
               <TableCell>
                <img
                  src={elemento.img} 
                  alt={elemento.title}
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
              </TableCell>
              <TableCell>{elemento.title}</TableCell>
              <TableCell>{elemento.price}</TableCell>
              <TableCell>{elemento.quantity}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  onClick={() => deleteProduct(elemento.id)}
                >
                  Eliminar
                </Button>
              </TableCell>
            </TableRow>
          ))}
              <TableRow>
            <TableCell colSpan={4} align="right">
              <strong>Total</strong>
            </TableCell>
            <TableCell>
              <strong> <h2>${total}</h2></strong>
                
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      
      
      <Button onClick={clearCart} variant="contained" color="secondary" style={{ marginTop: '20px' }}>
        Limpiar carrito
      </Button>

      <Link to={"/checkout"}>
        <Button variant="contained" color="primary" style={{ marginTop: '20px', marginLeft: '10px' }}>
          Finalizar compra
        </Button>
      </Link>
    </Container>
  );
};

export default Cart;
