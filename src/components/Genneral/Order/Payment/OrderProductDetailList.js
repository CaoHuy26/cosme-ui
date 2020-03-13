import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from 'react-redux';
import OrderProductDetail from "./OrderProductDetail";

class OrderProductDetailList extends Component {
  /**
   * this.props.cart.productsInCart
   * @param {string} id
   * @param {string} imageUrl
   * @param {string} name
   * @param {number} price
   * @param {number} quantityOrder 
   */
  render() {
    const { productsInCart } = this.props.cart;
    return (
      <View style={styles.container}>
        {
          productsInCart.map(product => (
            <OrderProductDetail 
              key={product.id}
              orderProductDetail={product}
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

export default connect(mapStateToProps)(OrderProductDetailList);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});