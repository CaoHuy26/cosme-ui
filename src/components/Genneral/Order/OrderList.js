import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Order from "./Order";

const fakeOrderData = [
  {
    id: '1',
    productName: 'Product name loremas iospdo',
    price: '20.000 VND',
    imageUrl: ''
  },
  {
    id: '2',
    productName: 'Laosdpe soewpoewds slsdm',
    price: '40.000 VND',
    imageUrl: ''
  },
  {
    id: '3',
    productName: 'Lorem ipsum dolor sit amet',
    price: '240.000 VND',
    imageUrl: ''
  }
];

class OrderList extends Component {
  render() {
    if (fakeOrderData.length > 0) {
      return (
        <View style={styles.container}>
          <FlatList 
            data={fakeOrderData}
            renderItem={({item, index}) => (
              <Order order={item}/>
            )}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      );
    }
    else {
      return (
        <View style={styles.emptyOrder}>
          <Text>Không có đơn hàng nào 😭</Text>
        </View>
      )
    }
  }
}
export default OrderList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  emptyOrder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});