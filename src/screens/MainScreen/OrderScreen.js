import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Dimensions, ScrollView, Image } from "react-native";
import { connect } from 'react-redux';
import OrderList from "../../components/Genneral/Order/OrderList";
import formatToVND from '../../utils/formatToVND';

const { width } = Dimensions.get('window');

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
              <Text>Thành Tiền</Text>
              <Text style={{fontWeight: 'bold'}}>{formatToVND(totalMoney)}</Text>
            </View>
            {/* Button */}
            <View style={{
              marginTop: 15,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <View style={styles.button}>
                <View style={{
                  flex: 1,
                  justifyContent: 'center'
                }}>
                  <Button
                    title='Đặt hàng'
                    color='white'
                    onPress={() => alert('Đặt hàng')}
                  />
                </View>
              </View>
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
  button: {
    width: width - 40,
    height: 50,
    backgroundColor: 'pink',
    borderRadius: 10
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