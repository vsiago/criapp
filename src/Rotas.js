import React from "react";
import { Routes, Route } from "react-router-dom";
import Site from './Pages/Site/Site'
import Login from './Pages/Login/Login'

function Rotas() {

  return (
    <Routes>
        <Route path="/" element={<Site/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>
    );
}

export default Rotas