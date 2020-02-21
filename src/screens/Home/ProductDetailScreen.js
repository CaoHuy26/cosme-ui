import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Button
} from "react-native";
import StarRating from "react-native-star-rating";

import { ProductLayout } from '../../components/Layout/HomeLayout';

const { width } = Dimensions.get('window');

class ProductDetail extends Component {
  render() {
    const product = this.props.navigation.state.params;
    /* 
      <Text>Product Name: {product.name}</Text>
      <Text>Product Price: {product.price}</Text>
      <Text>Product Rating: {product.rating}</Text>
    */
    return (
      <View style={styles.container}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
        >
          {/* Image */}
          <View style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <View style={{
              width: width - 100,
              height: 250,
            }}>
              <Image 
                source={require('../../../assets/home.jpg')}
                style={styles.imageThumbnail}
              />
            </View>
          </View>
          
          <View style={{paddingHorizontal: 20}}>
            {/* Info */}
            <View>
              <Text>{product.name}</Text>
              <Text>{product.price}</Text>
              <StarRating
                disabled={true}
                maxStars={5}
                rating={product.rating}
                starSize={10}
              />
              {/* TODO: Add more info here */}
              <Text>More info here....</Text>
            </View>
          </View>

          {/* Product has been seeen */}
          <View style={{ marginTop: 40 }}>
            <Text style={styles.textTitle}>Sản phẩm đã xem</Text>
            <ProductLayout />
          </View>

          {/* Product similar */}
          <View style={{ marginTop: 40 }}>
            <Text style={styles.textTitle}>Sản phẩm tương tự</Text>
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
export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "500",
    paddingHorizontal: 20
  },
  imageThumbnail: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  button: {
    width: width - 40,
    height: 50,
    backgroundColor: 'pink',
    borderRadius: 10
  }
});