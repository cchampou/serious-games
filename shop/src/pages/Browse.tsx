import React from 'react';
import Header from '../components/header/Header';
import GameCard from '../components/gameCard/GameCard';
import GameGallery from '../components/gameGallery/GameGallery';
import aces from '../assets/aces.jpg';
import games from '../data/games';

function Browse() {
  return (
    <>
      <Header />
      <GameGallery>
        {games.map((game, index) => (
          <GameCard index={index} {...game} />
        ))}
      </GameGallery>
      <img src={aces} alt="aces" id="aces" />
    </>
  );
}

export default Browse;
