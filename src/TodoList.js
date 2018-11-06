import React, { Component } from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { addTodo, removeTodo } from './actions/todo'

class TodoList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			// todos: ["Eat", "Sleep", "Go Home"],
			task: ''
		}
	}
	handleChange = (e) => {
		const value = e.target.value
		this.setState({ [e.target.name]: value })
	}
	handleSubmit = (e) => {
		e.preventDefault()
		if(this.state.task !== '') {
			// this.props.dispatch({
			// 	type: "ADD_TODO",
			// 	task: this.state.task
			// })
			this.props.addTodo(this.state.task)
			e.target.reset()
		}
	}
	handleRemove = (id) => {
		// this.props.dispatch({
		// 	type: "REMOVE_TODO",
		// 	id
		// })
		this.props.removeTodo(id)
	}

	render() {
		// debugger; 3rd
		// debugger; on submit 2nd
		const { todos } = this.props
		return (
			<div>
				<form onSubmit={this.handleSubmit.bind()}>
					<label>Task</label>
					<input type="text" name="task" id="task" onChange={this.handleChange}/>
					<button>Submit</button>
				</form>
				<ul>
					{todos && todos.map( (val, index) => (
						<Todo 
							removeTodo={this.handleRemove} 
							task={val.task}
							id={val.id}
							key={index} />
					))}
				</ul>
			</div>
		)
	}
}

// mapStateToProps always return an object
// mapStateToProps - we can name it to whatever you want
// this will turn redux state into props
// manage state to component
const mapStateToProps = (reduxState) => {
	// debugger; 2nd
	// debugger; on submit 3rd
	return {
		todos: reduxState.todos
	}
}

// dispatching an action
// function mapDispatchToProps(dispatch) {
// 	return {
// 		addTodo: function(task){
// 			dispatch({
// 				type: "ADD_TODO",
// 				task
// 			})
// 		}
// 	}
// }

// export default connect(mapStateToProps)(TodoList)
export default connect(mapStateToProps, { addTodo,  removeTodo })(TodoList)