import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import commonStyles from '../../../../styles/common';
import { phoneNumber } from '../../../../constants/regExr';
import { PAYMENT_FORM } from '../../../../constants/formName';

const submitForm = values => {
  alert(`Order success: ${JSON.stringify(values)}`);
};

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

const ButtonHandleSubmitForm = props => {
  // handleSubmit[Function]: A property of redux-form
  const { handleSubmit } = props;
  console.log(`PROPS: ${JSON.stringify(props, null, 4)}`)
  return (
    <View style={styles.container}>
      <View style={commonStyles.button}>
        <View style={{
          flex: 1,
          justifyContent: 'center'
        }}>
          <Button
            color={props.color ? props.color : 'white'}
            title={props.title}
            onPress={handleSubmit(submitForm)}
          />
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cartReducers
  }
};

export default connect(mapStateToProps)(reduxForm({
  form: PAYMENT_FORM,
  validate
})(ButtonHandleSubmitForm));

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});