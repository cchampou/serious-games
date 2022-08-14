import React from 'react';
import Header from '../components/header/Header';
import GameCard from '../components/gameCard/GameCard';
import GameGallery from '../components/gameGallery/GameGallery';
import aces from '../assets/aces.jpg';

const games = ['Aces', 'Monopoly', 'Risk', 'Roulette', 'Texas Holdem'];

function Browse() {
  return (
    <>
      <Header />
      <GameGallery>
        {games.map((name, index) => (
          <GameCard name={name} index={index} />
        ))}
      </GameGallery>
      <img src={aces} alt="aces" id="aces" />
    </>
  );
}

export default Browse;
