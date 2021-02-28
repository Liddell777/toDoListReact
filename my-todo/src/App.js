import './App.css';
import { useState }  from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);


  return (
    <div className="todo-list">
      <div>
        <h1>ToDoList</h1>
          <TodoForm
            input = {input}
            setInput = {setInput}
            todos = {todos}
            setTodos = {setTodos}
          />
      </div>
      <div>
        <TodoList 
          todos = {todos}
          setTodos ={setTodos}
        />
      </div>
    </div>
  );
}

export default App;
