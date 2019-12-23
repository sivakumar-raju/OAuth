import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import  firebase from 'firebase/app';
import 'firebase/auth';
import fire from './fire';
// import logo from './logo.svg';
import './App.css';
// import Bookmark from './Bookmark'


class SignApp extends Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    return (
      <div className="App">
        <header >
          {
            user
              ? <div><p className="sans-serif">Hello, {user.displayName}</p> <p>LoggedIn Sucessfully</p></div>
              : <p className="sans-serif"></p>
          }

          {
            user
              ? <div><button onClick={signOut} className="br4 light-red btn btn-danger" id="signout">Sign out</button></div>
              : <button onClick={signInWithGoogle} className="br4 light-red btn btn-primary" id="sign">Sign in with Google</button>
          }
        </header>
      </div>
    );
  }
}

const firebaseAppAuth = fire.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(SignApp);
