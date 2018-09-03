import React from 'react';

export default class Header extends React.Component {
	render() {
		return(
			<header className="unamo-header">
				<img src={require('../images/unamo@2x.png')} alt="unamo-logo"/>
				<a href="https://www.unamo.com" className = "header-link">www.unamo.com</a>
			</header>
		)
	}
}





