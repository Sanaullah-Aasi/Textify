import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showalert("Converted to Uppercase","success");
    }
         const handlelowClick =()=>{
             console.log("Lowercase was clicked");
             let newText=text.toLowerCase();
             setText(newText);
             props.showalert("Converted to Lowercase","success");
        
    }
    const handlecleartext =()=>{
        // console.log("Clear was clicked");
        let newText='';
        setText(newText);
        props.showalert("Text Cleared","success");
   
}

    const handleOnchange =(event)=>{
        console.log("Onchange  was clicked");
        setText(event.target.value);
    }
    const handleCopyText = () => {
        console.log("Copy text was clicked");
        navigator.clipboard.writeText(text);
        alert("Text copied to clipboard!");
        props.showalert("Text Copied Successfully","success");
    }
    const handleReverseText = () => {
        console.log("Reverse text was clicked");
        let reversedText = text.split('').reverse().join('');
        setText(reversedText);
        props.showalert("Text Reversed","success");
    }

    const handleextraspaces = () =>{
        let newText=text.split(/[ ]+/);
            setText(newText.join(" "))
            props.showalert("Extra-Spaces Removed","success");

    }
    const handleRandomizeCase = () => {
        console.log("Randomize case was clicked");
        let randomizedText = text.split('').map(char => {
            // Randomly decide whether to convert to uppercase or lowercase
            return Math.random() < 0.5 ? char.toUpperCase() : char.toLowerCase();
        }).join('');
        setText(randomizedText);
        props.showalert("Text Randomized","success");
    }
    
    const[text,setText]=useState('Enter text here');
//  text="new text"; wrong way to update
//  setText("new text"); right way to update
    return (
        <>
    <div className="container"style={{color:props.Mode==='dark'?'white':'black'}}>
   <h1>Enter Text Below to Analyze</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.Mode==='dark'?'grey':'white' ,color:props.Mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
  </div>
  
<button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}> Convert to Uppercase</button>
 <button className='btn btn-primary mx-2 my-2' onClick={handlelowClick}> Convert to Lowercase</button> 
 <button className='btn btn-primary mx-2 my-2' onClick={handlecleartext}> Clear Text </button> 
 <button className='btn btn-primary mx-2 my-2' onClick={handleCopyText}>Copy Text</button>
 <button className='btn btn-primary mx-2 my-2' onClick={handleReverseText}>Reverse Text</button>
 <button className='btn btn-primary mx-2 my-2' onClick={handleRandomizeCase}>Randomize Case</button>
 <button className='btn btn-primary mx-3 my-3' onClick={handleextraspaces}>Remove Extra Spaces</button>

    </div>
    <div className={`container my-3`} style={{ color: props.Mode === 'dark' ? 'white' : 'black' }}>
  <h2>Your Text Summary</h2>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length > 0 ? text : "Enter some Text to preview"}</p>
</div>



    </>
  )
}
