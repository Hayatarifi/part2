import { useContext } from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";

function Navbar() {
  const { token, logout } = useContext(UserContext);
  const { cart } = useContext(CartContext);

  return (
    <nav className={style.bg}>
      <div>
        <ul>
          <li>
            <Link to="/" className={style.NavLink}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/Products" className={style.NavLink}>
              Products
            </Link>
          </li>

          {token ? (
            <>
              <li>
                <Link to="/Cart" className={style.NavLink}>
                  Cart{" "}
                  <span
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: "white",
                    }}
                  >
                    {cart?.length || "0"}
                  </span>
                </Link>
              </li>
              <li>
                <div className={style.NavLink} onClick={logout}>
                  Logout
                </div>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
