import { UpdateTodo } from './actions';
import {ADD_TODO, REMOVE_TODO, EDIT_TODO, UPDATE_TODO, DONE_TODO} from './constants';

const initialState = [];

function reducer(state=initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            const d = new Date();
            const nextId = d.getTime();
            const newTodo = {id: nextId, description: action.description, status: action.status, created_at: action.created_at};
            return [...state, newTodo];

        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.id);

        case EDIT_TODO:
            return state.filter(todo => todo.id == action.id);

        case DONE_TODO:
            state.map((todo, index) => {
                if(todo.id == action.id) {
                    todo.description = `<strike>${todo.description}</strike>`;
                    todo.status = 'done';
                }
            });

            return [...state];
        case UPDATE_TODO:
            const updateTodo = {};
            state.map((todos, index) => {
                if(todos.id == action.id){
                    updateTodo = {id: action.id, description: action.description, status: action.status};
                }
            });

            state.filter(todo => todo.id !== action.id);
            return [...state, updateTodo];

        default:
            return state;
    }
}

export default reducer;