import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { NotificationList } from '../../components/Genneral/Notification';

class NotificationListScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NotificationList />
      </View>
    );
  }
}
export default NotificationListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});