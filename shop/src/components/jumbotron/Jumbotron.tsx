import React from 'react';
import './styles.css';
import Button from '../button/Button';
import card from '../../assets/card.png';
import { useNavigate } from 'react-router-dom';
import Pattern from '../pattern/Pattern';

type props = {
  callToActionPath: string;
  callToActionText: string;
  title: string | JSX.Element;
};

function Jumbotron({ callToActionPath, callToActionText, title }: props) {
  const navigate = useNavigate();

  const callToActionHandler = () => {
    navigate(callToActionPath);
  };

  return (
    <div className="jumbotron">
      <div>
        <h1>{title}</h1>
        <Button onClick={callToActionHandler} type="button">
          {callToActionText}
        </Button>
      </div>
      <div>
        <img src={card} alt="card" />
        <img src={card} alt="card" />
      </div>
    </div>
  );
}

export default Jumbotron;
