import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor (props) {
    super(props);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.state = {
      isSigned: false
    }
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  logIn() {
    this.setState(() => ({
      isSigned: true
    }))
  }
  logOut() {
    this.setState( () => ({
      isSigned: false
    }))
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.logIn}>
            Log In
          </button>
          <button onClick={this.logOut}>
            Log Out
          </button>
          {this.state.isSigned ? <div>Bạn đã đăng nhập vào hệ thống</div> :
            <div>Bạn chưa đang nhập vào hệ thống</div>
          }
        </header>
      </div>
    );
  }
}

export default App;
