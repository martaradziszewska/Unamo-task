import React from 'react';



export default class MainAppUsers extends React.Component {
	constructor(props) {
	super(props);
	this.state = {
			users: [],
		}
	}


 static getDerivedStateFromProps(props, currentState) {
	 if(currentState.users !== props.currentUsers) {
		 return {
			 users: props.currentUsers,
		 };
	 }return null;
	}

	removeUser = (e, index) => {
		let updatedUsers = this.state.users;
		updatedUsers.splice(index, 1);
		this.setState({
			users: updatedUsers,
		}, () => this.props.updateUsers(this.state.users))
	}




	render() {
console.log(this.state.users);
			let isListHasUsers = this.props.currentUsers.length > 0 ? true : false;
		return(
			<table className = "users-table">
				<thead className = "users-header">
					<tr>
						<th>LP</th>
						<th>USER</th>
					<th colSpan = "2">EMAIL</th>
					</tr>
				</thead>
				<tbody className = "users-list">
						{isListHasUsers === true ?
							this.props.currentUsers.map((user, index) => {
								return(
									<tr key={index}>
										<td>{index+1}</td>
										<td>{user.name}</td>
										<td>{user.email}</td>
									<td><button className = "remove-user-btn" onClick={e=>this.removeUser(e, index)}><i className="fas fa-times"></i></button></td>
									</tr>
								)

							}) : <tr><td>Add some users</td></tr>}


				</tbody>


			</table>
		)
	}
}
