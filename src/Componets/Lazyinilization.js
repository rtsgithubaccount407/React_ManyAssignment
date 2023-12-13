import React, { useState } from 'react';

const Lazyinilization = () => {
    const [a, setA] = useState(() => {
      console.log("I am excuted");
      return 5;
    });
    
  return (
    <div>
          <h1>Value of A is {a}</h1>
          <button onClick={()=>setA(a+1)}>Increse</button>
    </div>
  )
}

export default Lazyinilization
