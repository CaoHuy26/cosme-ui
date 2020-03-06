import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.element}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Register')}
          >
            <Text>
              Đăng ký
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.element}>
         <Text>Thông tin tài khoản</Text>
        </View>

        <View style={styles.element}>
         <Text>Thông tin đơn hàng</Text>
        </View>

        <View style={styles.element}>
         <Text>...</Text>
        </View>
      </View>
    );
  }
}
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  element: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#d4d4d4',
    paddingHorizontal: 20,
    justifyContent: 'center'
  }
});