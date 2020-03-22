import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class UserOrderHistoryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>UserOrderHistoryScreen</Text>
      </View>
    );
  }
}
export default UserOrderHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});