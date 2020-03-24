import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Order from './Order';

class OrderList extends Component {
  render() {
    return (
      <View style={styles.container}>
        {
          this.props.orders.map(order => (
            <Order
              key={order.id}
              {...order}
            />
          ))
        }
      </View>
    );
  }
}

export default OrderList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  }
});