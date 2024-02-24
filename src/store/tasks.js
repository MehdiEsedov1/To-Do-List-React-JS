//REDUCER

import { store } from "./store";

let id = 0;

export default function reducer(state = [], action) {
    switch (action.type) {
        case 'Add to do':
            return [...state, {
                id: id++,
                todo: action.payload.todo
            }]
        case 'Remove to do':
            return action.payload.todos
        case 'Clear to do':
            return action.payload.todos
    }
}

//ACTIONS

export function addTodo(todo) {
    return {
        type: 'Add to do',
        payload: {
            todo: todo
        }
    }
}

export function removeTodo(id) {

    const todos = store.getState();
    const newTodos = todos.filter(todo => todo.id !== id);

    return {
        type: 'Remove to do',
        payload: {
            todos: newTodos
        }
    };
}

export function clearTodo() {

    return {
        type: 'Clear to do',
        payload: {
            todos: []
        }
    };
}