import React from 'react';
import Jumbotron from '../components/jumbotron/Jumbotron';
import Header from '../components/header/Header';
import Lead from '../components/lead/Lead';

function Homepage() {
  return (
    <>
      <Header />
      <Jumbotron callToAction="/browse" />
      <Lead />
    </>
  );
}

export default Homepage;
