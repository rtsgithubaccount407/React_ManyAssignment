import React,{useState} from 'react'

const Async = () => {
    const [a ,setA] =useState(0)
    function inc() {
        setA(a + 1);
        setA(a + 1);
        setA(a + 2);
        setA(a + 3);
        setA(a + 4);
        setA(a + 5);
        setA(a + 1);
    }
    function inc2() {
        setA(a => a+1)
        setA(a => a + 1)
        setA(a => a + 1)
        setA(a => a + 1)
        console.log('modified value of a is',a)
    }
    function inc3() {
        
        setA(()=>a+1)
        setA(()=>a+2)
        setA(()=>a+1)
    }
  return (
    <div>
          <h1>Value of A is a: {a}</h1>
          <button onClick={inc3}>Increment</button>
    </div>
  )
}

export default Async
