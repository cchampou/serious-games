import React from 'react';
import jokers from '../../assets/jokers.png';
import './styles.css';

type Props = {
  text: string;
};

function Lead({ text }: Props) {
  return (
    <div className="lead">
      <p>{text}</p>
      <img src={jokers} alt="jokers" />
    </div>
  );
}

export default Lead;
