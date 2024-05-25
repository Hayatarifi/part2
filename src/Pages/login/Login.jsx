// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import axios from "axios";
import { object, string } from "yup";
import { toast } from "react-toastify";
import style from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { setToken } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const validateData = async () => {
    const LoginSchema = object({
      email: string().email().required(),
      password: string().min(3).max(20).required(),
    });

    try {
      await LoginSchema.validate(user, { abortEarly: false });
      return true;
    } catch (error) {
      error.errors.map((err) => toast.error(err));
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValidData = await validateData();

    if (!isValidData) {
      return;
    }

    try {
      const { data } = await axios.post(`/auth/signin`, user);

      setUser({
        email: "",
        password: "",
      });

      if (data.message === "success") {
        setToken(data.token);
        toast.success("Logged in successfully");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className={style.loginContainer}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.formGroup}>
          <label htmlFor="email" className={style.label}>
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className={style.input}
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="password" className={style.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className={style.input}
          />
        </div>

        <button type="submit" className={style.button}>
          Login
        </button>

        <Link to="/send-code" className={style.forgetPasswordButton}>
          Forget password
        </Link>
      </form>
    </div>
  );
}
