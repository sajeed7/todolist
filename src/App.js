import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import React, { useState } from 'react';
import Addtodo from "./MyComponents/Addtodo"

function App() {

  const addTodo =(title, desc)=>{
      console.log(" adding todo", title, desc);
      let sno;
      if(todos.length == 0){
        sno=0;
      }
      else{
       sno = todos[todos.length-1].sno +1;
      }
      const myTodo ={
        sno:sno,
        title:title,
        desc:desc
      }
      setTodos([...todos, myTodo]);
      console.log(myTodo);
  }

  const onDelete = (todo) => {

    setTodos(todos.filter((todos) => {
      return todos !== todo;
    }));
  }
  const [todos, setTodos] = useState([
    
    
  ]);
  return (
    <>
      <Header title="My TodoList" />
      <Addtodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>

  );
}

export default App;