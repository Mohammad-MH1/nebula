import { HiStar } from 'react-icons/hi2';
import styles from './ProductCard.module.css';
import { Product } from '../../services/productsAPI';
import { Link } from 'react-router';
import { useCart } from '../../contexts/CartContext';

function ProductCard({ product }: { product: Product }) {
  const { cartItems, addItem, removeItem } = useCart();

  const cartItem = cartItems.find(item => item.id === product.id);

  const handleAddItem = (product: Product) => {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      category: product.category,
      image: product.image,
      quantity: 1,
    };

    addItem(cartItem);
  };

  return (
    <div className={styles.productCard}>
      <Link to={`${product.id}`}>
        <div className={styles.imageContainer}>
          <img
            src={product.image}
            alt={product.title}
            className={styles.productImage}
          />
        </div>
      </Link>
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
          {!cartItem ? (
            <button
              onClick={() => handleAddItem(product)}
              className={styles.addToCartButton}
            >
              Add to Cart
            </button>
          ) : (
            <div className={styles.quantityControls}>
              <button
                className={styles.decrementButton}
                onClick={() => removeItem(cartItem)}
              >
                -
              </button>
              <span>{cartItem.quantity}</span>
              <button
                className={styles.incrementButton}
                onClick={() => addItem(cartItem)}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
