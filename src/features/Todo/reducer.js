import { UpdateTodo } from './action';
import {ADD_TODO, REMOVE_TODO, EDIT_TODO, UPDATE_TODO} from './constants';

const initialState = [];

function reducer(state=initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            const nextId = state.length + 1;
            const newTodo = {id: nextId, description: action.description, status: action.status, created_at: action.created_at};
            return [...state, newTodo];

        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.id);

        case EDIT_TODO:
            return state.filter(todo => todo.id == action.id);

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