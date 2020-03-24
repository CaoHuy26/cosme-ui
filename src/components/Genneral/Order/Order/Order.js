import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from 'react-navigation';
import formatToVND from '../../../../utils/formatToVND'; 

class Order extends Component {
  /**
   * ORDER PROPS: {
      "id": "7c7d607c-6fd1-4e94-88d6-d7269bfabe7a",
      "receiverName": "Adas",
      "receiverPhone": "3343434344",
      "shippingAddress": "Dasdsa",
      "shippingDate": "2020-03-19T04:15:33.000Z",
      "comment": null,
      "total": "23232",
      "createdAt": "2020-03-19T04:15:33.000Z",
      "name": "323",
      "price": "23232",
      "navigation": {
          "state": {
              "routeName": "MainOrder",
              "key": "id-1585027849278-2"
          },
          "actions": {}
      }
    }
   */
  render() {
    const { id, createdAt, total } = this.props;
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('OrderDetail')}
      >
        <View style={styles.cart}>
          <Text style={styles.statusOrderText}>
            Tình trạng
          </Text>

          <Text>
            Mã đơn hàng: {id}
          </Text>

          <Text style={styles.timeOrder}>
            {createdAt}
          </Text>
          
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Tổng cộng</Text>
            <Text>{formatToVND(Number(total))}</Text>
          </View>

        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(Order);

const styles = StyleSheet.create({
  cart: {
    height: 150,
    marginTop: 15,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-around'
  },
  statusOrderText: {
    color: 'red',
    fontSize: 18,
    fontWeight: '500'
  },
  timeOrder: {
    color: '#9d9ea0',
    fontSize: 12
  },
});