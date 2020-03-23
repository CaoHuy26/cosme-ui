import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { InputSearch, SliderNews, CategoryList } from '../../components/Genneral/Home';
import { ProductLayout } from '../../components/Genneral/Home/Product';

class HomeScreen extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isLoading: true,
    }
  }


  componentDidMount() {
    setTimeout(() => this.setState({
      isLoading: false
    }), 0)   
  }
  
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ActivityIndicator size="large" color="pink" />
        </View>
      )
    }
    else {
      return (
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            {/* INPUT SEARCH */}
            <InputSearch />

            <ScrollView>
              <View style={{ flex: 1, paddingTop: 20 }}>
                {/* NEWS SLIDE */}
                <View>
                  <Text style={styles.textTitle}>News</Text>
                  <SliderNews />
                </View>

                {/* CATEGORY */}
                <View style={{ marginTop: 40 }}>
                  <Text style={styles.textTitle}>Category</Text>
                  <CategoryList />
                </View>

                {/* PRODUCTS */}
                <View style={{ marginTop: 40 }}>
                  <Text style={styles.textTitle}>Products</Text>
                  <ProductLayout />
                </View> 
              </View>
            </ScrollView>
          </View>
        </View>
      );
    }
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "500",
    paddingHorizontal: 20
  }
});
