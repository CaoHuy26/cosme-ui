import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Button } from "react-native";
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import productActions from '../../../actions/productActions';
import Product from "../../Product";

import axios from 'axios';

const initialProductData = [
  {
    name: "SILKYGIRL TRULY NUDE",
    price: "400.000 VND",
    rating: 4,
    image: require('../../../assets/product/fake_product1.jpg'),
    description: 
      `Eiusmod id irure magna eiusmod aute nisi non occaecat. Et ad culpa voluptate ut veniam duis occaecat id reprehenderit laboris qui voluptate anim nostrud. Culpa commodo ut aliqua aliquip reprehenderit cupidatat anim proident velit culpa. Adipisicing cupidatat consectetur Lorem proident elit proident minim aliqua incididunt aliqua laborum voluptate reprehenderit. Proident irure cupidatat culpa id ea qui reprehenderit non aliquip ea tempor quis.
    Eu fugiat sit qui tempor laborum. Ullamco enim duis incididunt eu enim non velit magna exercitation non qui aliqua proident. Fugiat dolor pariatur dolor cupidatat qui laboris aute ullamco deserunt est amet sunt sint. Incididunt ad nulla amet exercitation nisi aute.
    Ullamco proident nulla deserunt nulla enim. Laborum consequat reprehenderit irure occaecat sit esse voluptate laborum irure cillum deserunt. Aliqua sit exercitation mollit reprehenderit. Cillum laboris in non non voluptate pariatur dolor tempor eiusmod do. Voluptate ad ullamco anim sunt exercitation. Commodo labore qui minim in esse est consequat dolore ipsum in anim magna commodo cillum.
    Elit sit fugiat sit fugiat non. Proident esse velit proident mollit duis mollit fugiat in aliqua nostrud ad ex ullamco. Consectetur dolore est esse aliquip dolore dolore officia dolore occaecat qui ad laboris.
    Est pariatur aute magna aute mollit culpa eu aute. Do reprehenderit dolor et magna esse. Sint sint eiusmod in est velit id in.`
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
  }
];

class ProductLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: true,
      products: [],
      page: 1
    };
  }

  componentDidMount() {
    this.props.getProducts(this.state.page);
    const { products, isFetching } = this.props.productData
    this.setState({
      isFetching: false, // this.props.productData.isFetching
      products: this.state.products.concat(products)
    });
  };

  // TODO: Learn component lifecycle and use here

  getData() {
    this.props.getProducts(this.state.page);
    const { products } = this.props.productData;
    this.setState({
      isFetching: false,
      products: this.state.products.concat(products)
    });
  };

  handleLoadMore () {
    this.setState(
      {
        isFetching: true,
        page: this.state.page + 1
      }, 
      this.getData
    );
  };

  render() {
    if (this.state.isFetching) {
      return (
        <View>
          <ActivityIndicator size="small" color="pink" />
        </View>
      )
    }
    else {
      return (
        <View style={styles.container}>
          {
            this.state.products.map(product => (
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
          
          
          <View style={{marginVertical: 20}}>
            <Button
              title='Xem thêm'
              onPress={() => this.handleLoadMore()}
            />
          </View>
          
        </View>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    productData: state.productReducers
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: (page) => dispatch(productActions.getProducts(page))
  }
}

// withNavigation: Access the navigation props to any component
export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(ProductLayout));

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
});
