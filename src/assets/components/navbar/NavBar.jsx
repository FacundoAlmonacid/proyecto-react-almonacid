import "./Navbar.css"
import { FaShoppingCart } from "react-icons/fa";

const NavBar= () => {
  return (
    <div className="navbarContainer">
      <h2>logo</h2>

      <ul className="Categorias">
        <li>Plata</li>
        <li>Oro</li>
        <li>Combinadas</li>
      </ul>

      <FaShoppingCart size={20}/>
    </div>
  );
};

export default NavBar;
