import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";

class NotificationScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>NotificationScreen</Text>
      </View>
    );
  }
}
export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});