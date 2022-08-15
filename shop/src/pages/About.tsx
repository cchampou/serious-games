import React from 'react';
import pageLayout from '../hocs/pageLayout';

type Props = Record<string, never>;

function About() {
  return <h1>About</h1>;
}

export default pageLayout<Props>(About);
