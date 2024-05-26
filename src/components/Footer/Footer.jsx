import React from "react";
import Style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className={Style.container}>
        <p>&copy; 2024 HayaTarifi-Company </p>
      </div>
    </footer>
  );
};

export default Footer;
