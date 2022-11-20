
import React, {useState} from 'react'


export default function TextFrom(props) {
    const handleUpClick = ()=>{
        console.log("UpperCase was cliked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
      console.log("UpperCase was cliked" + text);
      let newText = text.toLowerCase();
      setText(newText)
  }
  const handleClearClick = ()=>{
    console.log("UpperCase was cliked" + text);
    let newText = '';
    setText(newText)
}
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)

    }
    const [text,setText] = useState('');
    //text = "new text";
    //setText("new text");
  return (
    <>
    <div className="container"style={{color:props.mode==='dark'?'white':'black',color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
  
    <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} id="myBox" rows="9"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>ClearText</button>
</div>

   <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your text sumaary</h1>
    <p>{text.split(" ").length} words and {text.length} character</p>
    <p>{0.008 * text.split(" ").length } Minutes read</p>
    <h2> Preview</h2>
    <p> {text}</p>
   </div>
    </>
  )
}
