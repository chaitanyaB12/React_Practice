import "./app.css"
import UseToggle from "./UseToggle"

function App() {
  
  const [value , togglevalue] = UseToggle(true);

  const [data , setData] = UseToggle(true)

  return (
   
   <div>
    <button onClick={togglevalue}>Toggle Heading</button>
    <button onClick={()=>togglevalue(false)}>Hide Heading</button>
    <button onClick={()=>togglevalue(true)}>Show Heading</button>
    

    <div>
      {
      value ? <h1>Custom Hooks in Reactjs</h1> : null
      }
    </div>
      <hr />

      <button onClick={setData}>Data Heading</button>
      <button onClick={()=>setData(false)}>Hide Data</button>
      <button onClick={()=>setData(true)}>Show Data</button>

      <div>
        {data ? <h1>Custom Data Heading</h1> : null
        }
      </div>


   </div>
  
  )
}

export default App
