import React from 'react';
import Todo from './Todo/Todo';

const TodoList = ({todos, toggleTodo}) => {
    let todo = todos.map(t => <Todo key={t.id}
        id={t.id} toggleTodo={toggleTodo} />)
    return (
        <ul>
            {todo}
        </ul>
    );
}

export default TodoList;