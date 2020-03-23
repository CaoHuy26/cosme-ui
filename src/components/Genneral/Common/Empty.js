import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

const { height } = Dimensions.get('window');

class Empty extends Component {
  render() {    
    return (
      <View style={styles.emptyContainer}>
        <Image
          style={styles.emptyImage}
          source={require('../../../assets/illustration/delivery.png')} //FIXME: Change to this.props.image
        />
        <Text style={styles.emptyText}>
          {this.props.notice}
        </Text>
      </View>
    );
  }
}
export default Empty;

const styles = StyleSheet.create({
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 2
  },
  emptyImage: {
    width: 250,
    height: 250
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '300',
    paddingTop: 20
  }
});