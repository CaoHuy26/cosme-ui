import React, { Component } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { ProductLayout } from "../../components/Layout/HomeLayout";

class ProductListScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{
          alignItems: 'center',
          marginTop: 20
        }}>
          <Text>
            Category Name: {this.props.navigation.state.params.name.vn}
          </Text>
        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: 50,
          marginVertical: 15
        }}>
          <View style={styles.button}>
            <Button
              title='Sắp xếp'
              color='white'
              onPress={() => alert('Sắp xếp')}
            />
          </View>
          
          <View style={styles.button}>
            <Button 
              title='Lọc'
              color='white'
              onPress={() => alert('Lọc')}
            />
          </View>
        </View>


        <ProductLayout />
      </View>
    );
  }
}
export default ProductListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: 150,
    backgroundColor: 'pink',
    borderRadius: 20
  }
});