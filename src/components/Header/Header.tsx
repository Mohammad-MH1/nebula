import { HiOutlineShoppingCart } from 'react-icons/hi2';

import styles from './Header.module.css';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router';
import { useCart } from '../../contexts/CartContext';
import Switch from '../Switch/Switch';

function Header() {
  const { toggleCart, cartItems } = useCart();
  return (
    <header className={styles.sectionHeader}>
      <div className={styles.headerContainer}>
        <Link to='/'>
          <div className={styles.headerTextLogo}>
            <img
              className={styles.headerLogo}
              src='/header-logo.png'
              alt='header logo'
            />
            <p>Nebula</p>
          </div>
        </Link>
        <Navbar />

        <div className={styles.container}>
          <div className={styles.cartContainer}>
            <HiOutlineShoppingCart
              onClick={toggleCart}
              className={styles.headerCart}
            />
            {cartItems.length > 0 && <button>{cartItems.length}</button>}
          </div>
          <Switch />
        </div>
      </div>
    </header>
  );
}

export default Header;
