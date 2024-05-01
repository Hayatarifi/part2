import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.jsx";
import Products from "./Pages/products/Products.jsx";
import Login from "./Pages/login/Login.jsx";
import Register from "./Pages/register/Register.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Home from "./Pages/home/Home.jsx";
import { ToastContainer } from "react-toastify";
import CategoryProducts from "./Pages/CategoryProducts/CategoryProducts.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/products/category/:categoryId",
        element: <CategoryProducts />
      }
    ]
    
  }
]);

export default function App() {
  return (
    <>
      <ToastContainer
        autoClose={2500}
        position="top-center"
        draggable={true}
        pauseOnHover={true}
        closeOnClick
      />
      <RouterProvider router={router} />
    </>
  );
}
