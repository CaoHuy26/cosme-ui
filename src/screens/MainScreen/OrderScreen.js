import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Dimensions, ScrollView } from "react-native";
import OrderList from "../../components/Genneral/Order/OrderList";

const { width } = Dimensions.get('window');

class OrderScreen extends Component {
  render() {
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
            <Text>300.000 VND</Text>
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
}
export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    width: width - 40,
    height: 50,
    backgroundColor: 'pink',
    borderRadius: 10
  }
});