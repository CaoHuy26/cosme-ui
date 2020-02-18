import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Category extends Component {
  render() {
    return (
      <View style={styles.category}>
        <View style={{ flex: 2 }}>
          <Image
            source={this.props.imageUrl}
            style={styles.imageThumbnail}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.categoryTitle}>
            {this.props.categoryTitle}
          </Text>
        </View>
      </View>
    );
  }
}
export default Category;

const styles = StyleSheet.create({
  category: {
    width: 150,
    height: 150,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: "#dddddd"
  },
  imageThumbnail: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  },
  categoryTitle: {
    paddingLeft: 10,
    paddingTop: 10
  }
});
