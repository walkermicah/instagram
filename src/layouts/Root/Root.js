import { Outlet } from 'react-router-dom';
import styles from './Root.module.scss';

const Root = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
};

export default Root;
