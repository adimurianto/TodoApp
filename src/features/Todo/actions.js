import {ADD_TODO, REMOVE_TODO, UPDATE_TODO, DONE_TODO} from './constants';

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

export function doneTodo(id) {
    return {
        type: DONE_TODO,
        id
    }
}

export function updateTodo(id, description) {
    return {
        type: UPDATE_TODO,
        id,
        description
    }
}