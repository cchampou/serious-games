import poker from '../assets/poker.jpg';
import monopoly from '../assets/monop.jpg';

const games: GameEntity[] = [
  {
    id: 1,
    name: 'Poker',
    price: 10,
    image: poker,
  },
  {
    id: 2,
    name: 'Monopoly',
    price: 20,
    image: monopoly,
  },
];

export default games;
