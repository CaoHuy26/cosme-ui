import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";

import { connect } from 'react-redux';
import axios from "axios";
import authActions from '../../actions/authActions';

const { width } = Dimensions.get("window");

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailInput: "",
      passwordInput: ""
    };
  }

  render() {
    console.log(this.props.user)
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.greeting}>
            {
              !this.props.user.isLoggedIn ? 'Đăng nhập để tiếp tục' : `Hello ${this.props.user.user.user.email}` 
            }
          </Text>
        </View>
        <Text style={{color: 'red'}}>
          {
            this.props.user.error ? `\nError: ${this.props.user.error}` : null
          }
        </Text>

        <View>
          {
            this.props.user.isLoggedIn 
            ? (
                <TouchableOpacity
                  onPress={() => this.props.onLogout()}
                >
                 <Text>Logout</Text>
                </TouchableOpacity>
              ) 
            : null 
          }
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Địa chỉ email</Text>
            <TextInput
              style={styles.input}
              autoCapitalize='none'
              onChangeText={text => this.setState({ emailInput: text })}
            />
          </View>

          <View>
            <Text style={styles.inputTitle}>Mật khẩu</Text>
            <TextInput
              style={styles.input}
              autoCapitalize='none'
              onChangeText={text => this.setState({ passwordInput: text })}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const user = {
              email: this.state.emailInput,
              password: this.state.passwordInput
            };
            this.props.onLogin(user)
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>Đăng nhập</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 30 }}>
          <View style={{ alignItems: "center", marginBottom: 30 }}>
            <Text>Hoặc đăng nhập với</Text>
          </View>

          <View style={styles.social}>
            <TouchableOpacity style={[styles.button, styles.buttonSocial]}>
              <Text style={{ fontWeight: "bold", color: "blue" }}>
                Facebook
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonSocial]}>
              <Text style={{ fontWeight: "bold", color: "grey" }}>Google</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text>Chưa có tài khoản?</Text>
          <TouchableOpacity>
            <Text>Đăng ký</Text>
          </TouchableOpacity>
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
    onLogin: (user) => dispatch(authActions.login(user)),
    onLogout: () => dispatch(authActions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 40
  },
  greeting: {
    marginTop: 32,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  form: {
    marginTop: 40,
    marginBottom: 40
  },
  inputTitle: {
    color: "#8A8F9E",
    fontSize: 10,
    textTransform: "uppercase",
    marginTop: 30
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D"
  },
  button: {
    backgroundColor: "#E9446A",
    height: 52,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonSocial: {
    width: width / 2 - 50,
    backgroundColor: "white",
    borderWidth: 0.7,
    borderColor: "grey"
  },
  social: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
