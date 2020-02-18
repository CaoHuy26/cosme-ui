import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Swiper from 'react-native-swiper';

import Category from "../../components/Category";
import Product from "../../components/Product";
import News from "../../components/News";

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
)

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          {/* Input Search */}
          <View style={{ height: 80 }}>
            <View style={styles.inputSearch}>
              <Icon name="ios-search" size={24} style={{ marginRight: 10 }} />
              <TextInput
                placeholder="What are you looking for?"
                style={{ flex: 1 }}
              />
            </View>
          </View>

          <ScrollView>
            <View style={{ flex: 1, paddingTop: 20 }}>
              {/* NEWS */}
              <View>
                <Text style={styles.textTitle}>News</Text>
                <Swiper
                  autoplay
                  autoplayTimeout={3}
                  dot={customDotSwiper}
                  style={{height: 140}}
                >
                  <News imageNews={require("../../../assets/home.jpg")} />
                  <News imageNews={require("../../../assets/home.jpg")} />
                  <News imageNews={require("../../../assets/home.jpg")} />
                </Swiper>
                
              </View>

              {/* CATEGORY */}
              <View style={{ marginTop: 40 }}>
                <Text style={styles.textTitle}>Category</Text>
                <View style={{ height: 150, marginTop: 20 }}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <Category
                      imageUrl={require("../../../assets/home.jpg")}
                      categoryTitle="Home"
                    />
                    <Category
                      imageUrl={require("../../../assets/experiences.jpg")}
                      categoryTitle="Experience"
                    />
                    <Category
                      imageUrl={require("../../../assets/restaurant.jpg")}
                      categoryTitle="Restaurant"
                    />
                  </ScrollView>
                </View>
              </View>

              {/* PRODUCTS */}
              <View style={{ marginTop: 40 }}>
                <Text style={styles.textTitle}>Products</Text>
                <View
                  style={{
                    paddingHorizontal: 20,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between"
                  }}
                >
                  <Product
                    imageUrl={require("../../../assets/home.jpg")}
                    name="Item 1"
                    price="20$"
                    rating={4}
                  />
                  <Product
                    imageUrl={require("../../../assets/home.jpg")}
                    name="Item 2"
                    price="20$"
                    rating={3}
                  />
                  <Product
                    imageUrl={require("../../../assets/home.jpg")}
                    name="Item 2"
                    price="20$"
                    rating={4}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  inputSearch: {
    flexDirection: "row",
    padding: 10,
    marginTop: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 10
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "500",
    paddingHorizontal: 20
  }
});
