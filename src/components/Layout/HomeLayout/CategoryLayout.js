import React, { Component } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { withNavigation } from 'react-navigation';
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
          {
            this.state.data.map(category => (
              <TouchableOpacity
                onPress={() => {
                  const { navigation } = this.props;
                  navigation.push('Category', category);
                }}
              >
                <Category
                  imageUrl={require("../../../../assets/home.jpg")}
                  categoryTitle={category}
                />
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      </View>
    );
  }
}
export default withNavigation(CategoryLayout);

const styles = StyleSheet.create({
  container: {
    height: 150,
    marginTop: 20
  }
});
