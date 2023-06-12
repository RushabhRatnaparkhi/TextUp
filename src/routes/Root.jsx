import React,{useState}from 'react'


export default function TextForm(props) {
 
  const handlechange=(event)=>{
    setText(event.target.value);
  }
  const upclick=()=>{
    let uptext=text.toUpperCase();
    setText(uptext)
    props.showAlert("Text converted to uppercase","success")
   
  }
  const lowclick=()=>{
    let lowtext=text.toLowerCase();
    setText(lowtext)
    props.showAlert("Text converted to lowercase","success")
   
  }
  const clearclick=()=>{
    let newtext="";
    setText(newtext);
    props.showAlert("Text cleared","success")
    
   
  }
  const [text,setText]=useState("");
  return (
    <>
    <div className='container' style={{backgroundColor:props.mode==="light"?"white":"#343a40",color:props.mode==="light"?"black":"white"}}>
        <h2>{props.heading}</h2>
<div className="mb-3 ">
 
  <textarea className="form-control"  value={text}onChange={handlechange} style={{backgroundColor:props.mode==="light"?"white":"#343a40",color:props.mode==="light"?"black":"white"}}id="Mybox" rows="10"></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={upclick}>Upper Case</button>
    
    <button className='btn btn-primary mx-2' onClick={lowclick}>Lower Case</button>
    <button className='btn btn-primary mx-2' onClick={clearclick}>Clear</button>
    </div>
   <div className='container my-2' style={{backgroundColor:props.mode==="light"?"white":"#343a40",color:props.mode==="light"?"black":"white"}}>
    <h2 style={{backgroundColor:props.mode==="light"?"white":"#343a40",color:props.mode==="light"?"black":"white"}}>Your text summary</h2>
    <p>{text.split(" ").length} Words, {text.length} characters</p>
     <p>{0.08*text.split(" ").length} Minutes required to read</p>
    <h2>Preview</h2>
    <p>
      {text.length>0?text:"Text prieview will be visible here"}
    </p>
   </div>
    </>
  )
}
