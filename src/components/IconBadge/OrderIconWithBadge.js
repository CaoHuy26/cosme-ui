import React from 'react';
import IconWithBadge from "./IconWithBadge"

const OrderIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like:
  // React Context API, Redux, MobX or event emitters.
  return <IconWithBadge {...props} badgeCount={9} />;
};

export default OrderIconWithBadge;