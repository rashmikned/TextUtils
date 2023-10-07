import { useState } from "react"
import React from 'react'

export default function TextForm(props) {

    
    const [text,setText] = useState('');
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleLowClick = ()=>{
        const newText = text.toLowerCase();
        setText(newText);
    }
    const handleClrClick = ()=>{
        setText('');
    }
    const handleRevClick = ()=>{
        const newText = text.split('').reverse().join('');
        setText(newText);
    }
    const handleCapClick = ()=>{
        const newText = text.charAt(0).toUpperCase()+text.slice(1);
        setText(newText);
    }
    const handleSpClick = ()=>{
        let newText = ''
        for (let i = 0; i < text.length-1; i++) {
            if (!( text[i] == ' ' && text[i+1]==' ')) newText = newText+text[i];    
        }
        setText(newText);
    }




  return ( 

    <>
 <div className="container" style={{color:props.mode=='light'?'black':'white'}}>

<h2 className="my-2"> {props.heading } </h2>
<div className="mb-3"  >
  <textarea className="form-control" style={{backgroundColor: props.mode=='light'?'white':'grey',color:props.mode=='light'?'black':'white'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" ></textarea>
  
</div>
<button className= "btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase </button>
<button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to LoweCase </button>
<button className="btn btn-primary mx-2 my-2" onClick={handleRevClick}>Reverse The Text </button>
<button className="btn btn-primary mx-2 my-2" onClick={handleCapClick}>Capitalize First Letter </button>
<button className="btn btn-primary mx-2 my-2" onClick={handleSpClick}>Remove Extra Spaces</button>
<button className=" btn btn-danger mx-2 my-1" onClick={handleClrClick}>Clear Text </button>
<hr />
        <h2 className="my-3">Your Text Summary</h2>
        <p>{text.split(' ').length } WORDS and {text.length} CHARACTER </p>
        <p>{0.008 * text.split(' ').length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Text In Above Box To Preview Here"}</p>
   
   
    <br />
    <br />
    </div>
    </> 
  )
}
