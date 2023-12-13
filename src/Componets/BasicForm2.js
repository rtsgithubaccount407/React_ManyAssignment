import React,{useState} from 'react'

const BasicForm2 = () => {
    const [name, setName] = useState("")
    const [finalresult,setFinalResult] = useState("")
    function myFuncton(event) {
        setName(event.target.value)
    }
    function handleSubmit() {
        setFinalResult(name)
        // setName("")
    }
  return (
    <div>
      <input type="text" placeholder="Enter ur Name" onChange={myFuncton} />
      <button onClick={handleSubmit}>Submit</button>
      <p>{finalresult}</p>
    </div>
  );
}

export default BasicForm2
