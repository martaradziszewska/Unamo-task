import React from 'react';
import MainAppHeader from "../components/MainAppHeader";
import MainAppUsers from "../components/MainAppUsers";
import axios from 'axios';

export default class MainApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUsers: [],
		}
	}
	componentDidMount () {
		const url = 'https://jsonplaceholder.typicode.com/users';
		axios.get(`${url}`)
			.then(response => {
				const users = response.data;
				let tempUsers = this.state.currentUsers;
				users.forEach(user => {
					tempUsers = [...tempUsers, {id: user.id, name: user.name, email: user.email}]
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

	render() {

		return(
			<div className="mainApp">
				<MainAppHeader currentUsers = {this.state.currentUsers} />
				<MainAppUsers currentUsers = {this.state.currentUsers} updateUsers={this.updateUsers} />
			</div>
		)
	}
}
