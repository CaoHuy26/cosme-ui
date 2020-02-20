import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,
  TextInput
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

class Search extends Component {
  render() {
    return (
        <View style={{ height: 80 }}>
          <View style={styles.inputSearch}>
            <Icon name="ios-search" size={24} style={{ marginRight: 10 }} />
            <TextInput
              placeholder="What are you looking for?"
              style={{ flex: 1 }}
            />
          </View>
        </View>
    );
  }
}
export default Search;

const styles = StyleSheet.create({
  inputSearch: {
    flexDirection: "row",
    padding: 10,
    marginTop: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 10
  }
});