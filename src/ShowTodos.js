import React, { useState } from 'react';
import { store } from './store/store';
import { removeTodo } from './store/tasks';

export default function Todos() {

    const [todos, setTodos] = useState([]);
    const [todoInput, setTodoInput] = useState('');
    const searchedTodos = todos.filter(todo => todo.todo.includes(todoInput))

    store.subscribe(() => {
        setTodos(store.getState());
    })

    return (
        <div>
            <input type="text" placeholder="search a todo" value={todoInput} onChange={(e) => {
                setTodoInput(e.target.value);
            }} />
            <div className="container-todos">
                <ul className="todos">
                    {todoInput == '' ?
                        <>
                            {
                                store.getState() != undefined ? store.getState()
                                    .map((todo) => {
                                        return <li key={todo.id}>
                                            {todo.todo}
                                            <i className='fa fa-remove' onClick={() => {
                                                store.dispatch(removeTodo(todo.id));
                                            }}></i>
                                        </li>
                                    }) : console.log("Add a todo")
                            }
                        </>
                        :
                        <>
                            {
                                store.getState() != undefined ? searchedTodos
                                    .map((todo) => {
                                        return <li key={todo.id}>
                                            {todo.todo}
                                            <i className='fa fa-remove' onClick={() => {
                                                store.dispatch(removeTodo(todo.id));
                                            }}></i>
                                        </li>
                                    }) : console.log("Add a todo")
                            }
                        </>
                    }
                </ul>
            </div>
        </div>
    )
}