import React from 'react';
import UsersInvalidMessage from '../components/UsersInvalidMessage';

export default class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersName: "",
      usersEmail: "",
      isResetField: false,
      showValidMessage: false,
      showAddedMessage: false,
    }
  }

  handleInputs = e => {
    this.setState({
      [e.target.id]: e.target.value,

    })
    e.target.value !== "" ? this.setState({isResetField: true,}) : this.setState({isResetField: false})
  }





  sendNewUser = e => {
    e.preventDefault();
    let validateEmail = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let validateName = /^[a-zA-Z]/; // check if names contains only letters
    if(this.state.usersName.length > 20 || validateName.test(this.state.usersName) === false || validateEmail.test(this.state.usersEmail) === false) {
        this.setState({
          showValidMessage: true,
        })
    }else {
      this.setState({
        showValidMessage: false,
        showAddedMessage: true,
      }, () => {
        this.props.updateShowFormInfo(false);
        this.props.showAddedMessage(this.state.showAddedMessage);
        this.props.onUpdateCurrentUsers(this.state.usersName, this.state.usersEmail);
      })
    }
  }


  resetField = () => {
    this.setState({
      usersName: "",
      usersEmail: "",
    })
  }



  render() {
    return(
      <div className = "user-form">
        <input autoFocus type="text"
               value={this.state.usersName}
               onChange={e=>this.handleInputs(e)}
               id="usersName"
               placeholder="Name..."/>
        <input type="email"
               value={this.state.usersEmail}
               onChange={e=>this.handleInputs(e)}
               id="usersEmail"
               placeholder="E-mail..."/>
        <input type="submit"
               onClick={e=>this.sendNewUser(e)} />
             {this.state.isResetField && <button className="reset-btn" onClick={this.resetField}>Reset fields</button> }
             {this.state.showValidMessage && <UsersInvalidMessage/>}

      </div>

    )
  }
}
