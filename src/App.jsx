import NavBar from "./assets/components/navbar/NavBar";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Hola como estas"} />
  
    </div>
  );
}

export default App;
