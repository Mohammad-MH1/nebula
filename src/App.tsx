import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./pages/Home/Home";
import AppLayout from "./components/AppLayout/AppLayout";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import About from "./pages/About/About";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ProductsList from "./pages/ProductsList/ProductsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductsList />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
