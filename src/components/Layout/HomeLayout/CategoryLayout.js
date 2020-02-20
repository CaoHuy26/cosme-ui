import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Category from '../../Category';

class CategoryLayout extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      data: ['Home', 'Experience', 'Restaurent']
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {this.state.data.map(category => (
            <Category
              imageUrl={require("../../../../assets/home.jpg")}
              categoryTitle={category}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
export default CategoryLayout;

const styles = StyleSheet.create({
  container: {
    height: 150,
    marginTop: 20
  }
});
