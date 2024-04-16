import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./style.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loader from "../../components/Loader/Loader";
import { Info } from "lucide-react";

const CategoryProducts = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getCategoryProducts() {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/products/category/${categoryId}`
      );
      if (data.message == "success") {
        setProducts(data.products);
      }
    } catch (error) {
      toast.error(error.response.data.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCategoryProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);

  if (loading) {
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
