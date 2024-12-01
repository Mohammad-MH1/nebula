import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/productsAPI";

export function useProducts() {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { isLoading, error, products };
}
