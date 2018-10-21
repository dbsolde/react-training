import React from 'react';
import './profile.css';

class Profile extends React.Component {
	state = {
		ageLimit: 30,
	}

	// initiated before the component is mounted/render
	// Use default state instead.
	componentWillMount() {
		console.log("componentWillMount: Component is about to mount!")
	}

	// if the component is ready to use, usally do call ajax to load for our component
	// initiated after the initial rendering
	// can call this.setState
	componentDidMount() {
		console.log("componentDidMount: Component just mounted!")
	}

	// executed whenever the component receive props. e.g. props change
	// to avoid
	// no this.setState on this pls
	componentWillReceiveProps(nextProps) {
		// console.log(nextProps.age,'newProps')
		console.log("componentWillReceiveProps: Component just get new props!", nextProps.age,'newProps')
	}

	// after receiving new props or state
	// should I re-render?
	// If this is called, there is a reason why to rerender component
	// no this.setState on this pls
	shouldComponentUpdate(newProps, newState) {
		console.log('sshould', newState.ageLimit,newProps.age)
		console.log("shouldComponentUpdate: Should component update?", newProps, newState)
		if (newProps.age === newState.ageLimit) {
			return true
		}
		return false
		// return false to prevent from rendering
		// it should always return bloolean
	}

	// get executed after shouldComponentUpdate return true
	// you want me to do anything before i re-render?
	// no this.setState on this pls
	componentWillUpdate(newProps, newState) {
		console.log("componentWillUpdate: Component is about to update!", newProps, newState)
	}

	// get executed after shouldComponentUpdate return true
	// executed after rendering component
	// Updating the DOM in response to prop or state changes.
	// can call this.setState
	componentDidUpdate(prevProps, prevState) {
		console.log("componentDidUpdate: Component just updated!", prevProps, prevState)

	}

	// finish na
	// Here you can cancel any outgoing network requests, or remove all event listeners associated with the component.
	componentWillUnmount() {
		console.log("componentWillMount: Component is about to mount!");
	}

	render() {
		const {
			name,
			age,
			sex
		} = this.props
		// console.log(age,'age')
		return(
			<div className="profile">
				<h1>My Profile</h1>
				<p>Name: {name}</p>
				<p><b>Age: {age}</b></p>
				<p>Sex: {sex}</p>
			</div>
		)
	}
}

export default Profile;