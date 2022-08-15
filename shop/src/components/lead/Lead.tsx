import React from 'react';
import './styles.css';

type Props = {
  text: string;
};

function Lead({ text }: Props) {
  return <p className="lead">{text}</p>;
}

export default Lead;
