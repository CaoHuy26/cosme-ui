import React, { Component } from "react";
import { View } from "react-native";
import { Tabs } from '@ant-design/react-native';
import { connect } from 'react-redux';

import EmptyCartScreen from './Cart/EmptyCartScreen';
import CartOrderListScreen from './Cart/CartOrderListScreen';
import EmptyOrderScreen from './Order/EmptyOrderScreen';
import OrderListScreen from './Order/OrderListScreen';

class MainOrderScreen extends Component {
  render() {
    const tabs = [
      {title: 'Giỏ hàng'},
      {title: 'Đơn đặt hàng'}
    ];

    const { productsInCart } = this.props.cart;

    return (
      <Tabs tabs={tabs}>
        <View>
          {
            productsInCart.length > 0
              ? <CartOrderListScreen />
              : <EmptyCartScreen />
          }
        </View>
        <View>
          {
            false
              ? <OrderListScreen />
              : <EmptyOrderScreen />
          }
        </View>
      </Tabs>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cartReducers
  }
};

export default connect(mapStateToProps)(MainOrderScreen);