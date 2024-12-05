import { Link } from 'react-router';
import styles from './PageNotFound.module.css';

function PageNotFound() {
  return (
    <div className={styles.container}>
      <img src='/notFound.png' alt='404 Not Found' className={styles.image} />
      <h1 className={styles.heading}>Oops! Page Not Found</h1>
      <p className={styles.description}>
        The page you’re looking for doesn’t exist.
      </p>
      <Link to='/' className={styles.homeLink}>
        Go Back Home
      </Link>
    </div>
  );
}

export default PageNotFound;
