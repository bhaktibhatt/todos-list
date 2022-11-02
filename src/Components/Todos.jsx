import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  let box = {
    minHeight : "100vh",
    margin:"4vmax"
  }
  return (

    <div className='container my-4' style={box}>
        <h3 className='text-bold my-4'>Todo List</h3>
        {props.todos.length === 0 ? "No todo items to display Add todo first" :
        props.todos.map((todo)=>{
          return (<><TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr3/></>)
          })}
        </div>
  )
}

