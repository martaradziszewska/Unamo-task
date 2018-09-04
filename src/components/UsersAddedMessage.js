import React from 'react';

export default class UsersAddedMessage extends React.Component {

  render() {
    return(
      <div className="success-msg">
        <i className="fas fa-check"></i>
        <p>You have successfully added an user!</p>
      </div>

    )
  }
}
