import React from 'react';
import Home from 'views/Home/Home';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Wrapper } from './App.styles';

function App() {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/">
          HelloWorld Let's do it!
          <Home />
        </Route>
        <Route path="/">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Wrapper>
  );
}

export default App;
