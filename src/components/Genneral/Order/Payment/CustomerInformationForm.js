import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Field, reduxForm } from 'redux-form';

const renderInput = ({ labelName, keyboardType }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={{marginBottom: 3}}>
        {labelName}
      </Text>
      <TextInput
        style={styles.input}
        keyboardType={keyboardType}
      />
    </View>
    
  )
}

const CustomerInformationForm = props => {
  return (
    <View style={styles.container}>
      <Field 
        name='customerName'
        labelName='Họ tên khách hàng'
        keyboardType='default'
        component={renderInput}
      />
      
      <Field 
        name='customerAddress'
        labelName='Địa chỉ'
        keyboardType='default'
        component={renderInput}
      />
      
      <Field 
        name='customerPhoneNumber'
        labelName='Số điện thoại'
        keyboardType='default'
        component={renderInput}
      />
    </View>
  )
};

export default reduxForm({
  form: 'customerInfomation'
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