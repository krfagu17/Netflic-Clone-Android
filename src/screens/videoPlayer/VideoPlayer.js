import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';

const VideoPlayer = ({ route }) => {

  const [isVideoVisible, setIsVideoVisible] = useState(false)

  const moviesData = route.params.moviesData

  

  return (
    <View style={styles.mainContainer}>

      <ScrollView style={styles.ScrollContainer}>
        {isVideoVisible ? (<Video style={styles.movieImg}
        setControls
        controls
        repeat={false}
        resizeMode='cover'
        onFullscreenPlayerWillPresent={()=>{
          Orientation.lockToLandscape()
        }}
        onFullscreenPlayerWillDismiss={()=>{
          Orientation.lockToPortrait()
        }}
        source={{uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"}} />) : (
          <View>
            <Image
              resizeMode="center"
              style={styles.movieImg}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${moviesData.poster_path}`,
              }}
            />
          </View>
        )}

        <View style={{ display: "flex", alignItems: "center", gap: 5, justifyContent: "center", flexDirection: 'row' }}>
          <Image style={styles.logo} source={{ uri: "https://cdn.dribbble.com/users/9378043/screenshots/16832559/media/10b207c918d604662e088308d16b366d.png" }} />
          <Text style={styles.textlogo}>SERIES</Text>
        </View>

        <Text style={styles.title}>{moviesData.title}</Text>
        <View style={styles.releaseDate}>
          <Text style={{ fontSize: 25 }}>{moviesData.release_date.split('-')[0]}</Text>
          <View style={{ height: 26, width: 3, backgroundColor: "white" }}></View>
          <View style={styles.releaseDate} >
           <MaterialIcons name="favorite" size={25} color="red" />
           <Text>{moviesData.vote_count}</Text>
          </View>
        </View>

        <View style={{ gap: 10, width: "100%", display: "flex", justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
          <TouchableOpacity onPress={()=>setIsVideoVisible(true)} style={styles.btn}><Text style={styles.btnText}>Play</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btnDownload}><Text style={styles.btnTextDownload}>Download</Text></TouchableOpacity>
        </View>
        <View>
          <Text style={styles.description}>
            {moviesData.overview}
          </Text>
        </View>

      </ScrollView>
    </View>
  )
}

export default VideoPlayer

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black"
  },
  ScrollContainer: {
    flex: 1,

  },
  movieImg: {
    width: responsiveWidth(100),
    height: responsiveHeight(40),
    borderRadius: 10,
  },
  logo: {
    height: responsiveHeight(10),
    width: responsiveWidth(10)
  },
  textlogo: {
    color: "white",
    fontSize: 20
  },
  title: {
    color: "white",
    fontSize: responsiveFontSize(4.5),
    textAlign: 'center'
  },
  btn: {
    height: responsiveHeight(5),
    width: responsiveWidth(90),
    borderRadius: 5,
    backgroundColor: 'white',
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    gap: 10


  },
  btnDownload:{
    height: responsiveHeight(5),
    width: responsiveWidth(90),
    borderRadius: 5,
    backgroundColor: '#3C3A3A',
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    

  },
  btnText: {
    fontSize: responsiveFontSize(2),
    color: 'black'
  },
  btnTextDownload:{
    fontSize: responsiveFontSize(2),
    color: 'white'
  },
  description: {
    color: "white",
    padding: 20,
    fontSize: 20
  },
  releaseDate: {
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  }
})