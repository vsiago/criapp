import React from "react";
import { Routes, Route } from "react-router-dom";
import Site from './Pages/Site/Site'

function Rotas() {
  return (
    <Routes>
        <Route path="/" element={<Site/>} />
    </Routes>
    );
}

export default Rotas