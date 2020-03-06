import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { withNavigation } from 'react-navigation';
import { Product } from '../Common';

class ListProduct extends Component {
  render() {
    return (
      <View style={styles.container}>
        {
          this.props.products.map(product => (
            <TouchableOpacity
              key={product.id}
              onPress={() => {
                const { navigation } = this.props;
                navigation.push('ProductDetail', product);
              }}
            >
              <Product
                imageUrl={require('../../../assets/product/fake_product2.jpg')}
                name={product.name}
                price={product.price}
                rating={product.rating}
              />
            </TouchableOpacity>
          ))
          }
      </View>
    );
  }
}
export default withNavigation(ListProduct);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
});