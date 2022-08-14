import React from 'react';
import Jumbotron from '../components/jumbotron/Jumbotron';
import Header from '../components/header/Header';
import Lead from '../components/lead/Lead';
// import section from '../assets/sample-section.png';

function Homepage() {
  return (
    <>
      <Header />
      <Jumbotron callToAction="/browse" />
      <Lead />
      {/*<img src={section} alt="sample section" />*/}
    </>
  );
}

export default Homepage;
