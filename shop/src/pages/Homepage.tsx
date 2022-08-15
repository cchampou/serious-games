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
const LEAD_TEXT = `Want to get your organization ready for the future? Want to strengthen
  your team and get them to make better choices? Also, that employees can
  experiment in a safe environment, learn from each other or experience the
  impact of their own choices? Serious games can achieve unprecedented
  results in all these scenarios.`;

function Homepage() {
  return (
    <>
      <Jumbotron callToAction="/browse" />
      <Lead text={LEAD_TEXT} />
      <Aside title={TITLE} textContent={TEXT_CONTENT} image={poker} />
      <Aside title={TITLE} textContent={TEXT_CONTENT} image={poker} reverse />
    </>
  );
}

export default pageLayout<Props>(Homepage);
