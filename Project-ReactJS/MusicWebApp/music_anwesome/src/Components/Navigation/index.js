import React, { Component } from 'react';
import './Navigation.scss';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {Home, Store, ContactPhone} from '@material-ui/icons';

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    let { value } = this.state;
    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
      >
        <BottomNavigationAction label="HOME" icon={<Home />}/>
        <BottomNavigationAction label="STORE" icon={<Store />} />
        <BottomNavigationAction label="CONTACT" icon={<ContactPhone />} />
      </BottomNavigation>
    );
  }
}

class Navigation extends Component {
//   constructor (props) {
//     super(props);
//   }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render () {
    return (
      <div className="Navigation">
        <SimpleBottomNavigation></SimpleBottomNavigation>
      </div>
    );
  }
}

export default Navigation;
