import React, { Component } from 'react';
import Trips from './Trips';

class Profile extends Component {
  render() {
    return (
      <div>
        <p>This is where the user profile will go!</p>
        <Trips />
      </div>
    );
  }
}

export default Profile;
