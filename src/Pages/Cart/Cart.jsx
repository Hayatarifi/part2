import React, { useContext, useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import { LoadingContext } from "../../context/LoadingContext";

export default function Cart() {
  const {
    removeItemContext,
    clearCartContext,
    increaseQuantity,
    decreaseQuantity,
    cart,
  } = useContext(CartContext);

  const { loading } = useContext(LoadingContext);

  const removeItem = async (productId) => {
    await removeItemContext(productId);
  };

  const clearCart = async () => {
    await clearCartContext();
  };

  const increase = async (productId) => {
    await increaseQuantity(productId);
  };

  const decrease = async (productId) => {
    decreaseQuantity(productId);
  };

  if (loading["get cart"]) {
    return <Loader />;
  }

  return (
    <div className="cart">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cart-items m-auto w-75">
              <div className="products" id="products">
                <div className="item">
                  <div className="product-info text-blue">
                    <h2>Product</h2>
                  </div>
                  <div className="quantity text-blue">
                    <h2>Quantity</h2>
                  </div>
                  <div className="price text-blue">
                    <h2>Price</h2>
                  </div>
                  <div className="subtotal text-blue">
                    <h2>Subtotal</h2>
                  </div>
                </div>

                {cart.length > 0 ? (
                  cart.map((product) => (
                    <div className="item" key={product._id}>
                      <div className="product-info">
                        <img
                          src={product.details.mainImage.secure_url}
                          alt={product.details.name}
                        />
                        <div className="product-details">
                          <h2>{product.details.name}</h2>
                          <a
                            href="#"
                            onClick={() => removeItem(product.details._id)}
                          >
                            <svg
                              className="rounded-5 badge-blue"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={25}
                              viewBox="0 0 24 25"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.29289 5.79289C5.68342 5.40237 6.31658 5.40237 6.70711 5.79289L12 11.0858L17.2929 5.79289C17.6834 5.40237 18.3166 5.40237 18.7071 5.79289C19.0976 6.18342 19.0976 6.81658 18.7071 7.20711L13.4142 12.5L18.7071 17.7929C19.0976 18.1834 19.0976 18.8166 18.7071 19.2071C18.3166 19.5976 17.6834 19.5976 17.2929 19.2071L12 13.9142L6.70711 19.2071C6.31658 19.5976 5.68342 19.5976 5.29289 19.2071C4.90237 18.8166 4.90237 18.1834 5.29289 17.7929L10.5858 12.5L5.29289 7.20711C4.90237 6.81658 4.90237 6.18342 5.29289 5.79289Z"
                                fill="#fff"
                              />
                            </svg>
                            remove
                          </a>
                        </div>
                      </div>
                      <div className="quantity">
                        <button
                          className="me-1"
                          onClick={() => decrease(product.details._id)}
                        >
                          <svg
                            className="minus"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={17}
                            viewBox="0 4 16 17"
                            fill="none"
                          >
                            <path
                              d="M3.22852 8.5H12.5618"
                              stroke="#121212"
                              strokeWidth="0.75"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <span>{product.quantity}</span>
                        <button
                          className="ms-1"
                          onClick={() => increase(product.details._id)}
                        >
                          <svg
                            className="pluse"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={17}
                            viewBox="0 4 16 17"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.37565 3.83333C8.37565 3.62622 8.20776 3.45833 8.00065 3.45833C7.79354 3.45833 7.62565 3.62622 7.62565 3.83333V8.125H3.33398C3.12688 8.125 2.95898 8.29289 2.95898 8.5C2.95898 8.7071 3.12688 8.875 3.33398 8.875H7.62565V13.1667C7.62565 13.3738 7.79354 13.5417 8.00065 13.5417C8.20776 13.5417 8.37565 13.3738 8.37565 13.1667V8.875H12.6673C12.8744 8.875 13.0423 8.7071 13.0423 8.5C13.0423 8.29289 12.8744 8.125 12.6673 8.125H8.37565V3.83333Z"
                              fill="#121212"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="price">${product.details.price}</div>
                      <div className="subtotal">
                        ${product.details.price * product.quantity}
                      </div>
                    </div>
                  ))
                ) : (
                  <h3>The cart is empty</h3>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-3 btns-section">
          <button
            className="btn btn-outline-danger mt-2"
            onClick={() => clearCart()}
          >
            Clear the cart
          </button>
          <button className="btn btn-outline-primary mt-2 ms-2">
            <Link className="text-decoration-none" to="/Checkout">
              Check out
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
