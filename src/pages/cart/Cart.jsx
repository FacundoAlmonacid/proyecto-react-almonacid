import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom"



const Cart = () => {
  const { cart, clearCart, deleteProduct, getTotalPrice } =
    useContext(CartContext);
    const navigate = useNavigate();

  let total = getTotalPrice();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Confirmas eliminado del producto?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si,confirmar",
      denyButtonText: `No,cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Producto eliminado", "", "success");
        deleteProduct(id);
      } else if (result.isDenied) {
        Swal.fire("Producto NO eliminado", "", "info");
      }
    });
  };

const hadleCartDelete= ()=>{
  Swal.fire({
    title: "Desea limpiar carrito?",
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "Si,confirmar",
    denyButtonText: `No,cancelar`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      clearCart()
      Swal.fire("Carrito de compra vació!", "", "success");
      navigate("/")

    } else if (result.isDenied) {
     
    }
  });
}



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
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
              </TableCell>
              <TableCell>{elemento.title}</TableCell>
              <TableCell>{elemento.price}</TableCell>
              <TableCell>{elemento.quantity}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  onClick={() => handleDelete(elemento.id)}
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
              <strong>
                <h2>${total}</h2>
              </strong>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {cart.length > 0 && (
        <div>
          <Button
            onClick={()=>hadleCartDelete()}
            variant="contained"
            color="secondary"
            style={{ marginTop: "20px" }}
          >
            Limpiar carrito
          </Button>
          <Link to={"/checkout"}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "20px", marginLeft: "10px" }}
            >
              Finalizar compra
            </Button>
          </Link>
        </div>
      )}
    </Container>
  );
};

export default Cart;
