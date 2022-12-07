
import React from 'react';
import './styles/app.sass'
import { BrowserRouter } from "react-router-dom";
import './styles/app.sass'

import Rotas from './Rotas';

function App() {
  return (
    <BrowserRouter>
        <div id="container">
          <Rotas />
        </div>
    </BrowserRouter>

  );
}

export default App;
