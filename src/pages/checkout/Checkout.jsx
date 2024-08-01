import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button, Container, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");

  const total = getTotalPrice();

  const formik = useFormik({
    initialValues: { nombre: "", email: "", telefono: "" },
    onSubmit: async (data) => {
      const orderDetails = {
        buyer: data,
        items: cart,
        total: total,
      };

      try {
        const ordersCollection = collection(db, "orders");
        const res = await addDoc(ordersCollection, orderDetails);
        setOrderId(res.id);
        toast.success(`Gracias por tu compra, tu ticket es ${res.id}`);
        clearCart();
        navigate("/");

        const productCollection = collection(db, "products");
        for (const elemento of cart) {
          const refDoc = doc(productCollection, elemento.id);
          await updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
        }
      } catch (error) {
        console.error("Error al realizar la compra: ", error);
      }
    },
    validationSchema: Yup.object({
      nombre: Yup.string("solo caracteres letras")
        .required("Campo obligatorio")
        .min(3, "mínimo 3 caracteres"),
      email: Yup.string("solo caracteres letras")
        .required("Campo obligatorio")
        .email("email invalido")
        .min(3, "mínimo 3 caracteres"),
      telefono: Yup.number("solo caracteres números")
        .required("Campo obligatorio")
        .min(3, "mínimo 3 caracteres"),
    }),
    validateOnChange: false,
  });

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {orderId ? (
        <h2>Gracias, tu ticket es: {orderId}</h2>
      ) : (
        <form
          onSubmit={formik.handleSubmit}
          style={{
            margin: "30px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            width: "50%",
            gap: "20px",
          }}
        >
          <TextField
            variant="outlined"
            type="text"
            label="nombre"
            name="nombre"
            onChange={formik.handleChange}
            error={formik.errors.nombre ? true : false}
            helperText={formik.errors.nombre}
          />
          <TextField
            variant="outlined"
            type="text"
            label="email"
            name="email"
            onChange={formik.handleChange}
            error={formik.errors.email ? true : false}
            helperText={formik.errors.email}
          />
          <TextField
            variant="outlined"
            type="number"
            label="telefono"
            name="telefono"
            onChange={formik.handleChange}
            error={formik.errors.telefono ? true : false}
            helperText={formik.errors.telefono}
            sx={{
              '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
                WebkitAppearance: 'none',
                margin: 0,
              },
              '& input[type=number]': {
                MozAppearance: 'textfield',
              },
            }}
          />
          <Button type="submit" variant="contained">
            Confirmar
          </Button>
        </form>
      )}
    </Container>
  );
};

export default Checkout;