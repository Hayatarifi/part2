import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (

    <nav className={style.bg}>
      <div>
        <ul>

          <li>
            <Link to="/Home" className={style.NavLink}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/Products" className={style.NavLink}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/Cart" className={style.NavLink}>
              Cart
            </Link>
          </li>
          <li>
            <Link to="/register" className={style.NavLink}>
              Register
            </Link>
          </li>

          <li>
            <Link to="/login" className={style.NavLink}>
              Login
            </Link>
          </li>


        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
