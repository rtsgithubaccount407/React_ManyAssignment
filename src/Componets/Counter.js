import React, { useState } from 'react'

const Counter = () => {
    const[count,setCounter] = useState(0)
  return (
    <div>
          <h2>{count}</h2>
          <button onClick={()=>count<10 ? setCounter(count+1):" "}>click1</button>
          <button onClick={()=>setCounter(count-1)}>click2</button>
          <button onClick={()=>setCounter(0)}>click3</button>
    </div>
  )
}

export default Counter
