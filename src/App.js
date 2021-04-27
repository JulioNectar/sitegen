import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';

import Nav from './components/navbar/navbar'
import Create from './pages/Create';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div style={{ padding: "15px" }}>
        <h1>Site Creator</h1>
      </div>
      <div className="App">

        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
        <Switch>
          <Route path='/createsite' exact component={Create} />
        </Switch>
        <Switch>
          <Route path='/about' exact component={About} />
        </Switch>

      </div>
    </Router >
  );
}

export default App;
