import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import style from "./Categories.module.css";
import { Link } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  const getcategories = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API}/categories/active?limit=10`
    );
    console.log(data);
    setCategories(data.categories);
  };
  useEffect(() => {
    getcategories();
  }, []);

  return (
    <>
      <h2 className={style.cat}>categories</h2>
      <Swiper slidesPerView={3} spaceBetween={20}>
        {categories.map((category) => (
          <SwiperSlide key={category._id}>
            <div className="category">
              <Link to={`/products/category/${category._id}`}>
                <img src={category.image.secure_url} />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
