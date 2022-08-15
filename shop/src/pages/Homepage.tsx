import React from 'react';
import Jumbotron from '../components/jumbotron/Jumbotron';
import Lead from '../components/lead/Lead';
import Aside from '../components/aside/Aside';
import pageLayout from '../hocs/pageLayout';
import poker from '../assets/poker.jpg';

type Props = Record<string, never>;

const TITLE = 'Play the game';
const TEXT_CONTENT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

function Homepage() {
  return (
    <>
      <Jumbotron callToAction="/browse" />
      <Lead />
      <Aside title={TITLE} textContent={TEXT_CONTENT} image={poker} />
      <Aside title={TITLE} textContent={TEXT_CONTENT} image={poker} reverse />
    </>
  );
}

export default pageLayout<Props>(Homepage);
