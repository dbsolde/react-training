import { ADD_TODO, REMOVE_TODO } from '../constants/actionTypes'

const initialState = {
	todos: [],
	id: 0
};

const rootReducer = (state = initialState, action ) => {
	// debugger; 1st
	switch(action.type) {
		case ADD_TODO:
		// debugger; on submit 1st
			const newState = {...state}
			newState.id++
			return {
				...newState,
				todos: [...newState.todos, { task: action.task, id: newState.id} ]
			}
		case REMOVE_TODO:
			let todos = state.todos.filter( val => val.id !== action.id)
			return { ...state, todos }
		default:
			return state;
	}
}

export default rootReducer