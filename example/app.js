import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Index from './index';
import Home from './Home';

function App(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node
};

function NotFound() {
  return (
    <div>404</div>
  );
}

function Root() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="/home" component={Home} />
      </Route>
    </Router>
  );
}
render( <Root />, document.getElementById('app'));

// <Route path="/toast" component={Toast} />
