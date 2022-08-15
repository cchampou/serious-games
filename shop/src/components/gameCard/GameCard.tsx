import React from 'react';
import Button from '../button/Button';
import './styles.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useNavigate } from 'react-router-dom';

type props = {
  index: number;
} & Pick<GameEntity, 'name' | 'image' | 'id'>;

function GameCard({ name, image, index, id }: props) {
  const navigate = useNavigate();

  const seeDetailsHandler = () => {
    navigate(`/game/${id}`);
  };

  return (
    <AnimationOnScroll animateIn="animate__zoomIn" delay={index * 100}>
      <section className="game-card">
        <img src={image} alt="Gamble game" />
        <h2>{name}</h2>
        <Button type="button" onClick={seeDetailsHandler}>
          See more...
        </Button>
        {/*<Button>Buy now</Button>*/}
      </section>
    </AnimationOnScroll>
  );
}

export default GameCard;
