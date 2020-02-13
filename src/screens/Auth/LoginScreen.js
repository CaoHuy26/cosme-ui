import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";
import axios from "axios";

const { width } = Dimensions.get("window");

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailInput: "",
      passwordInput: ""
    };
  }

  handleLogin = async () => {
    const user = {
      email: this.state.emailInput,
      password: this.state.passwordInput
    };
    try {
      const res = await axios.post("http://localhost:3000/auth/login", user);
      const { data } = res;
      console.log(data);
      if (data.statusCode === 200) {
        alert(`Hello ${data.user.email}`);
      }
    } catch (error) {
      alert("Login fail");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.greeting}>Đăng nhập để tiếp tục</Text>
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Địa chỉ email</Text>
            <TextInput
              style={styles.input}
              autoCapitalize={false}
              onChangeText={text => this.setState({ emailInput: text })}
            />
          </View>

          <View>
            <Text style={styles.inputTitle}>Mật khẩu</Text>
            <TextInput
              style={styles.input}
              autoCapitalize={false}
              onChangeText={text => this.setState({ passwordInput: text })}
            />
          </View>
        </View>

        {/* 
         TODO: Handle login logic here
        */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.handleLogin()}
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
export default LoginScreen;

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
