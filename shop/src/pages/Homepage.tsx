import React from 'react';
import Jumbotron from '../components/jumbotron/Jumbotron';
import Lead from '../components/lead/Lead';
import Aside from '../components/aside/Aside';
import pageLayout from '../hocs/pageLayout';

type Props = Record<string, never>;

function Homepage() {
  return (
    <>
      <Jumbotron callToAction="/browse" />
      <Lead />
      <Aside />
    </>
  );
}

export default pageLayout<Props>(Homepage);
