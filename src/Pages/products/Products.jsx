import { useEffect, useState } from "react";
import Categories from "../categories/Categories";
import axios from "axios";
import { toast } from "react-toastify";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Products.css";
import Loader from "../../components/Loader/Loader";

export default function Products() {
  const limit = 2;
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [pagesCount, setPagesCount] = useState(0);
  const [loading, setLoading] = useState(false);

  async function getProducts() {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/products?page=${page}&limit=${limit}`
      );
      if (data.message == "success") {
        console.log(data);
        setProducts(data.products);
        setPagesCount(data.total / limit);
      }
    } catch (error) {
      toast.error(error.reponse.data.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="all-products">
      {loading ? (
        <Loader size={60} />
      ) : (
        <div className="products">
          {products.map((pro) => (
            <ProductCard product={pro} key={pro._id} />
          ))}
        </div>
      )}

      <div className="pagination">
        <button disabled={page == 1} onClick={() => setPage(page - 1)}>
          prev
        </button>
        {Array.from({ length: pagesCount }, (_, index) => index + 1).map(
          (num) => (
            <button
              key={num}
              onClick={() => {
                setPage(num);
              }}
              className={num == page && "active"}
            >
              {num}
            </button>
          )
        )}
        <button disabled={page == pagesCount} onClick={() => setPage(page + 1)}>
          next
        </button>
      </div>
    </div>
  );
}
