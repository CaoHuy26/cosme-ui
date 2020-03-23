import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from 'react-redux';
import CartOrder from "./CartOrder";

class CartOrderList extends Component {
  /**
   * this.props.cart
   * @param {object} productsInCart
   * @param {number} total
   */
  render() {
    const { productsInCart, total } = this.props.cart;
    // console.log(`ORDER LIST: ${JSON.stringify(this.props.cart, null, 4)}`);
    return (
      <View style={styles.container}>
        {
          productsInCart.map(product => (
            <CartOrder
              key={product.id}
              orderProduct={product}
              total={total}
            />
          ))
        }
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cartReducers
  }
};

export default connect(mapStateToProps)(CartOrderList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  }
});