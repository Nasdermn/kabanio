import styles from './Slider.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SLIDES, NAMES } from '../../constants';

function Slider() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [activeNameIndex, setActiveNameIndex] = useState(5);

  const changeSlide = (direction: string) => {
    if (direction === 'up') {
      setActivePhotoIndex((prevIndex) => (prevIndex + 1) % SLIDES.length);
      setActiveNameIndex(
        (prevIndex) => (prevIndex - 1 + NAMES.length) % NAMES.length
      );
    } else if (direction === 'down') {
      setActivePhotoIndex(
        (prevIndex) => (prevIndex - 1 + SLIDES.length) % SLIDES.length
      );
      setActiveNameIndex((prevIndex) => (prevIndex + 1) % NAMES.length);
    }
  };

  return (
    <main className='body'>
      <h1 className='title'>Слайдер</h1>
      <p className='subtitle'>Атмосферные явления</p>
      <div className={styles.slider}>
        <div
          className={styles.slider__sidebar}
          style={{ transform: `translateY(-${activeNameIndex * 100}%)` }}
        >
          {NAMES.map((name, index) => (
            <div
              key={index}
              className={styles.slider__slide}
              style={{ background: name.background }}
            >
              <h2 className={styles.slider__slidetitle}>{name.title}</h2>
              <h3 className={styles.slider__slidesubtitle}>
                Atmospheric phenomena
              </h3>
            </div>
          ))}
        </div>
        <div
          className={styles.slider__mainslide}
          style={{ transform: `translateY(-${activePhotoIndex * 100}%)` }}
        >
          {SLIDES.map((slide, index) => (
            <div
              key={index}
              className={styles.slider__photo}
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            ></div>
          ))}
        </div>
        <div className={styles.slider__controls}>
          <button
            className={`${styles.slider__btn} ${styles.slider__btn_up}`}
            onClick={() => changeSlide('up')}
          ></button>
          <button
            className={`${styles.slider__btn} ${styles.slider__btn_down}`}
            onClick={() => changeSlide('down')}
          ></button>
        </div>
      </div>
      <Link to='/' className='backbtn'>
        Назад
      </Link>
    </main>
  );
}

export default Slider;
