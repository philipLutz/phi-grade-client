import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPage from './pages/LandingPage.js'
import HomePage from './pages/HomePage.js';
import LoginPage from './pages/LoginPage.js';
import SignupPage from './pages/SignupPage.js';
import './App.css';

export class App extends React.Component {

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

  startPeriodicRefresh() {

  }

  stopPeriodicRefresh() {

  }

  render() {
    return (
      <div className="App">
        <main>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    // hasAuthToken: state.auth.clientToken !== null,
    // loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
