import React from 'react';
import pageLayout from '../hocs/pageLayout';

type Props = Record<string, never>;

function GameDetails() {
  return <h1>Game Details</h1>;
}

export default pageLayout<Props>(GameDetails);
