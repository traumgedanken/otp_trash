import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Menu from './Menu';
import App from './App';
import Places from './Places';
import Contacts from './Contacts';

const routing = (
    <Router>
        <Menu />
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/places' component={Places} />
            <Route exact path='/contacts' component={Contacts} />
        </Switch>
    </Router>
);
ReactDOM.render(routing, document.getElementById('root'));
