import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './pages/App';
import Home from './pages/Home';
import Cities from './pages/Cities';
import Customers from './pages/Customers';



ReactDOM.render((

  <Router history={browserHistory}>

    <Route path="/" component={App}>
    <IndexRoute component={Home}/>    
    <Route path="/cities" component={Cities} ></Route>
    <Route path="/customers" component={Customers} ></Route>
     </Route>
  </Router>
), 
  document.getElementById("app") 

);