import React,{useState, useEffect} from 'react';
import "./App.css";
//Importing Components
import Form from "./components/form";
import TodoList from "./components/TodoList"

import './App.css';

function App() {

  
  //State

  const [inputText, setInputText] = useState("");
  const [todos , setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  /*RUN ONCE when the app starts
  useEffect(() => {
    getLocalTodos();
  }, []);
*/

  //USE EFFECT
  useEffect(() => {
    filterHandler();
    //saveLocalTodos();
  }, [todos, status]);


  //functions
  const filterHandler = () => {
    switch(status){
      case "completed":
      setFilteredTodos(todos.filter((todo) => todo.completed === true))
      break;

      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;

        default:
          setFilteredTodos(todos);
          break;
    }

  };


  /*save to Local
  const saveLocalTodos = () =>{
      localStorage.setItem('todos', JSON.stringify([todos]));
  };
  const getLocalTodos = () => {
    if(localStorage.getItem ('todos') == null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
     let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };
*/

  return (
    <div className="App">
      <header>
  <h1>Chucky's Todo List</h1>
      </header>
     <Form 

     inputText  = {inputText} 
     todos={todos} 
     setTodos = {setTodos} 
     setInputText = {setInputText}
     setStatus = {setStatus}
     
     
     />

     <TodoList 
      filteredTodos = {filteredTodos}
      setTodos = {setTodos}
      todos = {todos} />
    </div>
  );
}

export default App;
