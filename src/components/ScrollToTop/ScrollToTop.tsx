import { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.css';
import { HiMiniArrowSmallUp } from 'react-icons/hi2';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} className={styles.scrollToTop}>
          <HiMiniArrowSmallUp />
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;
