import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import commonStyles from '../../styles/common';
// import { ButtonHandleSubmitForm } from "../../components/Genneral/Order/Payment";
import { CustomButton } from '../../components/Genneral/Common' 
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
          <CustomButton
            title="Đặt hàng"
            onPress={() => alert('Đặt hàng thành công')}
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