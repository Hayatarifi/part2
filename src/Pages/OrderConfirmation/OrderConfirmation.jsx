import React from "react";
import { Link } from "react-router-dom";
import "./OrderConfirmation.css";

export default function OrderConfirmation() {
  return (
    <div className="order-confirmation">
      <div className="container">
        <h2>Order Confirmation</h2>
        <p>Your order has been placed successfully!</p>
        <Link to="/" className="back">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
