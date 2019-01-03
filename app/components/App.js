import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Search from './Search';
import Popular from './Popular';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Popular} />
          <Route path='/search' component={Search} />
          <Route render={() => <p className='not-found'>Not Found</p>} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
