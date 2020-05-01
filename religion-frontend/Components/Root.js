import React,{useEffect} from 'react';
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//redux
import {connect} from 'react-redux'
import {Initial} from '../Redux/actions'

const Stack = createStackNavigator();//nav

import List from './List'
import Home from './Home'
import SubList from './SubList'

function Root(props){
    
        fetch("https://religion-inc.herokuapp.com/")
        .then(r => r.json())
        .then(res => props.Initial(res))
    
    console.log("props",props)
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Sublist" component={SubList} />
        </Stack.Navigator>
       </NavigationContainer>
    )
  }
  export default connect(null,{Initial})(Root);