import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Empty } from '../../../components/Genneral/Common';

class EmptyOrderScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Empty
          notice="Bạn chưa có đơn hàng nào 😭😭😭"
          image='../../../assets/illustration/delivery.png'
        />
      </View>
    );
  }
}
export default EmptyOrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});