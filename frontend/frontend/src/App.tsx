import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ITodo } from './types';
import { createTodo, deleteTodo, fetchTodos } from './todoApi';


function App() {
  const [todos,setTodos] = useState<ITodo[]>([]);
  const [newTodo , setNewTodo] = useState("");

  useEffect(() => {
    fetchTodos().then(setTodos);
  }, [])

  const handleAddTodo = async () => {
    if(newTodo.trim()){
      const addedTodo = await createTodo(newTodo);
      setTodos([...todos,addedTodo]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = async(id: string) =>{
    await deleteTodo(id);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  const handleNewTodo = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setNewTodo(e.target.value);
  }

  

  return (
    <div>
      <h1>To-do list</h1>
      <input 
        type='text' 
        value={newTodo}
        onChange={handleNewTodo}
        placeholder='Todo placeholder'  
        />

        <button onClick={handleAddTodo}>Add Todo</button>

        <ul>
          {todos.map((todo)=>(
            <li key={todo._id}>
              {todo.title}
              <button onClick={()=>handleDeleteTodo(todo._id)}>delete</button>
            </li>
          ))}
        </ul>

    </div>
  );
}

export default App;
