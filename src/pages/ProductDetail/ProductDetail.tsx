import { useNavigate, useParams } from 'react-router';

import styles from './ProductsDetail.module.css';
import { useProduct } from '../../hooks/useProduct';
import { HiArrowLeft, HiStar } from 'react-icons/hi2';
import ProductDetailSkeleton from './ProductDetailSkeleton';

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { product, isLoading } = useProduct(id);
  const navigate = useNavigate();

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
        <div>
          <h1 className={styles.title}>{product?.title}</h1>
          <p className={styles.category}>{product?.category}</p>
        </div>
        <div>
          <p className={styles.price}>Price: ${product?.price}</p>
          <p className={styles.rating}>
            Rating: <HiStar />
            {product?.rating.rate} ({product?.rating.count} reviews)
          </p>
        </div>
        <p className={styles.description}>{product?.description}</p>
        <button onClick={() => navigate(-2)}>
          <HiArrowLeft />
          Go Back
        </button>
      </div>
    </section>
  );
}

export default ProductDetail;
