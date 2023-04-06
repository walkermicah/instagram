import { Outlet } from 'react-router-dom';
import styles from './RootLayout.module.scss';

const RootLayout = () => {
  return (
    <main className={styles.container}>
      <Outlet />
    </main>
  );
};

export default RootLayout;
