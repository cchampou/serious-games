import React from 'react';
import Header from '../components/header/Header';
import GameCard from '../components/gameCard/GameCard';
import GameGallery from '../components/gameGallery/GameGallery';
import aces from '../assets/aces.jpg';

function Browse() {
  return (
    <>
      <Header />
      <GameGallery>
        <GameCard name="Monopoly" />
        <GameCard name="Poker" />
        <GameCard name="Ninja" />
        <GameCard name="Uno" />
      </GameGallery>
      <img src={aces} alt="aces" id="aces" />
    </>
  );
}

export default Browse;
