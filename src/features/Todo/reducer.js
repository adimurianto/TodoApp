import {ADD_TODO, REMOVE_TODO, UPDATE_TODO, DONE_TODO} from './constants';

let initialState = [];

// Set initial state from data local storage todos if exist
if (localStorage.getItem('todos') !== null) {
    const StorageTodos = localStorage.getItem('todos');
    initialState = JSON.parse(StorageTodos);

}

function reducer(state=initialState, action) {
    let newState;
    switch (action.type) {
        case ADD_TODO:
            const d = new Date();
            const nextId = d.getTime();
            const newTodo = {id: nextId, description: action.description, status: action.status, created_at: action.created_at};

            newState = [...state, newTodo];

            localStorage.setItem('todos', JSON.stringify(newState));
            return newState;
            
        case REMOVE_TODO:
            newState = state.filter(todo => todo.id !== action.id);

            localStorage.setItem('todos', JSON.stringify(newState));
            return newState;

        case DONE_TODO:
            state.map((todo, index) => {
                if(todo.id == action.id) {
                    todo.description = `<strike>${todo.description}</strike>`;
                    todo.status = 'done';
                }
            });

            newState = [...state];

            localStorage.setItem('todos', JSON.stringify(newState));
            return newState;

        case UPDATE_TODO:
            state.map((todo, index) => {
                if(todo.id == action.id) {
                    todo.description = action.description;
                }
            });

            newState = [...state];

            localStorage.setItem('todos', JSON.stringify(newState));
            return newState;

        default:
            newState = state;

            localStorage.setItem('todos', JSON.stringify(newState));
            return newState;
    }
}

export default reducer;