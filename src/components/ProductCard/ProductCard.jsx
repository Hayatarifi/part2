/* eslint-disable react/prop-types */
import { ShoppingCart } from "lucide-react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
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
        <button>
          <ShoppingCart size={17} />
          <span>add To Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
