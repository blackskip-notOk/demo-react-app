import React from 'react';
import s from './Todo.module.css';

const Todo = ({toggleTodo, id, completed, text, ...props}) => {
    toggleTodo(id);
    return (
        <li onClick={toggleTodo}
            className={completed ? s.completed : s.uncompleted}>
            {text}
        </li>
    );
}

export default Todo;