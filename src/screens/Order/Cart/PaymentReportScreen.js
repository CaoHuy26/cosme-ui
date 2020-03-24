import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { withNavigation } from 'react-navigation';
import { CustomButton } from '../../../components/Genneral/Common';

class PaymentReportScreen extends Component {
  _backToHomePage = () => {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.successImage}
            source={require('../../../assets/illustration/success.png')}
          />
        </View>

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
  },
  successImage: {
    width: 250,
    height: 250
  }
});