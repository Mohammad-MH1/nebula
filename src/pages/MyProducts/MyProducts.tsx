import { Link } from 'react-router';
import { useMyProductsContext } from '../../contexts/MyProductsContext';
import styles from '../../components/ProductCard/ProductCard.module.css';
import stylesTwo from './MyProducts.module.css';

function MyProducts() {
  const { products, deleteProduct } = useMyProductsContext();

  return (
    <div className={stylesTwo.container}>
      <h1 className={stylesTwo.heading}>My Products</h1>
      {products.length === 0 ? (
        <div className={stylesTwo.notFound}>
          <p className={stylesTwo.emptyMessage}>
            You have not added any products yet.
          </p>
          <Link to='/products/form'>Create Product</Link>
        </div>
      ) : (
        <div className={stylesTwo.grid}>
          {products.map(product => (
            <div key={product.id} className={styles.productCard}>
              <img
                src={product.image as string}
                alt={product.title}
                className={styles.productImage}
              />
              <div className={stylesTwo.details}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <div className={styles.productContain}>
                  <p className={stylesTwo.price}>${product.price.toFixed(2)}</p>
                  <p className={styles.productCategory}>{product.category}</p>
                </div>
                <div className={stylesTwo.actions}>
                  <Link
                    to={`/products/form/${product.id}`}
                    className={stylesTwo.editButton}
                  >
                    Edit
                  </Link>
                  <button
                    className={stylesTwo.deleteButton}
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyProducts;
