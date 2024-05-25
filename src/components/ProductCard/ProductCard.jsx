/* eslint-disable react/prop-types */
import { ShoppingCart } from "lucide-react";
import "./ProductCard.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { LoadingContext } from "../../context/LoadingContext";

const ProductCard = ({ product }) => {
  const { addToCartContext: addToCart } = useContext(CartContext);
  const { loading, handleLoading } = useContext(LoadingContext);

  return (
    <div className="product-card">
      <div className="image">
        <img src={product.mainImage.secure_url} alt={product.name} />
      </div>

      <div className="infos">
        <p>{product.name}</p>
        <div className="price">
          {product.discount > 0 && (
            <span className="old-price">${product.price}</span>
          )}
          <span className="final-price">${product.finalPrice}</span>
        </div>
      </div>

      <div className="options">
        <button
          onClick={() =>
            handleLoading(() => addToCart(product._id), "add to cart")
          }
        >
          <ShoppingCart size={17} />
          <span>{loading["add to cart"] ? "loading..." : "add to cart"}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
