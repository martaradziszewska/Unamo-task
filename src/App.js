import React from 'react';
import Header from "./components//Header";
import MainApp from "./components/MainApp";


class App extends React.Component {
	render(){
		return(
			<div className="container">
				<Header /> 
				<MainApp />
			</div>

		)
	}
}
 
export default App;
