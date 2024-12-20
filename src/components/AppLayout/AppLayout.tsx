import { Outlet } from 'react-router';
import Header from '../Header/Header';

import styles from './AppLayout.module.css';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import CartModal from '../CartModal/CartModal';

function AppLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Outlet />
      </main>
      <CartModal />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default AppLayout;
