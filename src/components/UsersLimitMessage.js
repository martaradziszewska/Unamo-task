import React from 'react';

export default class UsersLimitMessage extends React.Component {

  render() {
    return(
      <div>
        <i className="fas fa-exclamation-circle"></i>
        <p>You can't add new user because of a limit</p>
      </div>

    )
  }
}
