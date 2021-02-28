import React from 'react';

const TodoList = ({todos, setTodos}) =>  {
    return (
        <div>
            {todos.map((todo) => (
                <li className="maine__item" key={todo.id}>
                    <input type="text" value={todo.title} className="maine__input" onChange={(event) => event.preventDefault()} />
                    <button class='main__btn'>Delete</button>     
                </li> 
                )
            )}
        </div>
    )
}

export default TodoList;
