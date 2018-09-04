import React from 'react';
import AddButton from '../components/AddButton';
import UsersLimitMessage from '../components/UsersLimitMessage';
import UserForm from '../components/UserForm';
import UsersAddedMessage from '../components/UsersAddedMessage';

export default class MainAppHeader extends React.Component {
	constructor(props){
		super(props);
		this.state = {
				showForm: false,
				showAddedMessage: false,
		}
	}


	showForm = showFormInfo => {
		this.setState({
			showForm: showFormInfo,
			showAddedMessage: false,
		})
	}

	showAddedMessage = success => {
		this.setState({
			showAddedMessage: success,
		})
	}


	onUpdateCurrentUsers = (name, email) => {
		this.props.onUpdateCurrentUsers(name, email);
	}


	render() {
		let isLimit = this.props.currentUsers.length > 9 ? true : false;
		return(
			<div className="main-app-header">
				{this.state.showForm ? <UserForm updateShowFormInfo={this.showForm} showAddedMessage={this.showAddedMessage} onUpdateCurrentUsers={this.onUpdateCurrentUsers} currentUsers = {this.props.currentUsers}/>
				: <AddButton disabled={isLimit} updateShowFormInfo={this.showForm}/> }
				{this.state.showAddedMessage && <UsersAddedMessage />}
				{isLimit && <UsersLimitMessage /> }

			</div>

		)
	}
}
