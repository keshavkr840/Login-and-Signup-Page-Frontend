import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginForm } from './loginBox/loginForm';
import Centers from './loginBox/Centers';

ReactDOM.render(
  <React.StrictMode>
    <Router forceRefresh={true}>
      <Switch>
      <Route exact path="/" component={App}/>
        <Route  path="/home" component={App}/>
        <Route path="/cowin" component={Centers}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
