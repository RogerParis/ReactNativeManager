import React, { Component } from 'react';
import { Provider } from 'react-redux';
import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm'


class App extends Component {
  componentWillMount(){
    const config = {
      apiKey: 'AIzaSyDNdvmQCTh4QEAv1F6odInrWeA8DnnQ46w',
      authDomain: 'react-native-manager-f1c0f.firebaseapp.com',
      databaseURL: 'https://react-native-manager-f1c0f.firebaseio.com',
      storageBucket: 'react-native-manager-f1c0f.appspot.com',
      messagingSenderId: '1031121348634'
    };

    firebase.initializeApp(config);
  }

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;