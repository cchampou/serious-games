import React from 'react';
import './styles.css';
import Pattern from '../pattern/Pattern';

type Props = {
  text: string;
};

function Lead({ text }: Props) {
  return (
    <div className="lead">
      <Pattern />
      <p>{text}</p>
    </div>
  );
}

export default Lead;
