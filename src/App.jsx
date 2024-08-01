import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import Cart from "./pages/cart/Cart";
import NavBar from "./components/navbar/NavBar";
import ItemDetailContainer from "./pages/itemDetailContainer/ItemDetailContainer";
import Checkout from "./pages/checkout/Checkout";
import CartContextProvider from "./context/CartContext";
import { Toaster } from "sonner";

function App() {
  return (
    <BrowserRouter>

    <Toaster richColors position="top-center"/>
      <CartContextProvider>


        <Routes>
          <Route element={<NavBar />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="category/:name" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout/>} />
          </Route>

          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>

        
      </CartContextProvider>
    </BrowserRouter>
  );
}
export default App;
