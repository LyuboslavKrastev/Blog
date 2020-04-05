import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

// ownProps is a reference to the props of the component
const mapStateToProps = (state, ownProps) => {
  const user = state.users.find((user) => user.id === ownProps.userId);

  return {
    user,
  };
};

//mapStateToProps
export default connect(mapStateToProps)(UserHeader);
