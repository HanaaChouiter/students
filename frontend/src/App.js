import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Form from './pages/Form';
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;