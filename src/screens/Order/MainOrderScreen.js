import React, { Component } from "react";
import { View } from "react-native";
import { Tabs } from '@ant-design/react-native';
import { connect } from 'react-redux';
import orderActions from '../../actions/orderActions';

import EmptyCartScreen from './Cart/EmptyCartScreen';
import CartOrderListScreen from './Cart/CartOrderListScreen';
import EmptyOrderScreen from './Order/EmptyOrderScreen';
import OrderListScreen from './Order/OrderListScreen';

class MainOrderScreen extends Component {
  
  componentDidMount() {
    this.props.getOrderByUserId('b93e7a50-fa66-406d-9fae-ce912d7bda7f') //FIXME: Change userId
  }

  render() {
    const tabs = [
      {title: 'Giỏ hàng'},
      {title: 'Đơn đặt hàng'}
    ];

    const { productsInCart } = this.props.cart;
    const { orders } = this.props.order || [];
    const { isLoggedIn } = this.props.user;
    
    const CartProduct = (
      <View>
        {
          productsInCart.length > 0
            ? <CartOrderListScreen />
            : <EmptyCartScreen />
        }
      </View>
    );

    const CartOrder = (
      <View>
        {
          orders.length > 0
            ? <OrderListScreen
                orders={this.props.order.orders}
              />
            : <EmptyOrderScreen />
        }
      </View>
    );

    const Tab = (
      <Tabs tabs={tabs}>
        <View>
          {
            CartProduct
          }
        </View>
        <View>
          {
            CartOrder
          }
        </View>
      </Tabs>
    );

    return (
      <>
        {
          isLoggedIn
            ? Tab
            : CartProduct
        }
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cartReducers,
    order: state.orderReducers,
    user: state.loginReducers
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getOrderByUserId: (userId) => dispatch(orderActions.getOrderByUserId(userId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainOrderScreen);