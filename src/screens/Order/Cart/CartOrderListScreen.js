import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { OrderList } from '../../../components/Genneral/Order';
import { CustomButton } from '../../../components/Genneral/Common';
import formatToVND from '../../../utils/formatToVND';

const { height } = Dimensions.get('window');

class CartOrderListScreen extends Component {
  render() {
    const { productsInCart } = this.props.cart;
    let totalMoney = 0;
    for (let i = 0; i < productsInCart.length; i++) {
      totalMoney += Number(productsInCart[i].price) * productsInCart[i].quantityOrder
    }

    return (
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
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cartReducers
  }
};

export default connect(mapStateToProps)(withNavigation(CartOrderListScreen));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});