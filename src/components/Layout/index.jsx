import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router';

import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles['layout']}>
      <Header />
      <main className={styles['content']}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
