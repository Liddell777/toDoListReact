import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({ input, setInput, todos, setTodos }) => {
  
    const onInputChange = event => {
        setInput(event.target.value);
        };

    const handleSubmit = event => {
        event.preventDefault();
        setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
        setInput("");
    }
  
    return (
        <form className ="todo-form" onSubmit={handleSubmit}>
            <input className="todo-input" type="text" placeholder="What do You want to do?" value={input} required onChange={onInputChange}/>
            <button className="todo-button" name="button" type="submit">Add</button>
        </form> 
    )
}

export default TodoForm
