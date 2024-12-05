import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import styles from './ProductsDetail.module.css';

function ProductDetailSkeleton() {
  return (
    <SkeletonTheme baseColor='#282f33' highlightColor='#2d3439'>
      <section className={styles.productDetail}>
        <div>
          <Skeleton height={400} width={400} />
        </div>

        <div className={styles.infoSection}>
          <Skeleton height={40} width={200} />
          <Skeleton height={20} width={150} style={{ marginTop: '1rem' }} />
          <Skeleton height={30} width={100} style={{ marginTop: '1rem' }} />
          <Skeleton height={20} width={180} style={{ marginTop: '1rem' }} />
          <Skeleton
            count={3}
            height={20}
            width={'100%'}
            style={{ marginTop: '1rem' }}
          />
        </div>
      </section>
    </SkeletonTheme>
  );
}

export default ProductDetailSkeleton;
