
import React from 'react';
import './styles/app.sass'
import { BrowserRouter } from "react-router-dom";


import Rotas from './Rotas';

function App() {
  return (
    <BrowserRouter>

        <Rotas />

    </BrowserRouter>

  );
}

export default App;
