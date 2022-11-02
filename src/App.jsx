import './App.css';
import React, { useState } from 'react';
import Header from "./Components/Header";
import {Todos} from "./Components/Todos";
import {Footer} from "./Components/Footer";
import {AddTodo} from "./Components/AddTodo"


function App() {
  if(localStorage.getItem("todos")){
    initTodo =  [];

  }

    const onDelete = (todo) => {
    console.log("I will delete a todo 😈",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const addTodo = (title,desc) =>{
    let sno;
    console.log("I added this todo✨",title,desc);
    if(todos.length == 0){
    sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo])
    console.log(myTodo)
      localStorage.setItem("todos",JSON.stringify(todos));
      
  }
  const [todos, setTodos] = useState([]);
  return (
   <>
   <Header title="My todo list" searchBar={true}/>
   <AddTodo addTodo={addTodo}/>
   <Todos todos={todos} onDelete={onDelete}/>
   <Footer/>
   </>
  );
}

export default App;
