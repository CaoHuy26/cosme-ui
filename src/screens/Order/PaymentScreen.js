import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import commonStyles from '../../styles/common';
import { ButtonCustomerInfomationForm } from "../../components/Genneral/Order/Payment";
import { OrderProductDetailList, TotalAmount, CustomerInformationForm} from "../../components/Genneral/Order/Payment";

class PaymentScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginTop: 15}}>
            <Text style={commonStyles.textTitle}>
              Thông tin khách hàng
            </Text>
            <CustomerInformationForm />
          </View>
          
          <View style={{marginTop: 15}}>
            <Text style={commonStyles.textTitle}>
              Thông tin đơn hàng
            </Text>
            <OrderProductDetailList />
          </View>

          <View>
            <TotalAmount />
          </View>
        </ScrollView>
        
        <View style={{padding: 20}}>
          <ButtonCustomerInfomationForm
            title="Đặt hàng"
          />
        </View>

      </View>
    );
  }
}
export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20
  }
});