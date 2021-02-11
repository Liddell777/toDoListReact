import React, { useState } from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [tasks, setTasks] = useState([]);

    const addTodo = todo => {

        const newTasks = [todo, ...tasks]
        console.log('newTasks', newTasks)

        setTasks(newTasks)

        console.log('todo',...tasks)
    }

    return (
        <div>
            <TodoForm onSubmit={addTodo} />
        </div>
    );
}

export default TodoList;
