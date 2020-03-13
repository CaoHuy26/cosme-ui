import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Dimensions, ScrollView, Image } from "react-native";
import { connect } from 'react-redux';
import OrderList from "../../components/Genneral/Order/OrderList";
import CustomButton from "../../components/Genneral/Common/CustomButton";
import formatToVND from '../../utils/formatToVND';

class OrderScreen extends Component {
  render() {
    const { productsInCart } = this.props.cart;
    let totalMoney = 0;
    for (let i = 0; i < productsInCart.length; i++) {
      totalMoney += Number(productsInCart[i].price) * productsInCart[i].quantityOrder
    }
    if (productsInCart.length > 0) {
      return (
        <View style={styles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <OrderList />
          </ScrollView>
  
          <View style={{paddingVertical: 20, paddingHorizontal: 23}}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
              <Text>Tổng tiền</Text>
              <Text style={{fontWeight: 'bold'}}>{formatToVND(totalMoney)}</Text>
            </View>
            {/* Button */}
            <View style={{marginTop: 15}}>
              <CustomButton 
                title='Đặt hàng'
                onPress={() => this.props.navigation.navigate('Payment')}
              />
            </View>
          </View>
        </View>
      );
    }
    else {
      return (
        <View style={styles.emptyOrder}>
          <Image
            style={styles.emptyOrderImage}
            source={require('../../assets/illustration/empty-list.png')}
          />
          <Text style={styles.emptyOrderText}>
            Chưa có đơn hàng nào 😭😭😭
          </Text>
        </View>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cartReducers
  }
};

export default connect(mapStateToProps)(OrderScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  emptyOrder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50
  },
  emptyOrderImage: {
    width: 250,
    height: 250
  },
  emptyOrderText: {
    fontSize: 18,
    fontWeight: '300',
    paddingTop: 20
  }
});