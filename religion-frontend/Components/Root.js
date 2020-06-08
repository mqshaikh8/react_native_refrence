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
import Article from './Articles'

//data
import Religion from '../Religion/Religion'


function Root(props){

 useEffect(() => {
  props.Initial(Religion)
},[])

    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Sublist" component={SubList} />
        <Stack.Screen name="Article" component={Article} />
        </Stack.Navigator>
       </NavigationContainer>
    )
  }
  export default connect(null,{Initial})(Root);