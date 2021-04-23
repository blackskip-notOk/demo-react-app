import React from 'react';
import AddTodoForm from './TodoList/AddTodoForm/AddTodoForm';
import FooterTodoList from './TodoList/FooterTodoList/FooterTodoList';
import TodoList from './TodoList/TodoList';
//onClick not a function. Need to write some function
const Additions = ({addTodo, icon, todos, toggleTodo,
    getVisibility}) => {
    return (
        <>
            {/* <AddTodoForm addTodo={addTodo}
                icon={icon}
            /> */}
            <TodoList todos={todos}
                toggleTodo={toggleTodo} />
            <FooterTodoList getVisibility={getVisibility}
                active={true}/>
        </>
    );
}

export default Additions;