import React from 'react';
import MainAppHeader from "../components/MainAppHeader";
import MainAppUsers from "../components/MainAppUsers";
import axios from 'axios';

export default class MainApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUsers: [],
			newUser: "",
		}
	}
	componentDidMount () {
		const url = 'https://jsonplaceholder.typicode.com/users';
		axios.get(`${url}`)
			.then(response => {
				const users = response.data;
				let tempUsers = this.state.currentUsers;
				users.forEach((user,index) => {
					tempUsers = [...tempUsers, {id: index+1, name: user.name, email: user.email}]
				})
				this.setState({
					currentUsers: tempUsers,
				})
			})
			.catch (error => console.log(error))

	}

	updateUsers = (updatedUsers) => {
		this.setState({
			currentUsers: updatedUsers,
		})
	}



	updateCurrentUsers = (name, email) => {
			let users = this.state.currentUsers;
			let newId;
			if(users.length !== 0) {
					newId = users[users.length-1].id;
			} else {
				newId = users.length;
			}
			this.setState({
				currentUsers: [...this.state.currentUsers, {id: newId + 1, name: name, email: email}],
			})
	}

	render() {

		return(
			<div className="mainApp">
				<MainAppHeader currentUsers = {this.state.currentUsers} onUpdateCurrentUsers={this.updateCurrentUsers} />
				<MainAppUsers currentUsers = {this.state.currentUsers} updateUsers={this.updateUsers} />
			</div>
		)
	}
}
