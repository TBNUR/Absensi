import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import History from './components/History';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/history" component={History} />
      </Switch>
    </Router>
  );
}

export default App;
