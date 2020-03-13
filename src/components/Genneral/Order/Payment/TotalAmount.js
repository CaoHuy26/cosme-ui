import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from 'react-redux';
import formatToVND from "../../../../utils/formatToVND";

class TotalAmount extends Component {
  render() {
    const { productsInCart } = this.props.cart;
    let totalOrder = 0;
    for (let i = 0; i < productsInCart.length; i++) {
      totalOrder += Number(productsInCart[i].price) * productsInCart[i].quantityOrder;
    }
    // TODO: Handle discount & transportFee
    let discount = 0;
    let transportFee = 0;
    const totalMoney = totalOrder - discount + transportFee;

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text>Tổng đơn hàng</Text>
          <Text>{formatToVND(totalOrder)}</Text>
        </View>
        <View style={styles.row}>
          <Text>Giảm giá</Text>
          <Text>{formatToVND(discount)}</Text>
        </View>
        <View style={styles.row}>
          <Text>Phí vận chuyển</Text>
          <Text>{formatToVND(transportFee)}</Text>
        </View>
        <View style={styles.row}>
          <Text>Thành tiền</Text>
          <Text>{formatToVND(totalMoney)}</Text>
        </View>
      </View>
    );
  }
}

const mapsStateToProps = state => {
  return {
    cart: state.cartReducers
  }
};

export default connect(mapsStateToProps)(TotalAmount);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10
  }
});