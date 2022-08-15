import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import chess from '../../assets/chess-white-background.jpg';

import './styles.css';

function Aside() {
  return (
    <div className="aside">
      <AnimationOnScroll animateIn="animate__fadeInLeft">
        <img src={chess} alt="Chess" />
      </AnimationOnScroll>
      <section>
        <h2>
          Play with your
          <br />
          <strong>friends</strong>
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </section>
    </div>
  );
}

export default Aside;
