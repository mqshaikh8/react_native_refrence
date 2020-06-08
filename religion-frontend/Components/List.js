import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import {connect} from 'react-redux'
// import * as fs from 'fs'


function List({route, navigation,religions,dispatch }){
    
    const { name } = route.params;
    
    let religion = religions?.find(religion => religion.name == name)
    console.log(religion)


let listHandler = () => religion.categories.map(category =><TouchableHighlight style={styles.item} onPress={() => navigation.navigate('Sublist',{topics:category.topics})} key={category.id}><Text >{category.name}</Text></TouchableHighlight>)
        

    
    return(
        <View style={styles.container}>
            <View >{religion ? listHandler() : null}</View>
        </View>
    )
}

const mstp = (state) => {
    console.log("state",state)
    return{religions:state?.religions}

}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor:'white',
    flexDirection:"column",
    height:200,
    justifyContent:'center',
    alignItems:'center'
      
    },
    item:{
        
        marginTop:50
    }
   
  })
export default connect(mstp)(List);