import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import formatToVND from "../../../utils/formatToVND";
import cartActions from '../../../actions/cartActions';

class Order extends Component {
  /**
   * this.props.orderProduct
   * @param {string} id
   * @param {string} imageUrl
   * @param {string} name
   * @param {number} price
   * @param {number} quantityOrder
   * 
  */

   _onIncrease = (orderProductId) => {
    this.props.increaseQuantityOrderProduct(orderProductId);
   }

   _onDecrease = (orderProductId) => {
    this.props.decreaseQuantityOrderProduct(orderProductId);
   }

  render() {
    const { id, imageUrl, name, price, quantityOrder } = this.props.orderProduct;
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
              <Text style={{paddingHorizontal: 10}}>{name}</Text>
              <Text style={{paddingHorizontal: 10}}>{formatToVND(Number(price))}</Text>
            </View>
          </View>

          {/* LEFT */}
          <View style={{flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
            <TouchableOpacity
              onPress={() => this._onIncrease(id)}
            >
              <Icon name='md-arrow-dropup' size={32}/>
            </TouchableOpacity>
            
            <Text>{quantityOrder}</Text>

            <TouchableOpacity
              onPress={() => this._onDecrease(id)}
            >
             <Icon name='md-arrow-dropdown' size={32}/>
            </TouchableOpacity>
          </View>

        </View>
      </View>      
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseQuantityOrderProduct:
      (orderProductId) => dispatch(
        cartActions.increaseQuantityOrderProduct(orderProductId)
      ),
    decreaseQuantityOrderProduct:
      (orderProductId) => dispatch(
        cartActions.decreaseQuantityOrderProduct(orderProductId)
      )
  }
};

export default connect(null, mapDispatchToProps)(Order);

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