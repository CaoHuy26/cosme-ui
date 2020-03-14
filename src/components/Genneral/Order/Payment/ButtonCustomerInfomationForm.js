import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import commonStyles from '../../../../styles/common';
import { phoneNumber } from '../../../../constants/regExr';
import { CUSTOMER_INFOMATION_FORM } from '../../../../constants/formName';

const validate = values => {
  const errors = {};
  if (!values.customerName) {
    errors.customerName = 'Required';
  }
  if (!values.customerAddress) {
    errors.customerAddress = 'Required';
  }
  if (!values.customerPhoneNumber) {
    errors.customerPhoneNumber = 'Required';
  }
  else if (!phoneNumber.test(values.customerPhoneNumber)) {
    errors.customerPhoneNumber = 'Invalid phone number';
  }

  return errors;
}; 

class ButtonHandleSubmitForm extends Component {
  render() {
    // handleSubmit[Function]: A property of redux-form
    const { handleSubmit } = this.props;
    const { productsInCart } = this.props.cart;

    submitForm = customerInfo => {
      alert(`Order success: ${JSON.stringify({customerInfo, productsInCart})}`);
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
    cart: state.cartReducers
  }
};

export default connect(mapStateToProps)(reduxForm({
  form: CUSTOMER_INFOMATION_FORM,
  validate
})(ButtonHandleSubmitForm));

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});