import './App.css';
import { useState } from 'react';
import { store } from './store/store';
import { addTodo, clearTodo } from './store/tasks';
import Todos from './ShowTodos';

function App() {

  const [todo, settodo] = useState('');

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <p>To-do-list</p>
        </div>
        <div className="inner-container">
          <div className="add-todo">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                store.dispatch(addTodo(todo));
                console.log("Current state :" + store.getState());
                settodo('');
              }}>
              <input type="text" placeholder="write a todo" value={todo} onChange={(e) => {
                settodo(e.target.value);
              }} />
              <div>
                <button type="submit">
                  <p>Add a todo</p>
                </button>
              </div>
            </form>
          </div>
          <div className="filter-todo">
            <Todos />
          </div>
          <div className="clear-todos">
            <button onClick={() => {
              store.dispatch(clearTodo());
              confirm("Are you sure you want to delete all todos?");
            }}>
              <p>Clear all todos</p>
            </button>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;