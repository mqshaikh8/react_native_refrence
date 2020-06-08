import React from 'react'
import { StyleSheet, Text,View,Image,TouchableHighlight} from 'react-native';

function SubList({route, navigation,dispatch }){
    
    const { topics } = route.params;
        console.log(topics)

    let subListHandler = () => topics.map(topic => <TouchableHighlight key={topic.id} onPress={() => navigation.navigate('Article',{article:topic.article})}><Text >{topic.name}</Text></TouchableHighlight>)
    return(
        <View style={styles.container}>
            <View >{route.params ? subListHandler() : null}</View>
        </View>
    )
}

// const mstp = (state) => {
//     console.log("state",state)
//     return{religions:state?.religions}

// }
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
        backgroundColor:'white',
        marginTop:50
    }
   
  })
export default SubList;