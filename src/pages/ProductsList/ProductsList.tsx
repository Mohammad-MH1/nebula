import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductsList.module.css";
import { useProducts } from "../../hooks/useProducts";

function ProductsList() {
  const { isLoading, error, products } = useProducts();

  return (
    <div className={styles.productGrid}>
      {products?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductsList;
