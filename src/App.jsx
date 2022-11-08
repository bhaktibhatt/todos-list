import './App.css';
import React, { useState } from 'react';
import Header from "./Components/Header";
import {Todos} from "./Components/Todos";
import {Footer} from "./Components/Footer";
import {AddTodo} from "./Components/AddTodo"
import { useEffect } from 'react';


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

    const onDelete = (todo) => {  
      console.log("Deleting todo");
      setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    console.log("deleted",todos)
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
      desc:desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);      
  }
  const [todos, setTodos] = useState(initTodo); 
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos]) //todo is the state array of dependencies

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
