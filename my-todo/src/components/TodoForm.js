import React, { useState } from 'react'

function TodoForm (props) {
    const [input, setInput] = useState('');
   /*  console.log('input', input);
    console.log('setinput', setInput); */

    const handleChange = e => {
        setInput(e.target.value); 
        /* console.log('e', e); */
    }
    /* console.log('handleChange', handleChange); */

    const handleSubmit = e => {
        e.preventDefault();
        /* console.log('e2', e); */

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input className="todo-input" name="name" type="text" placeholder="What do You want to do?" value={input} onChange={handleChange} />
            <button className="todo-button" name="button"><i class="fas fa-plus"></i></button>
        </form>
    )
}

export default TodoForm
