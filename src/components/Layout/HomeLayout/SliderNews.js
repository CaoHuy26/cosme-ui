import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Swiper from 'react-native-swiper';

import News from "../../News";

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

class SliderNews extends Component {
  render() {
    return (
      <View>
        <Swiper
          autoplay
          autoplayTimeout={3}
          dot={customDotSwiper}
          style={{ height: 140 }}
        >
          <News imageNews={require("../../../../assets/home.jpg")} />
          <News imageNews={require("../../../../assets/home.jpg")} />
          <News imageNews={require("../../../../assets/home.jpg")} />
        </Swiper>
      </View>
    );
  }
}
export default SliderNews;

const styles = StyleSheet.create({
  
});
