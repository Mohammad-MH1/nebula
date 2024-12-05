import { useFiltersContext } from '../../contexts/FiltersContext';
import styles from './SideBar.module.css';

function SideBar() {
  const { state, dispatch } = useFiltersContext();

  return (
    <aside className={styles.sidebar}>
      <h2>Filters</h2>

      <h3>Search</h3>
      <input
        value={state.search}
        onChange={e =>
          dispatch({ type: 'SET_SEARCH', payload: e.target.value })
        }
        type='text'
        placeholder='Search products...'
      />

      <h3>Category</h3>
      <select
        value={state.category}
        onChange={e =>
          dispatch({ type: 'SET_CATEGORY', payload: e.target.value })
        }
      >
        <option value='all'>All Categories</option>
        <option value='electronics'>Electronics</option>
        <option value='jewelery'>Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>

      <h3>Price Range</h3>
      <div>
        <span className={styles.priceText}>min</span>
        <input
          type='number'
          min='0'
          max='1000'
          value={state.priceRange[0]}
          onChange={e =>
            dispatch({
              type: 'SET_PRICE_RANGE',
              payload: [Number(e.target.value), state.priceRange[1]],
            })
          }
        />
        <span className={styles.priceText}>max</span>
        <input
          type='number'
          min='0'
          max='1000'
          value={state.priceRange[1]}
          onChange={e =>
            dispatch({
              type: 'SET_PRICE_RANGE',
              payload: [state.priceRange[0], Number(e.target.value)],
            })
          }
        />
      </div>
      <p className={styles.priceText}>
        Price Range: ${state.priceRange[0]} - ${state.priceRange[1]}
      </p>
    </aside>
  );
}

export default SideBar;
