import React from 'react';
import AddButton from '../components/AddButton';
import UsersLimitMessage from '../components/UsersLimitMessage';
import UserForm from '../components/UserForm';


export default class MainAppHeader extends React.Component {
	constructor(props){
		super(props);
		this.state = {
				// isLimit: false,
				showForm: false,
		}
	}




	showForm = showFormInfo => {
		this.setState({
			showForm: showFormInfo,
		})
	}



	render() {
		let isLimit = this.props.currentUsers.length > 9 ? true : false;
		return(
			<div className="main-app-header">
				{this.state.showForm ? <UserForm /> : <AddButton disabled={isLimit} updateShowFormInfo={this.showForm}/> }

				{isLimit && <UsersLimitMessage /> }
			</div>

		)
	}
}
