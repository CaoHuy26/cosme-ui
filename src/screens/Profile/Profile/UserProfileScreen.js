import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class UserProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>UserProfileScreen</Text>
      </View>
    );
  }
}
export default UserProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});