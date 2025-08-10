import { useState } from 'react'

function App() {
  const [color,setColor]=useState("white")
  const mybg={
    backgroundColor:`${color}`
  }
  return (
    <div>
      <div className=' flex items-end justify-center w-screen h-screen' style={mybg}>
        <div className='flex gap-4 bg-gray-500 mb-8 p-2 rounded-md'>
          <button className='bg-red-500 text-white w-14 h-8 rounded-md cursor-pointer font-bold'
            onClick={()=>setColor("red")}
          >Red</button>
          <button className='bg-green-500 text-white w-14 h-8 rounded-md cursor-pointer font-bold'
            onClick={()=>setColor("green")}
          >Green</button>
          <button className='bg-yellow-500 text-white w-14 h-8 rounded-md cursor-pointer font-bold'
            onClick={()=>setColor("yellow")}
          >Yellow</button>
          <button className='bg-blue-500 text-white w-14 h-8 rounded-md cursor-pointer font-bold'
            onClick={()=>setColor("blue")}
          >Blue</button>
          <button className='bg-gray-400 text-white w-14 h-8 rounded-md cursor-pointer font-bold'
            onClick={()=>setColor("white")}
          >White</button>
          <button className='bg-black text-white w-14 h-8 rounded-md cursor-pointer font-bold'
            onClick={()=>setColor("black")}
          >Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
