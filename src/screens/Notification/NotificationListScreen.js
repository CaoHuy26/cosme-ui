import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Notification } from '../../components/Genneral/Common';

const fakeNotificationData = [
  {
    id: '1',
    message: 'Lorem ipsum dolor sit amet, indu consectetur adipiscing elit'
  },
  {
    id: '2',
    message: 'Lorem ipsum dolor sit amet, indu consectetur adipiscing elit'
  },
  {
    id: '3',
    message: 'Lorem ipsum dolor sit amet, indu consectetur adipiscing elit'
  },
  {
    id: '4',
    message: 'Lorem ipsum dolor sit amet, indu consectetur adipiscing elit'
  }
];

class NotificationListScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={fakeNotificationData}
          renderItem={({item, index}) => (
            <Notification item={item}/>
          )}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    );
  }
}
export default NotificationListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});