import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import chess from '../../assets/poker.jpg';

import './styles.css';
import classNames from 'classnames';

type Props = {
  title: string;
  image: string;
  textContent: string;
  reverse?: boolean;
};

function Aside({ title, textContent, image, reverse = false }: Props) {
  return (
    <div className={classNames('aside', { 'aside-reverse': reverse })}>
      <AnimationOnScroll
        animateIn={reverse ? 'animate__fadeInRight' : 'animate__fadeInLeft'}
      >
        <img src={image} alt={title} />
      </AnimationOnScroll>
      <section>
        <h2>{title}</h2>
        <p>{textContent}</p>
      </section>
    </div>
  );
}

export default Aside;
