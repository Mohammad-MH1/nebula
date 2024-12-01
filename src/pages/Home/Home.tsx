import { Link } from "react-router";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <h1>Nebula shop</h1>
      <p>Unleash Your Inner Star with Our Collection </p>
      <p>Shop Now and Let Your Style Shine!</p>
      <Link to="/products">Start Exploring</Link>
    </div>
  );
}

export default Home;
