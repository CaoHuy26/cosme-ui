import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from 'react-redux';
import Order from './Order';

const fakeData = [
  {
    id: '1',
    title: '1'
  },
  {
    id: '2',
    title: '2'
  },
  {
    id: '3',
    title: '2'
  }
]

class OrderList extends Component {
  render() {
    return (
      <View style={styles.container}>
        {
          fakeData.map(order => (
            <Order
              key={order.id}
            />
          ))
        }
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
};

export default connect(mapStateToProps)(OrderList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  }
});