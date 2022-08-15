import React from 'react';
import pageLayout from '../hocs/pageLayout';

type Props = Record<string, never>;

function Contact() {
  return <h1>Contact</h1>;
}

export default pageLayout<Props>(Contact);
