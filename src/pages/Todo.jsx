import { useState } from "react";
import TodoItem from "../components/TodoItem";
import { useEffect } from "react";
import AddTodoForm from "../components/todocomponents/AddTodoForm";
import Filterbar from "../components/todocomponents/Filterbar";
import {useReducer} from "react";
import todoReducer from "../reducers/todoReducer";
export default function Todos() {
  const [todos,dispatch]=useReducer(todoReducer,[])
  const[newTodo,setTodo]=useState("")
  const [filter,setFilter]=useState("ALL")
  const[editId,setEditId]=useState(null)
  const[editText,setEditText]=useState("")
   const[search,setSearch]=useState("")
  const count1=todos.length
   const count2=todos.filter((t)=>t.completed).length

  useEffect(()=>{
    
    let temp=JSON.parse(localStorage.getItem("todos") || "[]")
    dispatch({type:"LOAD_TODOS",payload:temp})

  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
useEffect(() => {

    const todo = todos.find((t) => t.id === editId);

    if (todo) {
        setEditText(todo.title);
    }

}, [editId, todos]);

  const addTodo=()=>{
    

        dispatch({type:"ADD_TODO",payload:newTodo})
         setTodo("")
          
  }

   const deleteTodo=(id)=>{
    dispatch({type:"DELETE_TODO",payload:id})
   }
   const toggleComplete=(id)=>{
    dispatch({type:"TOGGLE_COMPLETE",payload:id})
   }
  
   const editTodo=(id)=>{
    dispatch({type:"UPDATE_TODO",payload:{id,title:editText}})
    setEditId(null)
   }
   
  
  
        let filteredTodos = todos.filter((todo) => {
             if(filter==="ALL") return true
             if(filter==="ACTIVE") return !todo.completed
             if(filter==="COMPLETED") return todo.completed
           }).filter((todo) => {
             return todo.title.toLowerCase().includes(search.toLowerCase());
           })

           const sortedTodos = [...filteredTodos].sort((a, b) => {
  if (a.completed === b.completed) return 0;

  if (a.completed) return -1;

  return 1;
});

    return (
        <div className=" flex flex-col gap-4 p-4">
          <AddTodoForm newTodo={newTodo} setTodo={setTodo} addTodo={addTodo} />

             <Filterbar filter={filter} setFilter={setFilter} count1={count1} count2={count2} />
            <div className="flex flex-col gap-2">
             <input type="search" placeholder="Search tasks..." className="border-2 border-gray-300 rounded-lg p-2" value={search} onChange={(e) => setSearch(e.target.value)} />
        
           
             {[...sortedTodos].map((todo,i) => (
                  todo.id==editId?<div className="flex gap-2">
                    <input      class="border-2 border-gray-300 rounded-lg p-2" type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                    <button className="bg-green-500 text-white px-2 py-1 rounded-lg"  onClick={() => editTodo(todo.id)}>save</button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded-lg" onClick={() => setEditId(null)}>cancel</button>
                  </div> : <TodoItem key={i} item={todo}  deleteTodo={deleteTodo} toggleComplete={toggleComplete} setEditId={setEditId} />
           ))}

            </div>

        </div>
    );
}