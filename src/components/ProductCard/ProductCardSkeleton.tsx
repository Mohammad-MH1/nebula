import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './ProductCard.module.css';

function ProductCardSkeleton() {
  return (
    <SkeletonTheme baseColor='#282f33' highlightColor='#2d3439'>
      <div className={styles.productCard}>
        <div>
          <Skeleton height={180} />
        </div>
        <div className={styles.productBody}>
          <h3 className={styles.productTitle}>
            <Skeleton width={`80%`} count={2} />
          </h3>
          <div className={styles.productContain}></div>
          <div className={styles.productPriceAndButton}>
            <p className={styles.productPrice}>
              <Skeleton width={60} />
            </p>
            <Skeleton width={100} height={25} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default ProductCardSkeleton;
