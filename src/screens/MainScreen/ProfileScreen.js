import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { connect } from 'react-redux';
import authActions from "../../actions/authActions";


class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.element}>
         <Text>Thông tin tài khoản</Text>
        </View>

        <View style={styles.element}>
         <Text>Thông tin đơn hàng</Text>
        </View>

        <View style={styles.element}>
          <TouchableOpacity
            onPress={() => {
              this.props.onLogout();
              this.props.navigation.replace('Login')
            }}
          >
            <Text>
              Đăng xuất
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.element}>
         <Text>...</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.loginReducers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(authActions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);

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