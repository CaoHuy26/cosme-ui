import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from 'react-navigation';

class Order extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('OrderDetail')}
      >
        <View style={styles.cart}>
          <Text style={styles.statusOrderText}>
            Tình trạng
          </Text>
          <Text>Mã đơn hàng: </Text>
          <Text>Thời gian đặt: </Text>
          
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Tổng cộng</Text>
            <Text>100.000VND</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(Order);

const styles = StyleSheet.create({
  cart: {
    height: 150,
    marginTop: 15,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-around'
  },
  statusOrderText: {
    color: 'red',
    fontSize: 18,
    fontWeight: '500'
  }
});