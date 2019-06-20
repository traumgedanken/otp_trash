import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Menu from './Menu';
import App from './App';
import Gallery from './Gallery';
import Sorting from './Sorting';
import Contacts from './Contacts';

const routing = (
    <Router>
        <Menu />
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/activity/gallery' component={Gallery} />
            <Route exact path='/activity/sorting' component={Sorting} />
            <Route exact path='/contacts' component={Contacts} />
        </Switch>
    </Router>
);
ReactDOM.render(routing, document.getElementById('root'));
