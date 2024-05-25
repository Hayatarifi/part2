import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./style.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loader from "../../components/Loader/Loader";
import { Info } from "lucide-react";
import { LoadingContext } from "../../context/LoadingContext";

const CategoryProducts = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const { loading, handleLoading } = useContext(LoadingContext);

  async function getCategoryProducts() {
    const { data } = await axios.get(`/products/category/${categoryId}`);
    if (data.message == "success") {
      setProducts(data.products);
    }
  }

  useEffect(() => {
    handleLoading(getCategoryProducts, "get category");
  }, [categoryId]);

  if (loading["get category"]) {
    return <Loader />;
  }

  return (
    <div className="category-products">
      {products.length > 0 ? (
        <div className="products">
          {products.map((pro) => (
            <ProductCard product={pro} key={pro._id} />
          ))}
        </div>
      ) : (
        <p className="no-products">
          <Info />
          {`This Category doesn't has a products`}
        </p>
      )}
    </div>
  );
};

export default CategoryProducts;
