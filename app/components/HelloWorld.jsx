import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

/* How proptypes are set up:
    HelloWorld.propTypes = {
        propExample: PropTypes.string.isRequired;
    };
*/