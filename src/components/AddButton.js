import React from 'react';



export default class AddButton extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			showForm: false,
		}
	}

	showForm = () => {

		this.setState({
			showForm: !this.state.showForm,
		}, () => this.props.updateShowFormInfo(this.state.showForm))
	}

	render() {
		return(
			<div>
				<button className="add-user-btn" disabled={this.props.disabled} onClick={this.showForm}>
					<i className="fa fa-plus-circle" aria-hidden="true"></i>
					<span>Add user</span>
				</button>
			</div>
		)
	}
}
