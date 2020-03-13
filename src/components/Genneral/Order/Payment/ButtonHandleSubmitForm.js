import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";
import commonStyles from '../../../../styles/common';

class ButtonHandleSubmitForm extends Component {
  render() {
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
              onPress={this.props.handleSubmit}
            />
          </View>
        </View>
      </View>
    );
  }
}
export default ButtonHandleSubmitForm;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});