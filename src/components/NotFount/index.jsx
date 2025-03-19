import { Link } from 'react-router';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.subtitle}>Page not found</p>
      <p className={styles.text}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className={styles.button}>
        Back to top
      </Link>
    </div>
  );
};

export default NotFound;
