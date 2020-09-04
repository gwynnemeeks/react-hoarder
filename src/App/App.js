import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from '../components/pages/Auth/Auth';
import EditStuff from '../components/pages/EditStuff/EditStuff';
import Home from '../components/pages/Home/Home';
import MyNavbar from '../components/pages/NavBar/NavBar';
import NewItem from '../components/pages/NewItem/NewItem';
import SingleThing from '../components/pages/SingleThing/SingleThing';

import fbConnection from '../helpers/data/connection';

import './App.scss';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

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
    const { authed } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar authed={authed} />
            <div className="container">
              <Switch>
                <PrivateRoute path="/home" component={Home} authed={authed} />
                <PrivateRoute path="/new" component={NewItem} authed={authed} />
                <PrivateRoute path="/edit/:itemId" component={EditStuff} authed={authed} />
                <PrivateRoute path="/items/:itemId" component={SingleThing} authed={authed} />
                <PublicRoute path="/auth" component={Auth} authed={authed} />
                <Redirect from="*" to="/home"/>
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
