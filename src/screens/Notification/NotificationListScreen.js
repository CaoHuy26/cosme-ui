import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from 'react-redux';
import notificationActions from '../../actions/notificationActions';
import { NotificationList } from '../../components/Genneral/Notification';
import { Empty } from '../../components/Genneral/Common';

class NotificationListScreen extends Component {

  componentDidMount() {
    this.props.getNotificationsByUserId('b93e7a50-fa66-406d-9fae-ce912d7bda7f'); //FIXME: Fix userID
  };

  render() {
    const { notifications } = this.props.notifications || [];
    return (
      <View style={styles.container}>
        {
          notifications.length > 0
            ? <NotificationList notifications={notifications}/>
            : <Empty notice='Bạn chưa có thông báo nào'/>
        }
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    notifications: state.notificationReducers
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getNotificationsByUserId:
      userId => dispatch(notificationActions.getNotificationsByUserId(userId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationListScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});