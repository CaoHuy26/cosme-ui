import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Button
} from "react-native";

import { ProductLayout } from '../../components/Layout/HomeLayout';
import { ProductDetail } from '../../components/Genneral/Product';

const { width } = Dimensions.get('window');

class ProductDetailScreen extends Component {
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
        <View style={{ 
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 20
        }}>
          <View style={styles.button}>
            <View style={{
              flex: 1,
              justifyContent: 'center'
            }}>
              <Button
                title='Thêm vào giỏ hàng'
                color='white'
                onPress={() => alert('Đã thêm hàng vào giỏ')}
              />
            </View>
          </View>
        </View>

      </View>
    );
  }
}
export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "500",
    marginVertical: 10
  },
  button: {
    width: width - 40,
    height: 50,
    backgroundColor: 'pink',
    borderRadius: 10
  }
});