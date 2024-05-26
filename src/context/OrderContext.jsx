import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const OrderContext = createContext();

export function OrderContextProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("userToken");

  const getOrders = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("/order", {
        headers: {
          Authorization: `Tariq__${token}`,
        },
      });
      if (data.message == "success") {
        setOrders(data.orders);
      }
    } catch (error) {
      toast.error(error.response.data.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <OrderContext.Provider value={{ orders, isLoading, getOrders }}>
      {children}
    </OrderContext.Provider>
  );
}
