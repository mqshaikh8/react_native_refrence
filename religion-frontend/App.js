import 'react-native-gesture-handler'; // for navigation
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//for navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//for redux
import {createStore} from 'redux'
import reducer from './Redux/reducer'
import {Provider} from 'react-redux'


const store = createStore(reducer) // redux
const Stack = createStackNavigator();//nav
//components
import SubList from './Components/SubList'
import Home from './Components/Home'

export default function App() {
  fetch("https://religion-inc.herokuapp.com/")
  .then(r => r.json())
  .then(console.log)

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SubList" component={SubList} />
      </Stack.Navigator>
     </NavigationContainer>
     </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
{/* <NavigationContainer>
      <Stack.Navigator>
      
    <Header/>
    v </Provider>
      </Stack.Navigator>
    </NavigationContainer> */}