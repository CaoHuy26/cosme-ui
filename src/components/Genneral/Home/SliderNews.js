import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { withNavigation } from 'react-navigation';
import Swiper from 'react-native-swiper';
import News from "./News";

const customDotSwiper = (
  <View 
    style={{
      backgroundColor:'rgba(0,0,0,.2)',
      width: 8,
      height: 8,
      borderRadius: 4,
      marginLeft: 3,
      marginRight: 3,
      marginTop: 3,
      marginBottom: 3
    }} 
  />
);

//TODO: use dynamic data for silder -> NewsScreen
// Slider dosen't use with array
const uri1 = '../../../assets/banner/banner1.jpg';
const uri2 = '../../../assets/banner/banner2.jpg';
const uri3 = '../../../assets/banner/banner3.jpg';

class SliderNews extends Component {
  render() {
    return (
      <View>
        <Swiper
          autoplay
          autoplayTimeout={5}
          dot={customDotSwiper}
          style={{ height: 140 }}
        >
          <News imageNews={require(uri1)} />
          <News imageNews={require(uri2)} />
          <News imageNews={require(uri3)} />
        </Swiper>
      </View>
    );
  }
}

export default withNavigation(SliderNews);

const styles = StyleSheet.create({
  
});
