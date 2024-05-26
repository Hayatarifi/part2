import React, { useState } from "react";
import style from "./Register.module.css";
import axios from "axios";
import { object, string } from "yup";
import { toast } from "react-toastify";

export default function Register() {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    image: "",
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handelImageChange = (e) => {
    const { name, files } = e.target;
    setUser({
      ...user,
      [name]: files[0],
    });
  };

  const validataData = async () => {
    const RegisterSchema = object({
      userName: string().min(3, "at 3 char").max(20).required(),
      email: string().email(),
      password: string().min(3).max(20).required(),
      image: string().required(),
    });

    try {
      await RegisterSchema.validate(user, { abortEarly: false });
      return true;
    } catch (error) {
      error.errors.map((err) => toast.error(err));
      return false;
    }
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const isValidData = await validataData();

    if (!isValidData) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append("userName", user.userName);
      formData.append("email", user.email);
      formData.append("password", user.password);
      formData.append("image", user.image);
      const { data } = await axios.post(`/auth/signup`, formData);
      setUser({
        userName: "",
        email: "",
        password: "",
        image: "",
      });

      if (data.message == "success") {
        toast.success(
          "You registered succeessfully, please confirm your email"
        );
      }
    } catch (error) {
      toast.error(error.response.data.message || "Something went wrong!");
    }
  };

  return (
    <>
      <h2 className={style.register}>Register</h2>

      <form onSubmit={handelSubmit} className={style.form}>
        <label className={style.labelr}>User Name</label>
        <input
          type="text"
          value={user.userName}
          name="userName"
          onChange={handelChange}
        />

        <label className={style.labelr}>Email</label>
        <input
          type="text"
          value={user.email}
          name="email"
          onChange={handelChange}
        />
        <label className={style.labelr}>password</label>
        <input
          type="password"
          value={user.password}
          name="password"
          onChange={handelChange}
        />

        <label className={style.labelr}>Image</label>
        <input type="file" name="image" onChange={handelImageChange} />

        <button type="submit" className={style.submit}>
          Submit
        </button>
      </form>
    </>
  );
}
