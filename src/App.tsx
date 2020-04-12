import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Details from './features/Details/Details';
import List from './features/List/List';
import Loader from './shared/loader/Loader';

function App() {
  return (
    <div className="app__wrapper">
      <Router>
        <Suspense fallback={<Loader />}>
          <Switch >
            <Route exact path='/details:id' component={Details} />
            <Route path='/' component={List} />
          </Switch>
        </Suspense>
      </Router >
    </div>
  );
}

export default App;
