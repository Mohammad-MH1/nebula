import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../services/productsAPI';

export function useProduct(id: string | undefined) {
  const {
    isLoading,
    data: product,
    error,
  } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProduct(id),
  });

  return { isLoading, error, product };
}
