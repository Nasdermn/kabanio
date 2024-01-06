import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

function NotFound() {
  return (
    <div className={styles.not_found}>
      <h1 className={styles.not_found__title}>Страница не найдена</h1>
      <p className={styles.not_found__subtitle}>
        Вы перешли по адресу, который не предусмотрен на данном сайте.
      </p>
      <Link to='/' className={styles.not_found__link}>
        На главную страницу
      </Link>
    </div>
  );
}

export default NotFound;
