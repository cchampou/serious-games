import React from 'react';
import Header from '../components/header/Header';
import GameCard from '../components/gameCard/GameCard';
import GameGallery from '../components/gameGallery/GameGallery';

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
    </>
  );
}

export default Browse;
