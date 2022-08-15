import React from 'react';
import Aside from '../components/aside/Aside';
import poker from '../assets/poker.jpg';

export default {
  title: 'Aside',
  component: Aside,
};

const TITLE = 'Play the game';
const TEXT_CONTENT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const Default = () => (
  <Aside title={TITLE} textContent={TEXT_CONTENT} image={poker} />
);
