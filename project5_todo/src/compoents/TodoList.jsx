

function TodoList() {
  return (
    <div className="bg-mist-700  text-yellow-400 h-screen pt-10">
        <h2 className=" flex justify-center items-center text-4xl sm:text-2xl lg:text-6xl font-serif mt-2">Todo List</h2>     
        <div className="flex justify-center items-center mt-6 gap-3">
            <input type="text"placeholder="Type your todo here" className="flex justify-center border-2 border-bs-blue-400 border-b-emerald-400 border-r-rose-200 border-l-red-300 focus:ring-0 focus:outline-none p-2 cursor-pointer placeholder-mist-200 text-white items-center w-1/5 py-2"/>
            <button className="border h-9 flex justify-center items-center w-22 hover:bg-amber-300 hover:text-black hover:scale-110 cursor-pointer transition-all ">Add</button>
        </div>
        <div className="text-white">
            Todo items
        </div>
    </div>
  )
}

export default TodoList