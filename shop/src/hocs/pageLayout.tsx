import React, { ComponentType } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import '../styles/page-layout.css';

function pageLayout<T>(Component: ComponentType) {
  return function PageLayout(props: T) {
    return (
      <>
        <Header />
        <div id="page-content">
          <Component {...props} />
        </div>
        <Footer />
      </>
    );
  };
}

export default pageLayout;
