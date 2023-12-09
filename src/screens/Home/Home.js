import { StyleSheet, Text, View,ScrollView, Alert, StatusBar } from 'react-native'
import React,{useEffect,useState} from 'react'
import { myColor } from '../../utils/Theme'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import Home_Banner from '../../component/Home_Banner'
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpComingMovies } from '../../apis/Networks'
import MovieCard from '../../component/MovieCard'

const Home = () => {
const [nowPlayingMoviesData,setnowPlayingMoviesData]=useState([])
const [topRatedData,settopRatedData]=useState([])
const [popular,setPopular]=useState([])

// now playing api call

  useEffect(() => {
    const handleNowPlaying = async () => {
      const { data, status } = await getNowPlayingMovies();
      if (status === 200) {
        setnowPlayingMoviesData(data.results);
      } else {
        Alert.alert(`Request failed with ${data}`);
      }
    };
    handleNowPlaying();
  }, []);


  //top rated api call

  useEffect(() => {
    const handleTopRated = async () => {
      const { data, status } = await getTopRatedMovies();
      if (status === 200) {
        settopRatedData(data.results);
      } else {
        Alert.alert(`Request failed with ${data}`);
      }
    };
    handleTopRated();
  }, []);

  //popular api calling

  useEffect(() => {
    const handleUpComing = async () => {
      const { data, status } = await getPopularMovies();
      if (status === 200) {
        setPopular(data.results);
      } else {
        Alert.alert(`Request failed with ${data}`);
      }
    };
    handleUpComing();
  }, []);



  





  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <ScrollView>
        <Home_Banner />
        <View style={styles.subContainer} >
          <MovieCard title={'Now Playing'} data={nowPlayingMoviesData} />
          <MovieCard title={'Popular'} data={popular} />
          <MovieCard title={'Top Rated Movies'} data={topRatedData}/>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    backgroundColor:myColor.primary,
    flex:1,
  },
  Upcomig:{
    backgroundColor:"red",
    height:responsiveHeight(60)
  },
  subContainer:{
    marginHorizontal:15,
    gap:10,
    marginTop:20
  }

})