import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

class Navbar extends React.Component {
  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="Navbar">
        <h1>My Navbar</h1>
        <button className="btn btn-danger" onClick={this.logMeOut}><i className="fas fa-sign-out-alt fa-flip-horizontal fa-lg"></i></button>
      </div>
    );
  }
}

export default Navbar;
