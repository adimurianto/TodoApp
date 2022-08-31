import {ADD_TODO, REMOVE_TODO, EDIT_TODO, UPDATE_TODO} from './constants';

export function addTodo(description) {
    return {
        type: ADD_TODO,
        created_at: Date.now(),
        status: 'pending',
        description
    }
}

export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id
    }
}

export function editTodo(id) {
    return {
        type: EDIT_TODO,
        id
    }
}

export function updateTodo(id, description, status) {
    return {
        type: UPDATE_TODO,
        id,
        description,
        status
    }
}