import React from 'react';
import { connect } from 'react-redux';
import IconWithBadge from "./IconWithBadge"
import notificationActions from '../../actions/notificationActions';

class NotificationIconWithBadge extends React.Component{
  componentDidMount() {
    this.props.getNotificationsByUserId('b93e7a50-fa66-406d-9fae-ce912d7bda7f'); //FIXME: Fix userID
  };

  render() {
    let count = 0;
    const { notifications } = this.props.notifications || [];
    if (!notifications) {
      count = 0;
    }
    else {
      count = notifications.length;
    }
    return (
      <IconWithBadge {...this.props} badgeCount={count} />
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

export default connect(mapStateToProps, mapDispatchToProps)(NotificationIconWithBadge);