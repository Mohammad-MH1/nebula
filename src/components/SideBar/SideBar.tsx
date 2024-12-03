import styles from './SideBar.module.css';

function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <h2>Filters</h2>

      <h3>Search</h3>
      <input type='text' placeholder='Search products...' />

      <h3>Category</h3>
      <select>
        <option value='all'>All Categories</option>
        <option value='electronics'>Electronics</option>
        <option value='jewelery'>Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>

      <h3>Price Range</h3>
      <input className={styles.priceInput} type='range' min='0' max='1000' />
      <p className={styles.priceText}>Up to $1000</p>
    </aside>
  );
}

export default SideBar;
