import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDoList</h1>
          <div class="header__input">
              <input id="task_input" name="name" type="text" placeholder="What do You want to do?" />
              <button id="plus_button" name="button"><i class="fas fa-plus"></i></button>
          </div>  
          <div class="conteiner">
              <ul class="maine">
              </ul>
          </div>
      </header>
    </div>
  );
}

export default App;
