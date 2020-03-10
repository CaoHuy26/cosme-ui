import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

class Order extends Component {
  render() {
    console.log(`ORDER PROPS: ${JSON.stringify(this.props, null, 4)}`)
    return (
      <View style={styles.order}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          {/* RIGHT */}
          <View style={{flex: 3, flexDirection: 'row'}}>
            {/* IMAGE */}
            <View style={{flex: 1, padding: 5}}>
              <Image 
                style={styles.imageThumbnail}
                source={require('../../../assets/product/fake_product1.jpg')}
              />
            </View>

            {/* INFO */}
            <View style={{flex: 2, justifyContent: 'space-between', paddingVertical: 15}}>
              <Text style={{paddingHorizontal: 10}}>{this.props.order.productName}</Text>
              <Text style={{paddingHorizontal: 10}}>{this.props.order.price}</Text>
            </View>
          </View>

          {/* LEFT */}
          <View style={{flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
            <TouchableOpacity>
              <Icon name='md-arrow-dropdown' size={32}/>
            </TouchableOpacity>
            
            <Text>1</Text>
            <TouchableOpacity>
             <Icon name='md-arrow-dropup' size={32}/>
            </TouchableOpacity>
          </View>

        </View>
      </View>      
    );
  }
}
export default Order;

const styles = StyleSheet.create({
  order: {
    marginTop: 15,
    height: 100,
    backgroundColor: 'white'
  },
  imageThumbnail: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  },
});