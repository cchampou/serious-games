import poker from '../assets/poker.jpg';
import monopoly from '../assets/monop.jpg';

const games: GameEntity[] = [
  {
    id: 1,
    image: poker,
    name: 'Poker',
    price: 10,
    description:
      'Poker is a card game in which players use a deck of playing cards to try to get the best hand possible. The goal is to get the highest hand possible without going over 21.',
  },
  {
    id: 2,
    image: monopoly,
    name: 'Monopoly',
    price: 20,
    description:
      'Monopoly is a board game in which players compete to build and maintain a monopoly on a board of squares. The goal is to be the first player to build a monopoly on every square.',
  },
];

export default games;
