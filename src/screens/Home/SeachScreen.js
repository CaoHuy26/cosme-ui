import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ProductList } from '../../components/Genneral/Home/Product';

import axios from 'axios';

const SearchScreen = (props) => {
  const productName = props.navigation.state.params;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`http://localhost:3000/search?name=${productName}`);
      
      // Lọc dữ liệu trả về từ elastic thành đúng chuẩn của product
      let products = [];
      res.data.products.map(product => products.push(product._source));
      
      setProducts(products);
    }
    fetchData()
  }, []);

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', margin: 20}}>
        <Text style={styles.text}>
          Tìm kiếm: {productName}
        </Text>
      </View>
      <ProductList products={products}/>
    </View>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 20,
    fontWeight: "500"
  }
});