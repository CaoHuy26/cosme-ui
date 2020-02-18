import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

//TODO: ADD SwipeOut

class Notification extends Component {
  render() {
    return (
      <View style={styles.notification}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.avatar}>
              <Icon name="ios-person" size={35} color="gray" style={{
                alignSelf: 'center',
                paddingTop: 12
              }}/>
            </View>
          </View>

          <View style={styles.content}>
            <Text>{this.props.item.message}</Text>
            <Text style={{color: 'grey'}}>16.00</Text>
          </View>
        </View>
      </View>      
    );
  }
}
export default Notification;

const styles = StyleSheet.create({
  notification: {
    height: 80,
    backgroundColor: 'white',
    marginBottom: 10
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 50,
    backgroundColor: 'pink',
    marginLeft: 10
  },
  content: {
    flex: 4,
    paddingLeft: 20,
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  }
});