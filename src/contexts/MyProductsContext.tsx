import { createContext, ReactNode, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image: File | string | undefined;
}

const MyProductsContext = createContext<{
  products: Product[];
  addProduct: (product: Product) => void;
  editProduct: (id: string, updatedProduct: Product) => void;
  deleteProduct: (id: string) => void;
}>({
  products: [],
  addProduct: () => {},
  editProduct: () => {},
  deleteProduct: () => {},
});

function MyProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useLocalStorage<Product[]>([], 'my-products');

  const addProduct = (product: Product) => {
    setProducts(prev => [...prev, product]);
  };

  const editProduct = (id: string, updatedProduct: Product) => {
    setProducts(prev =>
      prev.map(product => (product.id === id ? updatedProduct : product))
    );
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  return (
    <MyProductsContext.Provider
      value={{ products, addProduct, editProduct, deleteProduct }}
    >
      {children}
    </MyProductsContext.Provider>
  );
}

export default MyProductsProvider;

export const useMyProductsContext = () => {
  const context = useContext(MyProductsContext);
  if (!context) {
    throw new Error(
      'useMyProductsContext must be used within a MyProductsProvider'
    );
  }
  return context;
};
