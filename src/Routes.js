import React from "react";
import { Switch, Route } from 'react-router-dom';
import Site from '../src/Pages/Site/Site'

export default () => {
  return (
    <switch>
      <Route exact path="/">
        <div id="container">
          <Site />
        </div>
      </Route>
    </switch>
  );
}