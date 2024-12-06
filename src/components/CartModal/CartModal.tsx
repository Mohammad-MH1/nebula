import styles from './CartModal.module.css';
import { HiMiniXMark } from 'react-icons/hi2';
import { useCart } from '../../contexts/CartContext';

function CartModal() {
  const { cartItems, isCartOpen, toggleCart, removeItem, deleteItem, addItem } =
    useCart();

  if (!isCartOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>Shopping Cart</h2>
          <button onClick={() => toggleCart()} className={styles.closeButton}>
            <HiMiniXMark />
          </button>
        </header>
        <div className={styles.cartContent}>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <table className={styles.cartTable}>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className={styles.cartContent}>
                {cartItems.map(item => (
                  <tr key={item.id}>
                    <td className={styles.firstTd}>
                      <div className={styles.productImageContainer}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className={styles.productImage}
                        />
                      </div>
                      <span>{item.title}</span>
                    </td>
                    <td>{item.category}</td>
                    <td>
                      <button onClick={() => removeItem(item)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => addItem(item)}>+</button>
                    </td>
                    <td>{(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        className={styles.removeButton}
                        onClick={() => deleteItem(item.id)}
                      >
                        <HiMiniXMark />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <footer className={styles.footer}>
          <p>
            Total Cost: $
            {cartItems
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default CartModal;
