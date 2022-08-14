import React, { PropsWithChildren } from 'react';
import './styles.css';

function GameGallery({ children }: PropsWithChildren) {
  return <div className="game-gallery">{children}</div>;
}

export default GameGallery;
