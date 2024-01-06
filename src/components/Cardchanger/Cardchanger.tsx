import styles from './Cardchanger.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CARDS } from '../../constants';

function Cardchanger() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveCard(index);
  };

  return (
    <main className='body'>
      <h1 className='title'>Cardchanger</h1>
      <p className='subtitle'>Топ-5 самых опасных животных на планете</p>
      <div className={styles.cardchanger}>
        {CARDS.map((card, index) => (
          <div
            key={index}
            className={`${styles.cardchanger__card} ${
              activeCard === index ? styles.cardchanger__card_active : ''
            }`}
            style={{ backgroundImage: `url(${card.imageUrl})` }}
            onClick={() => handleCardClick(index)}
          >
            <h3
              className={`${styles.cardchanger__cardtitle} ${
                activeCard === index ? styles.cardchanger__cardtitle_active : ''
              }`}
            >
              {card.title}
            </h3>
          </div>
        ))}
      </div>
      <Link to='/' className='backbtn'>
        Назад
      </Link>
    </main>
  );
}

export default Cardchanger;
