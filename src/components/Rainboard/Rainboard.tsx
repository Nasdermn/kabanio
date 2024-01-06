import styles from './Rainboard.module.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ColorResult, SketchPicker } from 'react-color';
import _debounce from 'lodash/debounce';

function Rainboard() {
  const [squaresQuantity, setSquaresQuantity] = useState(4116);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState('#92c721');

  const handleChangeColor = (color: ColorResult) => {
    setCurrentColor(color.hex);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDrawing(true);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleMouseOver = (index: number) => {
    const squares = document.querySelectorAll(`.${styles.rainboard__square}`);
    const square = squares[index] as HTMLDivElement;
    square.style.boxShadow = `0 0 5px 1px ${currentColor}`;
  };

  const handleMouseOut = (index: number) => {
    const squares = document.querySelectorAll(`.${styles.rainboard__square}`);
    const square = squares[index] as HTMLDivElement;
    square.style.boxShadow = ``;
  };

  const handleMouseMove = (index: number) => {
    if (isDrawing) {
      const squares = document.querySelectorAll(`.${styles.rainboard__square}`);
      const square = squares[index] as HTMLDivElement;
      square.style.backgroundColor = currentColor;
    }
  };

  const handleClearBoard = () => {
    const squares = document.querySelectorAll(`.${styles.rainboard__square}`);
    squares.forEach((square) => {
      (square as HTMLDivElement).style.backgroundColor = '#1d1d1d';
    });
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width > 1920) {
        setSquaresQuantity(4116);
      } else if (width <= 1920 && width > 1440) {
        setSquaresQuantity(3380);
      } else if (width <= 1440 && width > 768) {
        setSquaresQuantity(1978);
      } else {
        setSquaresQuantity(1700);
      }
    }

    const debouncedHandleResize = _debounce(handleResize, 200);

    // Добавляем обработчик события изменения размера окна
    window.addEventListener('resize', debouncedHandleResize);

    // Вызываем функцию handleResize при старте компонента
    handleResize();

    // Убираем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  return (
    <main className='body'>
      <h1 className='title'>Rainboard</h1>
      <p className='subtitle'>Доска для рисования</p>
      <div className={styles.rainboard}>
        {Array.from({ length: squaresQuantity }).map((_, index) => (
          <div
            key={index}
            className={styles.rainboard__square}
            onMouseDown={handleMouseDown}
            onMouseMove={() => handleMouseMove(index)}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={() => handleMouseOut(index)}
          />
        ))}
      </div>
      <button className={styles.rainboard__button} onClick={handleClearBoard}>
        Очистить
      </button>
      <SketchPicker
        color={currentColor}
        onChangeComplete={handleChangeColor}
        styles={{
          default: {
            picker: {
              width: '30vw',
              maxWidth: '300px',
              height: 'auto',
              backgroundColor: '#1d1d1d',
              border: '6px double #99be12',
              overflow: 'auto',
            },
          },
        }}
      />
      <Link to='/' className='backbtn'>
        Назад
      </Link>
    </main>
  );
}

export default Rainboard;
