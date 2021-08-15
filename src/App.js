import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { Music, Home, ActivityRender, Chat, Socket } from './pages';
import { Header } from './Layout';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/music">
          <Music />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/activity">
          <ActivityRender />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
        <Route path="/socket">
          <Socket />
        </Route>
      </Switch>
    </>
  );
}

export default App;