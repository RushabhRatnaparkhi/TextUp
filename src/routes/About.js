import React,{useState} from 'react'

export default function About(props) {

    
    const [mystyle,setStyle]=useState({
        color:'white',
        backgroundColor:'black'
    })
    const [ModeBtnName,changeMBtnName]=useState("Light Mode")
    const  toggleMode=()=>{
       if(mystyle.color==='white') 
       {setStyle({
            color:'black',
            backgroundColor:'white'
        })
        changeMBtnName("Dark Mode")}
        else{setStyle({
            color:'white',
            backgroundColor:'black'
        })
        changeMBtnName("Light Mode")}
    }
  return (
    <div classNameName='container' style={{backgroundColor:props.mode==="light"?"white":"#343a40",color:props.mode==="light"?"black":"white"}}>
        <h2>About us</h2>
        <div className="accordion" id="accordionExample" style={{backgroundColor:props.mode==="light"?"white":"#343a40",color:props.mode==="light"?"black":"white"}}>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" style={{backgroundColor:props.mode==="light"?"white":"#343a40",color:props.mode==="light"?"black":"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={{backgroundColor:props.mode==="light"?"white":"#343a40",color:props.mode==="light"?"black":"white"}}>
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={{backgroundColor:props.mode==="light"?"white":"#343a40",color:props.mode==="light"?"black":"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Accordion Item #2
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={{backgroundColor:props.mode==="light"?"white":"#343a40",color:props.mode==="light"?"black":"white"}}>
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={{backgroundColor:props.mode==="light"?"white":"#343a40",color:props.mode==="light"?"black":"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Accordion Item #3
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={{backgroundColor:props.mode==="light"?"white":"#343a40",color:props.mode==="light"?"black":"white"}}>
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    </div>
   
    </div>
  )
}
