import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.jsx";
import Products from "./Pages/products/Products.jsx";
import Login from "./Pages/login/Login.jsx";
import Register from "./Pages/register/Register.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Home from "./Pages/home/Home.jsx";
import ForgotPassword from "./Pages/Password/ForgetPassword.jsx";
import { ToastContainer } from "react-toastify";
import CategoryProducts from "./Pages/CategoryProducts/CategoryProducts.jsx";
import UserContextProvider from "./context/UserContext.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";
import LoadingContextProvider from "./context/LoadingContext.jsx";
import SendCode from "./Pages/Password/SendCode.jsx";
import Checkout from "./Pages/Checkout/Checkout.jsx";
import OrderConfirmation from "./Pages/OrderConfirmation/OrderConfirmation.jsx";
import MyOrders from "./Pages/MyOrder/MyOrder.jsx";
import { OrderContextProvider } from "./context/OrderContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
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
        element: <CategoryProducts />,
      },
      {
        path: "/forget-password",
        element: <ForgotPassword />,
      },
      {
        path: "/send-code",
        element: <SendCode />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/my-orders",
        element: <MyOrders />,
      },

      {
        path: "/order-confirmation",
        element: <OrderConfirmation />,
      },
    ],
  },
]);

export default function App() {
  return (
    <LoadingContextProvider>
      <OrderContextProvider>
        <UserContextProvider>
          <CartContextProvider>
            <ToastContainer
              position="bottom-center"
              autoClose={1500}
              hideProgressBar={false}
              closeOnClick
              pauseOnHover={false}
              draggable
              theme="light"
            />
            <RouterProvider router={router} />
          </CartContextProvider>
        </UserContextProvider>
      </OrderContextProvider>
    </LoadingContextProvider>
  );
}
