import React, { useState } from "react";
import axios from "axios";
import style from "./ForgetPassword.module.css";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    code: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data: responseData } = await axios.patch(
        "/auth/forgotPassword",
        data
      );

      if (responseData.message === "success") {
        toast.success("your password has been updated successfully.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className={style.container}>
      <h1>Password Reset</h1>
      <p>
        Enter your registered email address and we will send you a link to reset
        your password.
      </p>
      <form onSubmit={handleSubmit} className={style.form}>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            className={style.input}
            required
          />
        </div>
        <div>
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            className={style.input}
            required
          />
        </div>
        <div>
          <label htmlFor="code">Code:</label>
          <input
            type="text"
            id="code"
            name="code"
            value={data.code}
            onChange={handleChange}
            className={style.input}
            required
          />
        </div>
        <button type="submit" className={style.button}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
