import React,{useState} from 'react'

const BasicForm = () => {
    const [name,SetName] = useState("")
    function myFunction(event) {
        SetName(event.target.value)
    }
  return (
      <div>
          <input type="text" placeholder="Enter you name" onChange={myFunction} />
      <p>{name}</p>
    </div>
  )
}

export default BasicForm
