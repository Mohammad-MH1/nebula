import { Product } from '../services/productsAPI';
import { FiltersState } from '../contexts/FiltersContext';

export function filterProducts(
  products: Product[] | undefined,
  state: FiltersState
) {
  const filteredProducts = products?.filter(product => {
    if (
      state.search &&
      !product.title.toLowerCase().includes(state.search.toLowerCase())
    )
      return false;

    if (
      state.category &&
      state.category !== 'all' &&
      product.category !== state.category
    )
      return false;

    if (
      product.price < state.priceRange[0] ||
      product.price > state.priceRange[1]
    )
      return false;

    return true;
  });

  if (state.sort === 'asc') {
    return filteredProducts?.sort((a, b) => a.price - b.price);
  }
  if (state.sort === 'desc') {
    return filteredProducts?.sort((a, b) => b.price - a.price);
  }
  if (state.sort === 'rateAsc') {
    return filteredProducts?.sort((a, b) => a.rating.rate - b.rating.rate);
  }
  if (state.sort === 'rateDesc') {
    return filteredProducts?.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  return filteredProducts;
}
