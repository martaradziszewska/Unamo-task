import React from 'react';

export default class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersName: "",
      usersEmail: "",
    }
  }



  render() {
    return(
      <div className = "user-form">
        <input type="text" value={this.state.usersName} onChange={e=>this.handleInputs(e)} placeholder="Name..."/>
        <input type="email" value={this.state.usersEmail} onChange={e=>this.handleInputs(e)} placeholder="E-mail..."/>
        <input type="submit" onClick={this.sendNewUser} />
      </div>

    )
  }
}
