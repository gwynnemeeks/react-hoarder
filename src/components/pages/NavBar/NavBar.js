import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

class NavBar extends React.Component {
    logMeOut = (e) => {
      e.preventDefault();
      firebase.auth().signOut();
    }

    render() {
      return (
            <div className="NavBar">
                <h1>Hoarder Navs</h1>
                <button className="btn btn-dark" onClick={this.logMeOut}><i className="fas fa-circle-notch fa-lg"> LogOut</i> </button>
            </div>
      );
    }
}

export default NavBar;
