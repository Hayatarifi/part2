import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { handleApiErros } from "../utils/globalErrors";
import { LoadingContext } from "./LoadingContext";

export const CartContext = createContext(null);

export function CartContextProvider({ children }) {
  const token = localStorage.getItem("userToken");
  const [cart, setCart] = useState([]);
  const { handleLoading } = useContext(LoadingContext);

  const addToCartContext = async (productId) => {
    const { data } = await axios.post(
      `/cart`,
      { productId },
      { headers: { Authorization: `Tariq__${token}` } }
    );
    if (data.message == "success") {
      toast.success("product added successfully");
      getCartContext();
      setCount(++count);
    }
  };
  const getCartContext = async () => {
    const { data } = await axios.get(`/cart`, {
      headers: { Authorization: `Tariq__${token}` },
    });
    if (data.message == "success") {
      setCart(data.products);
    }
  };
  const removeItemContext = async (productId) => {
    const { data } = await axios.patch(
      `/cart/removeItem`,
      { productId },
      { headers: { Authorization: `Tariq__${token}` } }
    );
    if (data.message == "success") {
      toast.success("product removed successfully");
      getCartContext();
    }
  };

  const clearCartContext = async () => {
    const { data } = await axios.patch(`/cart/clear`, null, {
      headers: { Authorization: `Tariq__${token}` },
    });
    if (data.message == "success") {
      toast.success("Cart has been cleared");
      setCart([]);
    }
  };

  const increaseQuantity = async (productId) => {
    const { data } = await axios.patch(
      `/cart/incraseQuantity`,
      { productId },
      { headers: { Authorization: `Tariq__${token}` } }
    );
    if (data.message == "success") {
      getCartContext();
    }
  };

  const decreaseQuantity = async (productId) => {
    const { data } = await axios.patch(
      `/cart/decraseQuantity`,
      { productId },
      { headers: { Authorization: `Tariq__${token}` } }
    );
    if (data.message == "success") {
      getCartContext();
    }
  };

  useEffect(() => {
    if (token) {
      handleLoading(getCartContext, "get cart");
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCartContext,
        getCartContext,
        removeItemContext,
        clearCartContext,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
