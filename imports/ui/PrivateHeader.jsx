import React from "react";
import { Accounts } from "meteor/accounts-base";
import PropTypes from "prop-types";

const PrivateHeader = props => {
  return (
    <div>
      <p>{props.title}</p>
      <button onClick={() => Accounts.logout()}>Logout!</button>
    </div>
  );
};

PrivateHeader.prototype = {
  title: PropTypes.string.isRequired
};

export default PrivateHeader;
