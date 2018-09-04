import React from 'react';

export default class UsersInvalidMessage extends React.Component {

  render() {
    return(
      <div className="invalid-msg">
        <i className="fas fa-exclamation-circle"></i>
          <p>Please enter a valid data. Your name must contains only letters.
          Email should be in format: "you@example.com" </p>
      </div>

    )
  }
}
