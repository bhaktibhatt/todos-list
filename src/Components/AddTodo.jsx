import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description Cannot be empty");
        }
        else{
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
   //
  return (
    <div className='container'>
        <h3>Add Todo Item</h3>
        <form onSubmit={submit}>
            <div className="mb-3">
                <input htmlFor="title" placeholder='Todo item' value={title} onChange={(e)=>setTitle(e.target.value)} type="text" className="form-control" id="title" aria-describedby="emailHelp"/>
            </div>

            <div className="mb-3">
                <input type="text" placeholder='write the details of your todo here!' value={desc} onChange={(e)=>setDesc(e.target.value)}  className="form-control" id="desc"/>
            </div>

            <button type="submit" className="btn bg-success text-light btn-sm">Add Todo</button>
        </form>
    </div>
  )
}
