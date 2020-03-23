import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class OrderListScreen extends Component {
  render() {
    return (
      <View>
        <Text>Order 1</Text>
        <Text>Order 2</Text>
        <Text>Order 3</Text>
      </View>
    );
  }
}
export default OrderListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});