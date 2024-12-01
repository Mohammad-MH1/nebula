import { HiStar } from "react-icons/hi2";
import styles from "./ProductCard.module.css";
import { Product } from "../../services/productsAPI";

function ProductCard({ product }: { product: Product }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.productImage}
        />
      </div>
      <div className={styles.productBody}>
        <h3 className={styles.productTitle}>{product.title}</h3>
        <div className={styles.productContain}>
          <p className={styles.productRating}>
            <HiStar /> <span>{product.rating.rate}</span>
          </p>
          <p className={styles.productCategory}>{product.category}</p>
        </div>
        <div className={styles.productPriceAndButton}>
          <p className={styles.productPrice}>${product.price}</p>
          <button className={styles.addToCartButton}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
