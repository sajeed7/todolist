import React, { useState } from 'react';

const Addtodo = (props) => {
    const [title, setTitle]= useState("");
    const [desc, setDesc]= useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description can not be Blank");
        }
        props.addTodo(title,desc);
    }
    return (
        <div className='container my-3'>
            <h3>
                Add a Todo
            </h3>
            <form onSubmit={submit}>
                <div className='mb-4'>
                    <label htmlFor="text" className='form-lable'>Todo Title</label>
                    <input type="text" value={title} className="form-control" onChange={(e)=>{setTitle(e.target.value)}} id="exampleInputText" />
                </div>

                <div className='mb-3'>
                    <label htmlFor="text" className='form-lable'>Todo Description</label>
                    <input type="text" value={desc} className="form-control" onChange={(e)=>{setDesc(e.target.value)}} id="exampleInputText" />
                </div>
                <div >
                    <button type="submit" className='btn btn-sm btn-success'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Addtodo;
