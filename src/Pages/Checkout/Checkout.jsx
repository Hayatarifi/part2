import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import { toast } from "react-toastify";
import axios from "axios";
import { CartContext } from "../../context/CartContext";

export default function Checkout() {
  const token = localStorage.getItem("userToken");
  const [data, setData] = useState({
    couponName: "",
    address: "",
    phone: "",
  });
  const { setCart } = useContext(CartContext);
  function handeChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: responseData } = await axios.post("/order", data, {
        headers: {
          Authorization: `Tariq__${token}`,
        },
      });
      if (responseData.message == "success") {
        setCart([]);
        toast.success("Your order has been created successfully!");
        navigate("/my-orders");
      }
    } catch (error) {
      toast.error(error.response.data.message || "Something went wrong");
    }
  };

  return (
    <div className="checkout">
      <div className="container">
        <h2>Check out</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="couponName">Coupon:</label>
            <input
              type="text"
              name="couponName"
              value={data.couponName}
              onChange={handeChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              name="address"
              value={data.address}
              onChange={handeChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              name="phone"
              value={data.phone}
              onChange={handeChange}
              required
            />
          </div>

          <button type="submit" className="btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
