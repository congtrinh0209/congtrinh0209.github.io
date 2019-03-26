import React, { Component } from 'react';
import Navigation from '../Navigation';
import MainContent from '../MainContent'
import './App.scss';

class App extends Component {
  // constructor (props) {
  //   super(props);
  // }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render () {
    return (
      <div className="App">
        <Navigation></Navigation>
        <MainContent></MainContent>
      </div>
    );
  }
}

export default App;
