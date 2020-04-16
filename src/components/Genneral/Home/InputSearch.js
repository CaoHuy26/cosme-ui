import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';

const InputSearch = (props) => {
  const [productName, setProductName] = useState('');

  const _onSearch = () => {
    props.navigation.push('Search', productName);
    setProductName('');
  };

  return (
      <View style={{ height: 80 }}>
        <View style={styles.inputSearch}>
          <TextInput
            keyboardType="web-search"
            style={{ flex: 1 }}
            placeholder="What are you looking for?"
            onChangeText={name => setProductName(name)}
            value={productName}
          />
          <TouchableOpacity
            onPress={() => _onSearch()}
          >
            <Icon name="ios-search" size={24} style={{ marginRight: 10 }} />
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default withNavigation(InputSearch);

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