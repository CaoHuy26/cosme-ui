import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { OrderList } from '../../../components/Genneral/Order';

class OrderListScreen extends Component {

  render() {
    return (
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <OrderList
            orders={this.props.orders}
          />
        </ScrollView>
      </View>
    );
  }
}

export default OrderListScreen;