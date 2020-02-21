import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";

class CategoryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>CategoryScreen</Text>
      </View>
    );
  }
}
export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});