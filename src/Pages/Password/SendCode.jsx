import React, { useContext, useState } from "react";
// import Input from "../../pages/Input";
// import { useFormik } from "formik";
// import { sendCodeSchema } from "../validation/Validation";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function SendCode() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.patch(`/auth/sendcode`, { email });
    if (data.message == "success") {
      toast.success("Code sended successfully, check your email", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      navigate("/forget-password");
    }
  };

  return (
    <>
      <div className="container py-5">
        <h2 className="pb-3 text-center">Enter you email</h2>
        <form
          onSubmit={onSubmit}
          className="py-3 text-center m-auto w-50 form-part"
        >
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="login-btn" type="submit">
            Send code
          </button>
        </form>
      </div>
    </>
  );
}
