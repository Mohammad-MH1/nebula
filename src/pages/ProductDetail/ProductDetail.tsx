import { useParams } from 'react-router';

import styles from './ProductsDetail.module.css';
import { useProduct } from '../../hooks/useProduct';
import { HiStar } from 'react-icons/hi2';
import ProductDetailSkeleton from './ProductDetailSkeleton';

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { product, isLoading } = useProduct(id);

  if (isLoading) return <ProductDetailSkeleton />;

  return (
    <section className={styles.productDetail}>
      <div className={styles.imageSection}>
        <img
          src={product?.image}
          alt={product?.title}
          className={styles.productImage}
        />
      </div>

      <div className={styles.infoSection}>
        <h1 className={styles.title}>{product?.title}</h1>
        <p className={styles.category}>{product?.category}</p>
        <p className={styles.price}>Price: ${product?.price}</p>
        <p className={styles.rating}>
          Rating: <HiStar />
          {product?.rating.rate} ({product?.rating.count} reviews)
        </p>
        <p className={styles.description}>{product?.description}</p>
      </div>
    </section>
  );
}

export default ProductDetail;
