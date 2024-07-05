import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import Cart from "./pages/cart/Cart";
import NavBar from "./components/navbar/NavBar";
import ItemDetailContainer from "./pages/itemDetailContainer/ItemDetailContainer";

function App() {


  return (
   <BrowserRouter>
      <Routes>


        <Route element={<NavBar/>}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="category/:name" element={<ItemListContainer />}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer/>} />
        </Route>
         
          <Route path="*" element={<h1>NOT FOUND</h1>} />

      </Routes>
    </BrowserRouter> 
  )}
export default App;
