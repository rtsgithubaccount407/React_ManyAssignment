import React,{useState} from 'react'

const CapitalButton = () => {
    const [text, setText] = useState("");

    function texttoUppar(event) {
        setText(event.target.value)
    }
    function CapitalButtonHandle() {

        const w  = text.toUpperCase();
        setText(w);
    }
    const SmallButtonHandle = () => {
        const small = text.toLowerCase();
        setText(small)
    }
    const clearButton = () => {
        const r = "";
        setText(r)
    }


  return (
    <div>
      <div>
        <textarea
          type="textarea"
          value={text}
          onChange={texttoUppar}
          rows="5"
          cols="80"
        />
        <button onClick={CapitalButtonHandle}>Capital Button</button>
        <button onClick={SmallButtonHandle}>Small Button</button>
        <button onClick={clearButton}>Clear</button>
        {/* <button onClick={undo}>Search</button> */}
      </div>
      <div>
        <h1>Your text summary </h1>
        <p>
          {text.split(" ").length} word and {text.length} characters
        </p>
      </div>
      <div>
        <h2>Privew</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default CapitalButton
