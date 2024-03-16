import { Link } from 'react-router-dom';
import styles from './Main.module.scss';
import cardchanger from '../../images/previews/cardchanger.png';
import slider from '../../images/previews/slider.png';
import rainboard from '../../images/previews/rainboard.png';
import minigame from '../../images/previews/minigame.png';

function Main() {
  return (
    <main className='body'>
      <div className={styles.main}>
        <h1 className={styles.main__title}>Kabanio 🐖</h1>
        <p className={styles.main__description}>
          Данный проект включает в себя 4 работы. Работы изначально были взяты
          из пятидневного марафона по JavaScript от IT-школы "Result School".
          Мною они были перенесены на синтаксис TSX и значительно улучшены:
          добавлена адаптивность, изменены стили, доработана и изменена логика
          работы некоторых компонентов. К примеру, из доски с остающимся следом
          была сделана полноценная доска для рисования.
        </p>
        <div className={styles.main__cards}>
          <Link to='/cardchanger' className={styles.main__card}>
            <img
              src={cardchanger}
              className={styles.main__photo}
              alt='cardchanger'
            ></img>
            <h2 className={styles.main__phototitle}>Cardchanger</h2>
          </Link>
          <Link to='/slider' className={styles.main__card}>
            <img src={slider} className={styles.main__photo} alt='slider'></img>
            <h2 className={styles.main__phototitle}>Slider</h2>
          </Link>
          <Link to='/rainboard' className={styles.main__card}>
            <img
              src={rainboard}
              className={styles.main__photo}
              alt='rainboard'
            ></img>
            <h2 className={styles.main__phototitle}>Rainboard</h2>
          </Link>
          <Link to='/minigame' className={styles.main__card}>
            <img
              src={minigame}
              className={styles.main__photo}
              alt='minigame'
            ></img>
            <h2 className={styles.main__phototitle}>Minigame</h2>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Main;
