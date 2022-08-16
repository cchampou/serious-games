import React, { useEffect } from 'react';
import pageLayout from '../hocs/pageLayout';
import { useParams } from 'react-router-dom';
import games from '../data/games';

type Props = Record<string, never>;

function GameDetails() {
  const { gameId } = useParams();
  const [game, setGame] = React.useState<GameEntity>();

  const fetchGame = async () => {
    if (!gameId) throw new Error('No gameId');

    setGame(games.find((game) => game.id === parseInt(gameId)));
  };

  useEffect(() => {
    void fetchGame();
  }, []);

  if (!game) return null;

  return (
    <>
      <h1>{game.name}</h1>
      <img src={game.image} alt={game.name} width="200px" />
      <p>{game.description}</p>
    </>
  );
}

export default pageLayout<Props>(GameDetails);
