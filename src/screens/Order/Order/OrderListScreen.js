import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { OrderList } from '../../../components/Genneral/Order';

const { height } = Dimensions.get('window');

class OrderListScreen extends Component {
  render() {
    return (
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <OrderList />
        </ScrollView>
      </View>
    );
  }
}


export default OrderListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});