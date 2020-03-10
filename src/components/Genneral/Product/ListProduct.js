import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Product from './Product';

class ListProduct extends Component {
  render() {
    return (
      <View style={styles.container}>
        {
          this.props.products.map(product => (
            <Product
              key={product.id}
              {...product}
              // TODO: Change imageUrl
              imageUrl={require('../../../assets/product/fake_product2.jpg')}
            />
          ))
          }
      </View>
    );
  }
}
export default ListProduct;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
});