import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Field, reduxForm } from 'redux-form';
import { CUSTOMER_INFOMATION_FORM } from '../../../../constants/formName';

/**
 * input prop: 
 * The props under the input key are what connects your input component to Redux 
 * and are meant to be destructured into your <input/> component
 */
const renderInputField = ({
  input,
  labelName,
  keyboardType,
  meta: { touched, error, warning }
}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={{marginBottom: 5}}>
        {labelName}
      </Text>
      <TextInput
        {...input}
        style={styles.input}
        keyboardType={keyboardType ? keyboardType : 'default'}
      />
      {
        touched && 
        (
          (error && <Text style={{color: 'red', marginTop: 5}}>{error}</Text>) ||
          (warning && <Text>{warning}</Text>)
        )
      }
    </View>
  )
};

const CustomerInformationForm = props => {
  return (
    <View style={styles.container}>
      <Field 
        name='customerName'
        labelName='Họ tên khách hàng'
        component={renderInputField}
      />
      
      <Field 
        name='customerAddress'
        labelName='Địa chỉ'
        component={renderInputField}
      />
      
      <Field 
        name='customerPhoneNumber'
        labelName='Số điện thoại'
        keyboardType='phone-pad'
        component={renderInputField}
      />

      {/* TODO: Add DatePicker */}
    </View>
  )
};

export default reduxForm({
  form: CUSTOMER_INFOMATION_FORM // a unique identifier for this form
})(CustomerInformationForm);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    borderWidth: 1,
    borderColor: 'steelblue',
    height: 34,
    padding: 5
  },
  wrapper: {
    marginTop: 10
  }
});