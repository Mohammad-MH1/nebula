import { useFiltersContext } from '../../contexts/FiltersContext';
import styles from './ProductsHeader.module.css';

function ProductsHeader() {
  const { state, dispatch } = useFiltersContext();
  return (
    <div className={styles.productsHeader}>
      <p>X number of products</p>
      <select
        value={state.category}
        onChange={e => dispatch({ type: 'SET_SORT', payload: e.target.value })}
      >
        <option value='default'>Sort by Default</option>
        <option value='asc'>Lowest Price</option>
        <option value='desc'>Highest Price</option>
      </select>
    </div>
  );
}

export default ProductsHeader;
