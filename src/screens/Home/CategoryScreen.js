import React, { Component } from "react";
import { 
  View,
  StyleSheet,
  Button,
} from "react-native";
import { ProductLayout } from "../../components/Layout/HomeLayout";

class CategoryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
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
export default CategoryScreen;

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