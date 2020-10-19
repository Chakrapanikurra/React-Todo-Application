import React from 'react';

//importing components
import Todo from "./Todo";

const TodoList = ({todos}) => {
    return(
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map(todos => (
          <Todo />
        )
        )}
      </ul>
    </div>
    );
};

export default TodoList;