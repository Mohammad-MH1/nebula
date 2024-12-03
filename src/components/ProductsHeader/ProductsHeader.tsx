import styles from './ProductsHeader.module.css';

function ProductsHeader() {
  return (
    <div className={styles.productsHeader}>
      <p>X number of products</p>
      <select>
        <option value=''>Sort by Default</option>
        <option value=''></option>
        <option value=''></option>
        <option value=''> </option>
        <option value=''></option>
      </select>
    </div>
  );
}

export default ProductsHeader;
