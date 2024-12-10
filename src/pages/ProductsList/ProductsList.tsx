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

  if (error)
    return (
      <div className={styles.error}>
        <img src='/error.png' alt='error' />
        <p>{error.message}</p>
      </div>
    );
  return (
    <section className={styles.container}>
      <SideBar />
      <div>
        {isLoading ? (
          <div className={styles.productGrid}>
            {Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <>
            {filteredProducts?.length !== 0 ? (
              <>
                <ProductsHeader filteredProducts={filteredProducts} />
                <div className={styles.productGrid}>
                  {filteredProducts?.map(product => (
                    <ProductCard product={product} key={product.id} />
                  ))}
                </div>
              </>
            ) : (
              <div className={styles.textContainer}>
                <img src='/noproductfound.png' alt='no products found' />
                <p>No Products found. Change your filters !</p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default ProductsList;
