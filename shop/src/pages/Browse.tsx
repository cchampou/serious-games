import React from 'react';
import GameCard from '../components/gameCard/GameCard';
import GameGallery from '../components/gameGallery/GameGallery';
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
    </>
  );
}

export default pageLayout<Props>(Browse);
