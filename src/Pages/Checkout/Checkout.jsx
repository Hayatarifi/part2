import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

export default function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [coupon, setCoupon] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Number:", number); 
    console.log("Coupon:", coupon);
    navigate("/order-confirmation"); 
  };

  return (
    <div className="checkout">
      <div className="container">
        <h2>Check out</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="number">Your Number:</label>
            <input
              type="number"
              id="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="coupon">Coupon (Optional):</label>
            <input
              type="text"
              id="coupon"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
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
