import styles from './CartModal.module.css';
import { HiMiniXMark } from 'react-icons/hi2';
import { useCart } from '../../contexts/CartContext';
import { useEffect, useRef } from 'react';

function CartModal() {
  const {
    cartItems,
    isCartOpen,
    toggleCart,
    removeItem,
    deleteItem,
    addItem,
    clearCart,
  } = useCart();

  const modalRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      toggleCart();
    }
  };

  useEffect(() => {
    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} ref={modalRef}>
        <header className={styles.header}>
          <h2>Shopping Cart</h2>
          <button onClick={() => toggleCart()} className={styles.closeButton}>
            <HiMiniXMark />
          </button>
        </header>
        <div className={styles.cartContent}>
          {cartItems.length === 0 ? (
            <p className={styles.empty}>Your cart is empty</p>
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
                      <button
                        className={styles.decrementButton}
                        onClick={() => removeItem(item)}
                      >
                        -
                      </button>
                      <span className={styles.quantity}>{item.quantity}</span>
                      <button
                        className={styles.incrementButton}
                        onClick={() => addItem(item)}
                      >
                        +
                      </button>
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
        {cartItems.length > 0 && (
          <footer className={styles.footer}>
            <p>
              Total Cost: $
              {cartItems
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </p>
            <button className={styles.clear} onClick={() => clearCart()}>
              Clear Cart
            </button>
          </footer>
        )}
      </div>
    </div>
  );
}

export default CartModal;
