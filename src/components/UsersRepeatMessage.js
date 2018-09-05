import React from 'react';

export default class UsersRepeatMessaMessage extends React.Component {

  render() {
    return(
      <div className = "limit-msg">
        <i className="fas fa-exclamation-circle"></i>
      <p>This e-mail is already used. Try another one.</p>
      </div>

    )
  }
}
