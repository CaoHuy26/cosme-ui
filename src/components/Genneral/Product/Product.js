import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import StarRating from "react-native-star-rating";
import Icon from "react-native-vector-icons/Ionicons";
import { withNavigation } from 'react-navigation';

const { width } = Dimensions.get("window");

class Product extends Component {

  _onRedirectToProductDetail = (navigation, product) => {
    navigation.push('ProductDetail', product);
  };

  _onAddToCart = () => {
    alert(`Add to cart: ${this.props.name}`);
  };

  render() {
    // TODO: Add more product info here
    const { navigation } = this.props;
    const { name, price, rating, imageUrl } = this.props;
    const product = {
      imageUrl,
      name,
      price,
      rating
    };

    return (
      <View style={styles.productCard}>
        <View style={{ flex: 1 }}>
          <Image 
            source={this.props.imageUrl} 
            style={styles.imageThumbnail}
          />
        </View>

        <View style={styles.info}>
          <View
            style={{
              flex: 4,
              alignItems: "flex-start",
              justifyContent: "space-evenly"
            }}
          >
            <TouchableOpacity
              key={this.props.id}
              onPress={() => this._onRedirectToProductDetail(navigation, product)}
            >
              <Text style={styles.productName}>
                {this.props.name}
              </Text>
            </TouchableOpacity>
            
            <Text>{this.props.price}</Text>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={this.props.rating}
              starSize={10}
            />
          </View>

          <View
            style={{
              flex: 1,
              alignSelf: "flex-end",
              paddingBottom: 5
            }}
          >
            <TouchableOpacity
              onPress={() => this._onAddToCart()}
            >
              <Icon name="ios-cart" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default withNavigation(Product);

const styles = StyleSheet.create({
  productCard: {
    width: width / 2 - 30,
    height: width / 2 - 30,
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: "#dddddd"
  },
  imageThumbnail: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  },
  info: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 10
  },
  productName: {
    color: "#b63838",
    fontWeight: "bold"
  }
});
