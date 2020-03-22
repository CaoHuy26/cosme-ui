import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Dimensions, ScrollView, Image } from "react-native";
import { Tabs } from '@ant-design/react-native';
import { connect } from 'react-redux';
import OrderList from "../../../components/Genneral/Order/OrderList";
import CustomButton from "../../../components/Genneral/Common/CustomButton";
import formatToVND from '../../../utils/formatToVND';

const { height } = Dimensions.get('window');

class OrderListScreen extends Component {
  render() {
    const tabs = [
      {title: 'Giỏ hàng'},
      {title: 'Đơn đặt hàng'}
    ];
    const { productsInCart } = this.props.cart;
    let totalMoney = 0;
    for (let i = 0; i < productsInCart.length; i++) {
      totalMoney += Number(productsInCart[i].price) * productsInCart[i].quantityOrder
    }

    const emptyCart = (
      <View style={styles.emptyOrder}>
        <Image
          style={styles.emptyOrderImage}
          source={require('../../../assets/illustration/empty-list.png')}
        />
        <Text style={styles.emptyOrderText}>
          Giỏ hàng trống 😭😭😭
        </Text>
      </View>
    );

    const productCart = (
      <View>
        <ScrollView style={{height: height - 350}}
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

    const emptyOrder = (
      <View style={styles.emptyOrder}>
        <Image
          style={styles.emptyOrderImage}
          source={require('../../../assets/illustration/delivery.png')}
        />
        <Text style={styles.emptyOrderText}>
          Bạn chưa có đơn hàng nào 😭😭😭
        </Text>
      </View>
    );

    const orderList = (
      <View>
        <Text>Order 1</Text>
        <Text>Order 2</Text>
        <Text>Order 3</Text>
      </View>
    );

    return (
      <Tabs tabs={tabs}>
        <View>
          {
            productsInCart.length > 0 ? productCart : emptyCart
          }
        </View>
        <View>
          {
            false ? orderList : emptyOrder
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

export default connect(mapStateToProps)(OrderListScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  emptyOrder: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 2
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