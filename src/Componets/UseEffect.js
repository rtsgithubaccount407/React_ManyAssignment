import React,{useState,useEffect} from 'react'
const UseEffect = () => {
    const [gold, setGold] = useState(0)
    const [silver,setSilver] = useState(0)
    const [bronze, setBronze] = useState(0)
    

    useEffect(() => {
        console.log('Before')
        document.title=`Gold: ${gold} silver: ${silver} ${bronze}`
    },[gold,silver,bronze])
  return (
    <div>
          <h1>Gold:{gold} Silver:{silver} Bronze : {bronze}</h1>
          <button onClick={()=>setGold(gold+1) }>Gold</button>
          <button onClick={() => setSilver(silver + 1)}>Silver</button>
          <button onClick={() => setBronze(bronze + 1)}>Bronze</button>
    </div>
  )
}

export default UseEffect
