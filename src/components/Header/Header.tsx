import { HiOutlineShoppingCart } from 'react-icons/hi2';

import styles from './Header.module.css';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router';
import { useCart } from '../../contexts/CartContext';

function Header() {
  const { toggleCart } = useCart();
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

        <HiOutlineShoppingCart
          onClick={toggleCart}
          className={styles.headerCart}
        />
      </div>
    </header>
  );
}

export default Header;
