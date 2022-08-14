import React from 'react';
import Button from '../button/Button';
import gamble from '../../assets/monop.jpg';
import './styles.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

type props = {
  name: string;
  index: number;
};

function GameCard({ name, index }: props) {
  return (
    <AnimationOnScroll animateIn="animate__zoomIn" delay={index * 100}>
      <section className="game-card">
        <img src={gamble} alt="Gamble game" />
        <h2>{name}</h2>
        <Button>See more...</Button>
        <Button>Buy now</Button>
      </section>
    </AnimationOnScroll>
  );
}

export default GameCard;
