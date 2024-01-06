import styles from './Minigame.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { COLORS } from '../../constants';

function Minigame() {
  const boardElement = document.getElementById('board');
  const [activeScreen, setActiveScreen] = useState(1);
  const [time, setTime] = useState(0);
  const [score, setScore] = useState(0);
  const [isResultVisible, setResultVisible] = useState(false);

  const handleChangeScreen = (screen: number) => {
    setActiveScreen(screen);
  };

  const getRandomNumber = (min: number, max: number) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  const startGame = (initialTime: number) => {
    setResultVisible(false);
    setTime(initialTime);
    setScore(0);

    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        const newTime = Math.max(0, prevTime - 1);

        if (newTime === 0) {
          clearInterval(intervalId);
          finishGame();
        }

        return newTime;
      });
    }, 1000);
    createRandomCircle();
  };

  const handleCircleClick = (event) => {
    const clickedCircle = event.target;
    setScore((prevScore) => prevScore + 1);
    clickedCircle.remove(); // Удаляем круг при клике
    createRandomCircle(); // Создаем новый круг после удаления
  };

  const clearBoard = () => {
    const boardElement = document.getElementById('board');
    if (boardElement) {
      boardElement.innerHTML = ''; // Очистка содержимого доски
    } else {
      console.log('Доска не найдена.');
    }
  };

  const finishGame = () => {
    setResultVisible(true);
    clearBoard();
  };

  const createRandomCircle = () => {
    // Генерация координат для нового круга
    const size = getRandomNumber(5, 15);
    const x = getRandomNumber(10, 90);
    const y = getRandomNumber(10, 90);
    const randomColor = COLORS[getRandomNumber(0, COLORS.length - 1)];

    const circleElement = document.createElement('div');
    circleElement.className = styles.circle;
    circleElement.style.width = `${size}px`;
    circleElement.style.height = `${size}px`;
    circleElement.style.top = `${y}%`;
    circleElement.style.left = `${x}%`;
    circleElement.style.backgroundColor = randomColor;
    circleElement.addEventListener('click', handleCircleClick);

    if (boardElement) {
      boardElement.appendChild(circleElement);
    } else {
      console.log('Доска не найдена.');
    }
  };

  return (
    <main className='body'>
      <h1 className='title'>Minigame</h1>
      <p className='subtitle'>Игра для тренировки аима</p>
      <div className={styles.minigame}>
        <div
          className={`${styles.minigame__screen} ${
            activeScreen !== 1 && styles.hidden
          }`}
        >
          <h2 className={styles.minigame__title}>Aim Training</h2>
          <a
            href='#'
            className={styles.minigame__start}
            id='start'
            onClick={() => handleChangeScreen(2)}
          >
            Начать игру
          </a>
        </div>

        <div
          className={`${styles.minigame__screen} ${
            activeScreen !== 2 && styles.hidden
          }`}
        >
          <h2 className={styles.minigame__title}>Выберите время</h2>
          <ul className={styles.minigame__timelist} id='timelist'>
            <li>
              <button
                className={styles.minigame__button}
                onClick={() => {
                  handleChangeScreen(3);
                  startGame(10);
                }}
              >
                10 сек
              </button>
            </li>
            <li>
              <button
                className={styles.minigame__button}
                onClick={() => {
                  handleChangeScreen(3);
                  startGame(20);
                }}
              >
                20 сек
              </button>
            </li>
            <li>
              <button
                className={styles.minigame__button}
                onClick={() => {
                  handleChangeScreen(3);
                  startGame(30);
                }}
              >
                30 сек
              </button>
            </li>
            <li>
              <button
                className={styles.minigame__button}
                onClick={() => {
                  handleChangeScreen(3);
                  startGame(60);
                }}
              >
                60 сек
              </button>
            </li>
          </ul>
        </div>

        <div
          className={`${styles.minigame__screen} ${
            activeScreen !== 3 && styles.hidden
          }`}
        >
          <h3
            className={`${styles.minigame__time} ${
              isResultVisible && styles.hidden
            }`}
          >
            Осталось <span id='time'>{time}</span> сек
          </h3>
          <div
            className={`${styles.minigame__board} ${
              isResultVisible && styles.hidden
            }`}
            id='board'
          ></div>
          <div
            className={`${styles.minigame__result} ${
              !isResultVisible && styles.hidden
            }`}
          >
            <h3 className={styles.minigame__title}>Счёт: {score}</h3>
            <button
              className={styles.minigame__button}
              onClick={() => handleChangeScreen(1)}
            >
              Назад
            </button>
          </div>
        </div>
      </div>
      <Link to='/' className='backbtn'>
        Назад
      </Link>
    </main>
  );
}

export default Minigame;
