import { Outlet } from 'react-router';
import Header from '../Header/Header';
import { useState } from 'react';

import styles from './AppLayout.module.css';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import CartModal from '../CartModal/CartModal';

function AppLayout() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Outlet />
      </main>
      {isModalOpen && <CartModal onIsModalOpen={setIsModalOpen} />}
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default AppLayout;
