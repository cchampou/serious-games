import React, { ComponentType, useEffect } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import '../styles/page-layout.css';
import { useLocation } from 'react-router-dom';

function pageLayout<T>(Component: ComponentType) {
  return function PageLayout(props: T) {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

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
