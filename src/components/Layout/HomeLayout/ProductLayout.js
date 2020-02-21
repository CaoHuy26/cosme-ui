import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from 'react-navigation';
import Product from "../../Product";

const fakeDataProduct = [
  {
    name: "SILKYGIRL TRULY NUDE",
    price: "400.000 VND",
    rating: 4,
    image: require('../../../assets/product/fake_product1.jpg')
  },
  {
    name: "MATTE LIP LIQUID",
    price: "300.000 VND",
    rating: 3,
    image: require('../../../assets/product/fake_product2.jpg')
  },
  {
    name: "Shower Gel Olive 60ML",
    price: "250.000 VND",
    rating: 4,
    image: require('../../../assets/product/fake_product3.jpg')
  },
  {
    name: "Colour Crush canberra tulip",
    price: "420.000 VND",
    rating: 5,
    image: require('../../../assets/product/fake_product4.jpg')
  },
  {
    name: "Shower Cream 250ML",
    price: "350.000 VND",
    rating: 4,
    image: require('../../../assets/product/fake_product5.jpg')
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
              <TouchableOpacity
                onPress={() => {
                  const { navigation } = this.props;
                  navigation.push('ProductDetail', product);
                }}
              >
                <Product
                  imageUrl={product.image}
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
}

// withNavigation: Access the navigation props to any component
export default withNavigation(ProductLayout);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
});
