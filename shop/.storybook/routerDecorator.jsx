import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

const RouterDecorator = (Story) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/*" element={<Story />} />
      </Routes>
    </MemoryRouter>
  );
};

export default RouterDecorator;
