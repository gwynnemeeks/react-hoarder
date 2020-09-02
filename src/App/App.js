import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from '../components/pages/Auth/Auth';
import EditStuff from '../components/pages/EditStuff/EditStuff';
import Home from '../components/pages/Home/Home';
import Navbar from '../components/pages/NavBar/NavBar';
import NewItem from '../components/pages/NewItem/NewItem';
import SingleThing from '../components/pages/SingleThing/SingleThing';

import fbConnection from '../helpers/data/connection';

import './App.scss';

fbConnection();

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
        <h1>Hoarder of Things</h1>
        <Navbar />
        <Auth />

        <EditStuff />
        <Home />
        <NewItem />
        <SingleThing />
      </div>
    );
  }
}

export default App;
