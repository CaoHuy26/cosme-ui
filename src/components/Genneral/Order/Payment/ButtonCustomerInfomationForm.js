import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation'
import { reduxForm } from 'redux-form';
import commonStyles from '../../../../styles/common';
import { phoneNumber } from '../../../../constants/regExr';
import { CUSTOMER_INFOMATION_FORM } from '../../../../constants/formName';
import orderActions from '../../../../actions/orderActions';
import cartActions from "../../../../actions/cartActions";
import notificationActions from "../../../../actions/notificationActions";

const validate = values => {
  const errors = {};
  if (!values.receiverName) {
    errors.receiverName = 'Required';
  }
  if (!values.shippingAddress) {
    errors.shippingAddress = 'Required';
  }
  if (!values.receiverPhone) {
    errors.receiverPhone = 'Required';
  }
  else if (!phoneNumber.test(values.receiverPhone)) {
    errors.receiverPhone = 'Invalid phone number';
  }

  return errors;
}; 

class ButtonHandleSubmitForm extends Component {
  render() {
    // handleSubmit[Function]: A property of redux-form
    const { handleSubmit } = this.props;
    
    const { productsInCart } = this.props.cart;
    let totalOrder = 0;
    for (let i = 0; i < productsInCart.length; i++) {
      totalOrder += Number(productsInCart[i].price) * productsInCart[i].quantityOrder;
    }
    let discount = 0;
    let transportFee = 0;
    const totalMoney = totalOrder - discount + transportFee;

    submitForm = receiver => {
      const newOrder = {
        userId: 'b93e7a50-fa66-406d-9fae-ce912d7bda7f', //FIXME: change userId
        receiverName: receiver.receiverName,
        receiverPhone: receiver.receiverPhone,
        shippingAddress: receiver.shippingAddress,
        shippingDate: new Date(), //FIXME: change date
        total: totalMoney,
        products: productsInCart
      };
      const notification = {
        userId: 'b93e7a50-fa66-406d-9fae-ce912d7bda7f', //FIXME: change userId
        notification: 'Đặt hàng thành công',
        time: new Date()
      };

      // TODO: Fix auto generate 2 notifications
      this.props.createOrder(newOrder, notification);

      this.props.removeAllCart();
      this.props.navigation.replace('PaymentReport');
    };
    
    return (
      <View style={styles.container}>
        <View style={commonStyles.button}>
          <View style={{
            flex: 1,
            justifyContent: 'center'
          }}>
            <Button
              color={this.props.color ? this.props.color : 'white'}
              title={this.props.title}
              onPress={handleSubmit(submitForm)}
            />
          </View>
        </View>
      </View>
    );
  }
};

const mapStateToProps = state => {
  return {
    cart: state.cartReducers,
    user: state.loginReducers,
    order: state.orderReducers
  }
};

const mapDispatchToProps = dispatch => {
  return {
    createOrder: (order, notification) => {
      dispatch(orderActions.createOrder(order));
      dispatch(notificationActions.createNotification(notification))
    },
    removeAllCart: () => dispatch(cartActions.removeAllCart()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: CUSTOMER_INFOMATION_FORM,
  validate
})(withNavigation(ButtonHandleSubmitForm)));

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});