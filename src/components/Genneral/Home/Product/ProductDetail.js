import React, { Component } from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import StarRating from "react-native-star-rating";
import ProductDataTable from "./ProductDataTable";

const { width } = Dimensions.get("window");

class ProductDetail extends Component {
  render() {
    const { product } = this.props;

    return (
      <View style={styles.container}>
        {/* Image */}
        <View style={{ justifyContent: "center", alignItems: "center"}}>
          <View style={{
            width: width - 100,
            height: 250
          }}>
            <Image source={product.image} style={styles.imageThumbnail} />
          </View>
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          {/* Info */}
          <View style={{ paddingTop: 20 }}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
            {/* <StarRating
              disabled={true}
              maxStars={5}
              rating={product.rating}
              starSize={10}
            /> */}
            <View>
              <Text style={styles.textTitle}>Mô tả</Text>
              <Text>{product.description}</Text>
            </View>
          </View>

          <View>
            <Text style={styles.textTitle}>Thông tin chi tiết</Text>
            <ProductDataTable />
          </View>
        </View>
      </View>
    );
  }
}
export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "500",
    marginTop: 20,
    marginBottom: 10
  },
  imageThumbnail: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  },
  productName: {
    fontSize: 30,
    fontWeight: "600",
    paddingBottom: 15
  },
  productPrice: {
    fontSize: 24,
    color: "pink"
  }
});