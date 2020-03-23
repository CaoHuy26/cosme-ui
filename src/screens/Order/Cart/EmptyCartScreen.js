import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Empty } from '../../../components/Genneral/Common';

class EmptyCartScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Empty
          notice="Giỏ hàng trống 😭😭😭"
          image='../../../assets/illustration/delivery.png'
        />
      </View>
    );
  }
}
export default EmptyCartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});