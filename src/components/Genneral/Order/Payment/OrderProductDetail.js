import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import commonStyles from '../../../../styles/common';
import formatToVND from "../../../../utils/formatToVND";

class OrderProductDetail extends Component {
  /**
   * this.props.orderProductDetail
   * @param {string} imageUrl
   * @param {string} name
   * @param {number} price
   * @param {number} quantity
   */
  render() {
    const { imageUrl, name, price, quantityOrder } = this.props.orderProductDetail;
    return (
      <View style={styles.orderDetail}>
        <View style={{flex: 3, flexDirection: 'row'}}>
          <View style={{flex: 1, padding: 5}}>
            <Image 
              style={commonStyles.imageThumbnail}
              source={require('../../../../assets/product/fake_product4.jpg')}
            />
          </View>
          <View style={{
            flex: 2,
            justifyContent: 'space-evenly',
            paddingHorizontal: 10
          }}>
            <Text>{name}</Text>
            <Text>{formatToVND(Number(price))}</Text>
            <Text>{`Số lượng: ${quantityOrder}`}</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default OrderProductDetail;

const styles = StyleSheet.create({
  orderDetail: {
    height: 100,
    backgroundColor: 'white',
    marginTop: 15
  }
});