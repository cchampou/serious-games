import React from 'react';
import Button from '../button/Button';
import gamble from '../../assets/monop.jpg';
import './styles.css';

type props = {
  name: string;
};

function GameCard({ name }: props) {
  return (
    <section className="game-card">
      <img src={gamble} alt="Gamble game" />
      <h2>{name}</h2>
      <Button>See more...</Button>
      <Button>Buy now</Button>
    </section>
  );
}

export default GameCard;
