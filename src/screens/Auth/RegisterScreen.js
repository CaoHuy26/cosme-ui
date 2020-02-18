import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

import { connect } from 'react-redux';
import authActions from "../../actions/authActions";


// TODO: Locate to login screen when register success
class RegisterScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailRegister: "",
      passwordRegister: ""
    };
  }

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.greeting}>
            Đăng ký
          </Text>
        </View>
        <Text style={{color: 'red'}}>
          {
            this.props.userRegister.error ? `\nError: ${this.props.userRegister.error}` : null
          }
        </Text>

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Địa chỉ email</Text>
            <TextInput
              style={styles.input}
              autoCapitalize='none'
              onChangeText={text => this.setState({ emailRegister: text })}
            />
          </View>

          <View>
            <Text style={styles.inputTitle}>Mật khẩu</Text>
            <TextInput
              style={styles.input}
              autoCapitalize='none'
              onChangeText={text => this.setState({ passwordRegister: text })}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const user = {
              email: this.state.emailRegister,
              password: this.state.passwordRegister
            };
            this.props.onRegister(user);
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    userRegister: state.registerReducers
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onRegister: (user) => dispatch(authActions.register(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);

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
  }
});