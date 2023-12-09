import { StyleSheet, Text, View,StatusBar, Image} from 'react-native'
import React, { useEffect } from 'react'
import { myColor } from '../../utils/Theme'

const Splash = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
           navigation.replace("Home")
        },3000)
    },[])
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={'transparent'} hidden />
      <Image style={styles.logo} source={{uri:"https://cdn.dribbble.com/users/9378043/screenshots/16832559/media/10b207c918d604662e088308d16b366d.png"}} />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        backgroundColor:myColor.primary,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        width:"90%",
        height:200
    }
})