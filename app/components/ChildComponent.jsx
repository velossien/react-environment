import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paragraph: props.paragraph,
    };
  }

  render() {
    const { paragraph } = this.state;
    return (
      <span>{paragraph}</span>
    );
  }
}

ChildComponent.propTypes = {
  paragraph: PropTypes.string,
};

ChildComponent.defaultProps = {
  paragraph: 'Hi!',
};

export default ChildComponent;
