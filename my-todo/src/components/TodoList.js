import React from 'react';

const TodoList = ({todos, setTodos}) =>  {

    // delete todo
    
    const handleDelete = ({ id }) => {
            setTodos(todos.filter((todo) => todo.id !== id ));
        };

    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <li className="maine__item" key={todo.id}>
                    <input type="checkbox" id ="item"  className="maine__input" onChange={(event) => event.preventDefault()} />
                    <label for="item" className="item__label"> {todo.title} </label>
                    <button className="main__btn" onClick={() => handleDelete(todo)}>Delete</button>     
                </li> 
            ))}
        </div>
    );
};

export default TodoList;
