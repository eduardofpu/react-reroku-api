import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './pages/App';
import Home from './pages/Home';
import home2 from './pages/home2';

ReactDOM.render((

  <Router history={browserHistory}>

    <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/home2" component={home2} ></Route>
     </Route>
  </Router>
), 
  document.getElementById("app") 

);