import React, { Component } from "react";
import { ScrollView } from "react-native";
import Notification from './Notification';

class NotificationList extends Component {
  render() {
    return (
      <ScrollView>
        {
          this.props.notifications.map(
            notification => {
              const [time, message] = notification.split(': ');
              return (
                <Notification
                  key={time}
                  time={time}
                  message={message}
                />
              )
            }
          )
        }
      </ScrollView>
    );
  }
}
export default NotificationList;