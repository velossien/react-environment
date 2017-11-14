import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Main from '../components/Main.jsx';

let routes = (
    <HashRouter>
        <Route path='/' component={Main} />
    </HashRouter>
);

export default routes;