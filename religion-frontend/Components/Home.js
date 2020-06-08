import React,{useState} from 'react';
import { StyleSheet, Text,View,Image,TouchableWithoutFeedback} from 'react-native';

export default  function Home({navigation}){
 

    return(
        <View style={home.parentContainer}>
            <View style={home.container}>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('List',{name:"Hinduism"})}> 
                    <View style={home.subContainer}>
                        <Image
                            style={home.img}
                            source={require('../Pictures/Hinduism.png')}
                        />
                        <Text>Hinduism</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('List',{name:"Judaism"})}> 
                    <View style={home.subContainer}>
                        <Image
                            style={home.img}
                            source={require('../Pictures/judaism.png')}
                    />
                        <Text>Judaism</Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>
           <View style={home.container}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('List',{name:"Christianity"})}> 
                    <View style={home.subContainer}>
                        <Image
                            style={home.img}
                            source={require('../Pictures/Christianity.png')}
                            />
                        <Text>Christianity</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('List',{name:"Islam"})}> 
                    <View style={home.subContainer}>
                        <Image
                            style={home.img}
                            source={require('../Pictures/Islam.png')}
                            />
                        <Text>Islam</Text>
                    </View>
                </TouchableWithoutFeedback>
           </View>
           <View style={home.container}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('List',{name:"Atheism"})}>
                    <View style={home.subContainer}>
                        <Image
                            style={home.img}
                            source={require('../Pictures/AethismPic.png')}
                        />
                        <Text>
                            Atheism
                        </Text>
                    </View> 
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('List',{name:"Budhissm"})}> 
                    <View style={home.subContainer}>
                        <Image
                            style={home.img}
                            source={require('../Pictures/budhissm.png')}
                            />
                        <Text>Budhism</Text>
                    </View>
                </TouchableWithoutFeedback>
           </View>

        </View>
    )
}
const home = StyleSheet.create({
    parentContainer:{
        flex:1,
        flexDirection:'column',
        height:500,
        backgroundColor: 'white',
        
    },
    container: {
      width:350,
      justifyContent: 'center',
      flexDirection:"row",
      flexWrap:"wrap"
    },
    subContainer:{
        flex:1,
        height:175,
        width:50,
        marginLeft:10,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        height:70,
        width:70
    }
  });