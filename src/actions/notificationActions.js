import ActionTypes from './types';

const notificationActions = {
  createNotification: (notification) => {
    return {
      type: ActionTypes.CREATE_NOTIFICATION_REQUEST,
      notification
    }
  },
  getNotificationsByUserId: (userId) => {
    return {
      type: ActionTypes.FETCH_NOTIFICATIONS_REQUEST,
      userId
    }
  }
};

export default notificationActions;