import { StyleSheet, Text, View,FlatList,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';

const MovieCard = ({ title, data }) => {

  const navigation=useNavigation()
  const handleOnClick=(moviesData)=>{
     navigation.navigate("VideoPlayer",{moviesData})
  }

     
    const renderMovieCards = ({item, index}) => {

        return (
          <TouchableOpacity onPress={()=>handleOnClick(item)}>

          <Image
            resizeMode="center"
            style={styles.movieImg}
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
            }}
            />
            </TouchableOpacity>
        );
      };
    return (
        <View style={styles.container}>
            <Text style={{
                color: 'white',
                fontSize: 17,
                fontWeight: 'bold',
                letterSpacing: 1,
                marginLeft: 10,
            }}>
                {title}
            </Text>
            <FlatList
            data={data}
            renderItem={renderMovieCards}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{width:10}}></View>}
            />

        </View>
    )
}

export default MovieCard

const styles = StyleSheet.create({
    container:{
     height:responsiveHeight(40)
    },
    movieImg:{
    width: responsiveWidth(50),
    height: '100%',
    borderRadius: 10,
    }
})