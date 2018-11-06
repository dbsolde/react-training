import {
	ADD_TODO, REMOVE_TODO
} from '../constants/actionTypes'

// action creator addTodo fnc
export const addTodo = (task) => {
	return {
		type: ADD_TODO,
		task
	}
}

// action creator removeTodo fnc
export const removeTodo = (id)  => {
	return {
		type: REMOVE_TODO,
		id
	}
}