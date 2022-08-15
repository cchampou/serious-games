import React, { ComponentType } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function pageLayout<T>(Component: ComponentType) {
  return function PageLayout(props: T) {
    return (
      <>
        <Header />
        <Component {...props} />
        <Footer />
      </>
    );
  };
}

export default pageLayout;
