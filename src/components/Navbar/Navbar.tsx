import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

export default Navbar;
