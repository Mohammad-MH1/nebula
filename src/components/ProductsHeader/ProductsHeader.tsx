import { useFiltersContext } from '../../contexts/FiltersContext';
import { Product } from '../../services/productsAPI';
import styles from './ProductsHeader.module.css';

function ProductsHeader({
  filteredProducts,
}: {
  filteredProducts: Product[] | undefined;
}) {
  const { state, dispatch } = useFiltersContext();
  return (
    <div className={styles.productsHeader}>
      <p>{filteredProducts?.length} number of products</p>
      <select
        value={state.category}
        onChange={e => dispatch({ type: 'SET_SORT', payload: e.target.value })}
      >
        <option value='default'>Sort by Default</option>
        <option value='asc'>Lowest Price</option>
        <option value='desc'>Highest Price</option>
        <option value='rateAsc'>Lowest rating</option>
        <option value='rateDesc'>Highest rating</option>
      </select>
    </div>
  );
}

export default ProductsHeader;
