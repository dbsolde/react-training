import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './styles/App.css';

import Counter from './components/Counter'
import Profile from './components/Profile'

class App extends Component { 
	state = {
		name: "Test name",
		age: 26,
		sex: "Male"

	}

	handleIncrease = () => {
		this.setState({
			age: this.state.age + 1
		})
	}

	render() {
		const { 
			name,
			age,
			sex
		} = this.state
		
		return(
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Component Lifecycle</h1>
				</header>
				<Profile 
					name={name}
					age={age}
					sex={sex}
					/>
				<div className="App-intro">
					<Counter counterNum={age} />
					<button onClick={this.handleIncrease}>+</button>
				</div>
			</div>
		)
	}
}

export default App;