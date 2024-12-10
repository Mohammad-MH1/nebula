import { NavLink } from 'react-router';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/products'>Store</NavLink>
        </li>
        <li>
          <NavLink to='/my-products'>My Products</NavLink>
        </li>
        <li>
          <NavLink to='/form'>Form</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
