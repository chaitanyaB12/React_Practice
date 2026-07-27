import { useState } from "react"
import { AiFillDelete } from "react-icons/ai";


function TodoList() {
  const [todoitem, setTodoItem] = useState("");
  const [todos, setTodos] = useState([]);

  const addtodos = ()=>{
    if(todoitem.trim() === "") return
    setTodos([...todos, todoitem]);
    setTodoItem("")
  }

  const DeleteTodo = (deleteindex)=>{
    setTodos(todos.filter((_ ,index)=> index !== deleteindex))
  }

  return (
    <div className="bg-mist-700  text-yellow-400 h-screen pt-10">
        <h2 className=" flex justify-center items-center text-4xl sm:text-2xl lg:text-6xl font-serif mt-2">Todo List</h2>     
        <div className="flex justify-center items-center mt-6 gap-3">
            <input value={todoitem} onChange={(e)=>setTodoItem(e.target.value)} type="text"placeholder="Type your todo here" className="flex justify-center border-2 border-bs-blue-400 border-b-emerald-400 border-r-rose-200 border-l-red-300 focus:ring-0 focus:outline-none p-2 cursor-pointer placeholder-mist-200 text-white items-center w-1/5 py-2"/>
            <button onClick={addtodos} className="border h-9 flex justify-center items-center w-22 hover:bg-amber-300 hover:text-black hover:scale-110 cursor-pointer transition-all ">Add</button>
        </div>
        <div className="text-white">
           
              {todos.map((item, index)=>{
                return(
                  <ul className="flex justify-center items-center m-2  md:m-4 sm:m-1" key={index}>
                    <li className="border w-sm h-10 flex items-center justify-center">{item}</li>
                    <li className="ml-4"><button className=" text-2xl" onClick={()=>DeleteTodo(index)}><AiFillDelete/></button></li>
                  </ul>
                )
            })}
            
        </div>
    </div>
  )
}

export default TodoList