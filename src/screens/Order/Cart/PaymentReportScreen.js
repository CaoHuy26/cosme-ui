import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { withNavigation } from 'react-navigation';
import { CustomButton } from '../../../components/Genneral/Common';

class PaymentReportScreen extends Component {
  _backToHomePage = () => {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Đặt hàng thành công</Text>

        <CustomButton
          title='Tiếp tục mua sắm'
          onPress={this._backToHomePage}
        />
      </View>
    );
  }
}

export default withNavigation(PaymentReportScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});