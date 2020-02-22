import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";
import { DataTable } from 'react-native-paper';

class NewsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>News Screen</Text>
      </View>
    );
  }
}
export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});