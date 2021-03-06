import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { connect } from 'react-redux';
import cartActions from '../../actions/cartActions';
import { ProductDetail, ProductLayout } from '../../components/Genneral/Home/Product';
import CustomButton from "../../components/Genneral/Common/CustomButton";

class ProductDetailScreen extends Component {
  _onAddToCart = (product) => {
    this.props.addToCart(product);
    alert(`Add to cart: ${product.name}`);
  };

  render() {
    const product = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
        >
          {/* Product Detail */}
          <ProductDetail product={product} />

          {/* Product has been seeen */}
          <View style={{ marginTop: 40 }}>
            <Text style={[styles.textTitle, {paddingHorizontal: 20}]}>Sản phẩm đã xem</Text>
            <ProductLayout />
          </View>

          {/* Product similar */}
          <View style={{ marginTop: 40 }}>
            <Text style={[styles.textTitle, {paddingHorizontal: 20}]}>Sản phẩm tương tự</Text>
            <ProductLayout />
          </View>    
        </ScrollView>

        {/* Button */}
        <View style={{paddingVertical: 20}}>
          <CustomButton 
            title='Thêm vào giỏ hàng'
            onPress={() => this._onAddToCart(product)}
          />
        </View>

      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    carts: state.cartReducers
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (product) => dispatch(cartActions.addToCart(product))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "500",
    marginVertical: 10
  }
});