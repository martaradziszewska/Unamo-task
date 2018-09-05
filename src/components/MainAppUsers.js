import React from 'react';
import HeaderSortEmail from '../components/HeaderSortEmail';
import HeaderSortName from '../components/HeaderSortName';



export default class MainAppUsers extends React.Component {
	constructor(props) {
	super(props);
	this.state = {
			users: [],
			direction: false,
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


	sortAscending = key => {
		this.setState({
			users: this.state.users.reverse().sort((a,b) => {
				a[key].toLowerCase();
				b[key].toLowerCase();
				if(a[key] < b[key]) return -1;
				if(a[key] > b[key]) return 1;
				return 0;
			})
		})
	}

	sortDescending = key => {
		this.setState({
			users: this.state.users.reverse().sort((a,b) => {
				a[key].toLowerCase();
				b[key].toLowerCase();
				if(a[key] > b[key]) return -1;
				if(a[key] < b[key]) return 1;
				return 0;
			})
		})
	}



	sortBy = key => {
		this.setState({
			direction: !this.state.direction,
		}, () => {
			if(this.state.direction) return this.sortAscending(key);
			if(!this.state.direction) return this.sortDescending(key);
		})
	}




	render() {

			let isListHasUsers = this.props.currentUsers.length > 0 ? true : false;
		return(
			<table className = "users-table">
				<thead className = "users-header">
					<tr>
					  <th>LP</th>
					<HeaderSortName header = "USER" direction={this.state.direction} sortByName = {() => this.sortBy('name')}/>
				<HeaderSortEmail header="EMAIL" direction={this.state.direction} sortByEmail = {() => this.sortBy('email')}/>
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

							}) : <tr><td>Add some users!</td></tr>}
				</tbody>
			</table>
		)
	}
}
