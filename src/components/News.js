import React, { Component } from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width } = Dimensions.get('window');

//TODO: Change to carousel

class News extends Component {
  render() {
    return (
      <View style={styles.news}>
        <TouchableOpacity>
          <Image
            source={this.props.imageNews}
            style={styles.imageNews}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
export default News;

const styles = StyleSheet.create({
  news: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageNews: {
    height: 130,
    width: width - 30,
    marginTop: 10,
    borderRadius: 10
  }
});
