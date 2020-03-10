import React from 'react';
import { connect } from 'react-redux';
import IconWithBadge from "./IconWithBadge";

class OrderIconWithBadge extends React.Component {
  render() {
    const { total } = this.props.carts;
    return (
      <IconWithBadge {...this.props} badgeCount={total} />
    )
  }
};

const mapStateToProps = state => {
  return {
    carts: state.cartReducers
  }
};

export default connect(mapStateToProps)(OrderIconWithBadge);