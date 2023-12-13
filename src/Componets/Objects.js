import React,{useState} from 'react'

const Objects = () => {
    const [coin, setCoin] = useState({ gold: 0, silver: 0, bronze: 0 })
    console.log(coin)
    function increseGold() {
      setCoin({ ...coin, gold: coin.gold + 1 });
    }
  return (
    <div>
      <h1>
        Gold:{coin.gold+1} Silver : {coin.silver + 1} bronze:{coin.bronze + 1}
      </h1>

      <button onClick={increseGold}>Gold</button>
      <button onClick={() => setCoin({ ...coin, silver: coin.silver + 1 })}>
        button2
      </button>
      <button onClick={() => setCoin({ ...coin, bronze: coin.bronze + 1 })}>
        bronze
      </button>
    </div>
  );
}

export default Objects
