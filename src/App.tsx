import { BrowserRouter, Route, Routes } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Home from './pages/Home/Home';
import AppLayout from './components/AppLayout/AppLayout';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductsList from './pages/ProductsList/ProductsList';
import FiltersProvider from './contexts/FiltersContext';
import CartProvider from './contexts/CartContext';
import MyProductsProvider from './contexts/MyProductsContext';
import ProductForm from './pages/ProductForm/ProductForm';
import MyProducts from './pages/MyProducts/MyProducts';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <FiltersProvider>
          <CartProvider>
            <MyProductsProvider>
              <Routes>
                <Route path='/' element={<AppLayout />}>
                  <Route index element={<Home />} />
                  <Route path='products' element={<ProductsList />} />
                  <Route path='products/:id' element={<ProductDetail />} />
                  <Route path='/form' element={<ProductForm mode='create' />} />
                  <Route
                    path='/form/:id'
                    element={<ProductForm mode='edit' />}
                  />
                  <Route path='/my-products' element={<MyProducts />} />
                  <Route path='*' element={<PageNotFound />} />
                </Route>
              </Routes>
            </MyProductsProvider>
          </CartProvider>
        </FiltersProvider>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
