import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from '../components/pages/Auth/Auth';
import NavBar from '../components/pages/NavBar/NavBar';

import fbconnection from '../helpers/data/connection';

import './App.scss';

fbconnection();

class App extends React.Component {
state = {
  authed: false,
}

componentDidMount() {
  this.removeListener = firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ authed: true });
    } else {
      this.setState({ authed: false });
    }
  });
}

componentWillUnmount() {
  this.removeListener();
}

render() {
  return (
    <div className="App">
      <h2><i className="fas fa-adjust fa-lg"></i>All My Things</h2>
      <NavBar />
      <Auth />
    </div>
  );
}
}

export default App;
