import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
  Dispatch,
} from 'react';
import { useSearchParams } from 'react-router';

export type FiltersState = {
  search: string;
  category: string;
  sort: string;
  priceRange: [number, number];
};

type FiltersAction =
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'SET_CATEGORY'; payload: string }
  | { type: 'SET_SORT'; payload: string }
  | { type: 'SET_PRICE_RANGE'; payload: [number, number] };

const initialFiltersState: FiltersState = {
  search: '',
  category: '',
  sort: 'default',
  priceRange: [0, 1000],
};

function filtersReducer(
  state: FiltersState,
  action: FiltersAction
): FiltersState {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    case 'SET_CATEGORY':
      return { ...state, category: action.payload };
    case 'SET_SORT':
      return { ...state, sort: action.payload };
    case 'SET_PRICE_RANGE':
      return { ...state, priceRange: action.payload };
    default:
      return state;
  }
}

const FiltersContext = createContext<{
  state: FiltersState;
  dispatch: Dispatch<FiltersAction>;
} | null>(null);

function FiltersProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(filtersReducer, initialFiltersState);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params: {
      search?: string;
      category?: string;
      sort?: string;
      price_gte?: string;
      price_lte?: string;
    } = {};

    if (state.search) params.search = state.search;
    if (state.category && state.category !== 'all')
      params.category = state.category;
    if (state.sort && state.sort !== 'default') params.sort = state.sort;

    if (state.priceRange[0] > 0) params.price_gte = String(state.priceRange[0]);
    if (state.priceRange[1] < 1000)
      params.price_lte = String(state.priceRange[1]);

    setSearchParams(params);
  }, [state, setSearchParams]);

  useEffect(() => {
    const urlSearch = searchParams.get('search') || '';
    const urlCategory = searchParams.get('category') || '';
    const urlSort = searchParams.get('sort') || 'default';
    const urlPriceGte = searchParams.get('price_gte') || '0';
    const urlPriceLte = searchParams.get('price_lte') || '1000';

    dispatch({ type: 'SET_SEARCH', payload: urlSearch });
    dispatch({ type: 'SET_CATEGORY', payload: urlCategory });
    dispatch({ type: 'SET_SORT', payload: urlSort });
    dispatch({
      type: 'SET_PRICE_RANGE',
      payload: [Number(urlPriceGte), Number(urlPriceLte)],
    });
  }, [searchParams]);

  return (
    <FiltersContext.Provider value={{ state, dispatch }}>
      {children}
    </FiltersContext.Provider>
  );
}

export default FiltersProvider;

export const useFiltersContext = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error('useFiltersContext must be used within a FiltersProvider');
  }
  return context;
};
