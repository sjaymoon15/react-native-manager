import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
     apiKey: 'AIzaSyAprFK84bZ1w2PAt1qjOBwlqQa2K0Q7S-8',
     authDomain: 'manager-e2984.firebaseapp.com',
     databaseURL: 'https://manager-e2984.firebaseio.com',
     storageBucket: 'manager-e2984.appspot.com',
     messagingSenderId: '240285345582'
   };
   firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;