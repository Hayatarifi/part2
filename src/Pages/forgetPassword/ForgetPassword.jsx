// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import style from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const { data } = await axios.patch("/api/auth/forgotPassword", { email });

      if (data.message === "success") {
        setMessage("A password reset link has been sent to your email.");
      } else {
        setMessage(data.message || "an error occurred,Please try again.");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className={style.container}>
      <h1>Password Reset</h1>
      <p>Enter your registered email address and we will send you a link to reset your password.</p>
      <form onSubmit={handleSubmit} className={style.form}>
        <label htmlFor="email">Email address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={style.input}
        />
        <button type="submit" className={style.button}>
        send
        </button>
      </form>
      {message && <div className={style.message}>{message}</div>}
    </div>
  );
};

export default ForgotPassword;
