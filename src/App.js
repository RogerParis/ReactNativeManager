import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import reducers from './reducers'
import { createStore} from 'redux';
import firebase from 'firebase';

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
    return(
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;