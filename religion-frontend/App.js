import 'react-native-gesture-handler'; // for navigation
import React from 'react';

import {createStore} from 'redux'
import reducer from './Redux/reducer'
import {Provider} from 'react-redux'

const store = createStore(reducer) // redux

import Root from './Components/Root'

export default function App() {
  
  return (
    <Provider store={store}>
      <Root/>
    </Provider>
    
  );
}

