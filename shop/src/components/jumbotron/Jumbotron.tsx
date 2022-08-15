import React from 'react';
import './styles.css';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';

type props = {
  callToActionPath: string;
  callToActionText: string;
  title: string | JSX.Element;
  image: string;
};

function Jumbotron({
  callToActionPath,
  callToActionText,
  title,
  image,
}: props) {
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
        <img src={image} alt="chess" />
        <div />
      </div>
    </div>
  );
}

export default Jumbotron;
