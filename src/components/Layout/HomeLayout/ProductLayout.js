import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Product from "../../Product";

const fakeDataProduct = [
  {
    name: "Item 1",
    price: "20$",
    rating: 4
  },
  {
    name: "Item 2",
    price: "43$",
    rating: 4
  },
  {
    name: "Item 3",
    price: "54$",
    rating: 4
  }
];

class ProductLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      dataSource: fakeDataProduct
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     isLoading: false,
  //     dataSource: fakeDataProduct
  //   });
  // }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          {
            this.state.dataSource.map(product => (
              <Product
                imageUrl={require("../../../../assets/home.jpg")}
                name={product.name}
                price={product.price}
                rating={product.rating}
              />
            ))
          }
        </View>
      );
    }
  }
}
export default ProductLayout;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
});
