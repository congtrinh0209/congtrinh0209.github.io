import React, { Component } from 'react';
import './ContentA.scss';

class ContentA extends Component {
  constructor (props) {
    super(props);
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render () {
    return (
      <div className="ContentA">
        Nội dung ContentA
      </div>
    );
  }
}

export default ContentA;
