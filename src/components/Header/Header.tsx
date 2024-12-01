import { HiOutlineShoppingCart } from "react-icons/hi2";

import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router";

function Header() {
  return (
    <header className={styles.sectionHeader}>
      <div className={styles.headerContainer}>
        <Link to="/">
          <div className={styles.headerTextLogo}>
            <img
              className={styles.headerLogo}
              src="/header-logo.png"
              alt="header logo"
            />
            <p>Nebula</p>
          </div>
        </Link>
        <Navbar />

        <HiOutlineShoppingCart className={styles.headerCart} />
      </div>
    </header>
  );
}

export default Header;
