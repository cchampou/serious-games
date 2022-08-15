import poker from '../assets/poker.jpg';
import monopoly from '../assets/monop.jpg';

const games: GameEntity[] = [
  {
    id: 1,
    image: poker,
    name: 'Poker',
    price: 10,
  },
  {
    id: 2,
    image: monopoly,
    name: 'Monopoly',
    price: 20,
  },
];

export default games;
