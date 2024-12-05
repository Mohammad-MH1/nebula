import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './ProductsList.module.css';
import { useProducts } from '../../hooks/useProducts';
import SideBar from '../../components/SideBar/SideBar';
import ProductCardSkeleton from '../../components/ProductCard/ProductCardSkeleton';
import ProductsHeader from '../../components/ProductsHeader/ProductsHeader';
import { useFiltersContext } from '../../contexts/FiltersContext';
import { filterProducts } from '../../utils/filterProducts';

function ProductsList() {
  const { isLoading, error, products } = useProducts();
  const { state } = useFiltersContext();

  const filteredProducts = products && filterProducts(products, state);

  return (
    <section className={styles.container}>
      <SideBar />

      <div>
        <ProductsHeader />
        <div className={styles.productGrid}>
          {isLoading &&
            Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          {filteredProducts?.map(product => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsList;
