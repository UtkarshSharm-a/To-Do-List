import { useState } from "react"


function App() {
  const [first, setfirst] = useState("")
  const [second, setSecond] = useState("")
  const [maintask, setMaintask] = useState([])

  ///form handler 
  const submitHandler=(e)=>{
    e.preventDefault()
    // console.log(first)
    // console.log(second)
   setMaintask([...maintask,{first,second}])
    setfirst("")
    setSecond("")
    console.log(maintask)
  }




  let renderTask=<h1>Not task Avlaible</h1>
  
  // /delete function is here
  const deleteHandler=(i)=>{
    let copyTask=[...maintask]
    copyTask.splice(i,1)
    setMaintask(copyTask)

  }




///task show case 

if(maintask.length>0){

  renderTask=maintask.map((t,i)=>{
    return( 
    <div key={i} className="mb-2">
      <h2 className="text-1xl text-black font-bold mb-2 text-bold">{t.first}</h2>
      <h2>{t.second}</h2>

      <button onClick={()=>{
        deleteHandler(i)
      }} className="bg-red-500 mb-1 px-2 py-1 rounded-md">delete</button>
    </div>
    );
  })

}


  return (
    <>
    <div className="h-[200px] w-full bg-black text-white flex items-center justify-center">
      <h1 className="text-5xl" >My To-Do List App</h1>
    </div>

    <form onSubmit={submitHandler} className="p-4 flex items-center justify-center  h-48  bg-black"  action="">
      <input className="px-4 py-1 border-1 border-l-zinc-950 " type="text" placeholder="Enter task title" value={first} onChange={(e)=>{
        setfirst(e.target.value)
      }}/>
      <input className="ml-3 px-4 py-1  border-1 border-l-zinc-950" type="text" placeholder="Task Detail" value={second} onChange={(e)=>{
        setSecond(e.target.value)
      }} />
      <button className="text-white ml-2 text-2xl bg-blue-500 px-4  rounded-md">Create</button>
    </form>

    <div className="p-8 bg-slate-200">
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default App
