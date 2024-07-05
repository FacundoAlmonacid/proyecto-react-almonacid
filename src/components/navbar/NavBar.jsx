import CartWidget from "../cartWidget/CartWidget";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
     
      <div className="navbarContainer">

<Link to="/"> logo </Link>
        

        <ul className="Categorias">
          <Link to="/">Todas</Link>
          <Link to= "category/silver">silver</Link>
          <Link to="category/combined">Combined</Link>
        </ul>
       <CartWidget/>

      </div>

        <Outlet />

    </>
  );
};

export default NavBar;
