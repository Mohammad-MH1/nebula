import { Dispatch } from 'react';
import styles from './CartModal.module.css';
import { HiMiniXMark } from 'react-icons/hi2';

const cartItems = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
];

function CartModal({
  onIsModalOpen,
}: {
  onIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>Shopping Cart</h2>
          <button
            onClick={() => onIsModalOpen(c => !c)}
            className={styles.closeButton}
          >
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
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </td>
                    <td>{item.price.toFixed(2)}</td>
                    <td>
                      <button className={styles.removeButton}>
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
            {/* {cartItems
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)} */}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default CartModal;
