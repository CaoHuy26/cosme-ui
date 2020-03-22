import React, { Component } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { withNavigation } from 'react-navigation';
import Category from './Category';
import CATEGORY from '../../../constants/category';

class CategoryList extends Component {  
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            CATEGORY.map(category => (
              <TouchableOpacity
                key={category.id}
                onPress={() => {
                  const { navigation } = this.props;
                  navigation.push('Category', category);
                }}
              >
                <Category
                  imageUrl={category.uri}
                  categoryTitle={category.name.en}
                />
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      </View>
    );
  }
}
export default withNavigation(CategoryList);

const styles = StyleSheet.create({
  container: {
    height: 150,
    marginTop: 20
  }
});