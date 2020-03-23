import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { OrderDetail } from '../../../components/Genneral/Order'

class OrderDetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <OrderDetail />
      </View>
    );
  }
}
export default OrderDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  }
});