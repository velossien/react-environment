import React, { Component } from 'react';

export default class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="hello-world">
                <p>Hello World!!</p>
            </div>
        )
    };
};