import React from 'react';
import { StyleSheet, Text,View,Image,TouchableHighlight} from 'react-native';

function Article({route, navigation,dispatch }){
    const { article } = route.params;
    console.log(article)

    let articleFinder = () => article[0].content
    return(
        <View>
                <Text>{route.params?.article ? articleFinder() : null}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor:'grey',
    flexDirection:"column",
    height:200,
    justifyContent:'center',
    alignItems:'center'
      
    }
  })
export default Article;