import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import style from "./Categories.module.css";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { LoadingContext } from "../../context/LoadingContext";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const { handleLoading, loading } = useContext(LoadingContext);

  const getcategories = async () => {
    const { data } = await axios.get(`/categories/active?limit=10`);
    if (data.message == "success") {
      setCategories(data.categories);
    }
  };
  useEffect(() => {
    handleLoading(getcategories, "get categories");
  }, []);

  if (loading["get categories"]) {
    return <Loader />;
  }

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
