import { BrowserRouter, Route, Routes } from 'react-router';

import Home from './pages/Home/Home';
import AppLayout from './components/AppLayout/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
