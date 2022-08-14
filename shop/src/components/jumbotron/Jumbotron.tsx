import React from 'react';
import './styles.css';
import boardGame from '../../assets/monop.jpg';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';

type props = {
  callToAction: string;
};

function Jumbotron({ callToAction }: props) {
  const navigate = useNavigate();

  const callToActionHandler = () => {
    navigate(callToAction);
  };

  return (
    <div className="jumbotron">
      <div>
        <h1>
          The best solution for an interactive and inspiring learning
          experience.
        </h1>
        <Button onClick={callToActionHandler} type="button">
          Buy now
        </Button>
      </div>
      <div>
        <img src={boardGame} alt="chess" />
        <div />
      </div>
    </div>
  );
}

export default Jumbotron;
