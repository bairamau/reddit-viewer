import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Popular from './Popular';
import Favourited from './Favourited';

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Popular} />
          <Route path='/favourited' component={Favourited} />
          <Route render={() => <p>Not Found</p>} />
        </Switch>
      </div>
    </Router>
  )
}