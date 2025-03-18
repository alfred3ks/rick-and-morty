import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles['loading-container']}>
      <div className={styles['spinner']}></div>
      <p className={styles['paragraph']}>Cargando...</p>
    </div>
  );
};

export default Spinner;
