import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import Browse from './pages/Browse';
import GameDetails from './pages/GameDetails';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/game/:gameId" element={<GameDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
