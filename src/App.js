import React, {useState, useRef, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import TodoList from './TodoList'
import uuidv4 from '../node_modules/uuid/dist/v4'


const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([]) 
  const inputTodo = useRef()

  function toggleTodo(id) {
    const updateTodoStatus = [...todos]
    const todo  = updateTodoStatus.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(updateTodoStatus)
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAddTodo(e) {
    const todoName = inputTodo.current.value
    if (todoName === '') return
    setTodos(prevTodo => {
      return [...prevTodo, {id: uuidv4(), name: todoName, complete: false}]
    })
    inputTodo.current.value = null
  }

  function handleClear() {
    const updatedList = todos.filter(checked => !checked.complete)
    setTodos(updatedList)
  }

  return (

    <div className="container">
      <div className="text-center fw-bolder fs-1 py-5">TODO List</div>
      <div className="row">
        <div className="col-6">
            <div className="row">
              
              <div className="col-12">
                <input className="form-control" ref={inputTodo} type="text"/>
              </div>
              <div className="col-md-4">
                <button onClick={handleAddTodo} type="button" className="btn btn-primary my-2">Add Todo</button>
              </div>
              <div className="col-md-4">
                <button onClick={handleClear} type="button" className="btn btn-danger m-2">Remove Completed</button>
              </div>
              
            </div>
        </div>
        <div className="col-6">
          <div className="col-12">
            <div>{todos.filter(left => !left.complete).length} left to do</div>
          </div>
          {/* todos is a props */}
          <TodoList todoList={todos} todoStatus={toggleTodo}/>
        </div>
      </div>
      







      {/* <div className="row bg-dark output">
        <div className="col-12 text-end text-light prev"></div>
        <div className="col-12 text-end text-light curr"></div>
      </div>
      <div className="row">
        <button className="col-6 btn btn-secondary text-center border-dark">AC</button>
        <button className="col-3 btn btn-secondary text-center border-dark">DEL</button>
        <button className="col-3 btn btn-secondary text-center border-dark">÷</button>
        <button className="col-3 btn btn-secondary text-center border-dark">7</button>
        <button className="col-3 btn btn-secondary text-center border-dark">8</button>
        <button className="col-3 btn btn-secondary text-center border-dark">9</button>
        <button className="col-3 btn btn-secondary text-center border-dark">x</button>
        <button className="col-3 btn btn-secondary text-center border-dark">4</button>
        <button className="col-3 btn btn-secondary text-center border-dark">5</button>
        <button className="col-3 btn btn-secondary text-center border-dark">6</button>
        <button className="col-3 btn btn-secondary text-center border-dark">-</button>
        <button className="col-3 btn btn-secondary text-center border-dark">1</button>
        <button className="col-3 btn btn-secondary text-center border-dark">2</button>
        <button className="col-3 btn btn-secondary text-center border-dark">3</button>
        <button className="col-3 btn btn-secondary text-center border-dark">+</button>
        <button className="col-3 btn btn-secondary text-center border-dark">0</button>
        <button className="col-3 btn btn-secondary text-center border-dark">.</button>
        <button className="col-6 btn btn-secondary text-center border-dark">=</button>
      </div> */}
      
    </div>
  );
}

export default App;
