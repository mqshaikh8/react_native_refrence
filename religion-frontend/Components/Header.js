import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button,TouchableWithoutFeedback} from 'react-native';


export default function Header(){
    const [clicked, setClicked] = useState(false);
     let handleRendering = () => {
         if(clicked === false){
             return(
                 <View style={navbarstyles.container}>
                <View style={navbarstyles.tab}><Text>Islam</Text></View>
                <View style={navbarstyles.tab}><Text>Atheism</Text></View>
                <View style={navbarstyles.tab}><Text>Hinduism</Text></View>
                <View style={navbarstyles.tab}><TouchableWithoutFeedback  onPress={() => setClicked(!clicked)}><Text >--></Text></TouchableWithoutFeedback></View>
                </View>
             )
         }else{
             return(
                <View style={navbarstyles.container}>
                <View style={navbarstyles.tab}><Text>Judaism</Text></View>
                <View style={navbarstyles.tab}><Text>Christianity</Text></View>
                <View style={navbarstyles.tab}><TouchableWithoutFeedback  onPress={() => setClicked(!clicked)}><Text >--></Text></TouchableWithoutFeedback></View>
                </View>
             )
         }
     }
    return(handleRendering())
}
const navbarstyles = StyleSheet.create({
    container: {
    flex: 1,
    color:'#222222',
    flexDirection:"row",
    height:25,
    justifyContent:'space-between'
      
    },
    tab:{
        flex: 1,
        height:25,
        marginTop:"6%",
        marginBottom: "94%",
        marginLeft:"1%",
        alignItems: 'center',
        backgroundColor:'grey'
    }
   
  })
//Islam atheism hinduism --> christianity judaism

// <View style={navbarstyles.tab}><Text>Islam</Text></View>
//        style={navbarstyles.button}     <View style={navbarstyles.tab}><Text>Atheism</Text></View>
//             <View style={navbarstyles.tab}><Text>Hinduism</Text></View>
//             <View style={navbarstyles.tab}><Text>Christianity</Text></View>