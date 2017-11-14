import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HelloWorld from '../components/HelloWorld.jsx';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-container">
                <Switch>
                    <Route exact path='/' render={(props) => (
                            <Redirect to="/HelloWorld" />
                        )} /> 
                        {/*redirects you to HelloWorld page when you go to / - may not need this if you have a home page or a page that does not have it's own route*/}
                    <Route exact path='/HelloWorld' component={HelloWorld}/>
                </Switch>
            </div>
        )
    };
};