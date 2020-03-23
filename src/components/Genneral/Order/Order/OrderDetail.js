import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { OrderProductDetailList, TotalAmount } from '../Payment';
import commonStyles from '../../../../styles/common';

class OrderDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View style={{marginTop: 15}}>
            <Text style={commonStyles.textTitle}>
              Thông tin đơn hàng
            </Text>
            <OrderProductDetailList />
          </View>

          <View>
            <TotalAmount />
          </View>

        </ScrollView>
      </View>
    );
  }
}
export default OrderDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});