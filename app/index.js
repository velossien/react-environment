import React, { Component } from 'react';
import ReactDOM from 'react-dom';
require('./styles/scss/style.scss');
import Main from './components/Main.jsx';

if (process.env.NODE_ENV !== "production") {
    console.log('Looks like we are in development mode!');
};

ReactDOM.render(<Main/>, document.getElementById('app'));