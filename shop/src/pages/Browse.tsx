import React from 'react';
import GameCard from '../components/gameCard/GameCard';
import GameGallery from '../components/gameGallery/GameGallery';
import aces from '../assets/aces.jpg';
import games from '../data/games';
import pageLayout from '../hocs/pageLayout';

type Props = Record<string, never>;

function Browse() {
  return (
    <>
      <GameGallery>
        {games.map((game, index) => (
          <GameCard index={index} {...game} key={game.id} />
        ))}
      </GameGallery>
      <img src={aces} alt="aces" id="aces" />
    </>
  );
}

export default pageLayout<Props>(Browse);
