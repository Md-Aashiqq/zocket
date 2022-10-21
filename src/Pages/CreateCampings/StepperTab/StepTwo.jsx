import React, { useState } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const data = [{
    title:"Bluberry cake with raw toppings",
    desc:"Rs: 2,290",
    imgURL:<span>W</span>,
   
},
{
    title:"Chocolate truffle cake",
    desc:"Rs: 2,190",
    imgURL:<span>W</span>,
   
},
{
    title:"Browine cake with fluffy cream",
    desc:"Rs: 1,222",
    imgURL:<span>W</span>,
   
}
]


function StepTwo({setValue,setActiveStep}) {

  const [activeCard,setActivecard] = useState(null);
  const [activeValue,setActiveVal] = useState({})

  const onCardClick = (val,idx)=>{
    setActivecard(idx)
    setActiveVal(val)
  }

  return (
    <div className='step_one'>
        <div className='card'>
            <div className='header'><h1>What you want to do?</h1> < span>  (Step of 1/4)</span></div>
           <div className='container'>
             {data.map((item,idx)=>{
              return (<div key={idx} onClick={()=>onCardClick(item,idx)} className={`select_card product ${idx===activeCard ? "active" : ""}`}>
                    <div className='icon'>
                      <img src={item.imgURL} />
                    </div>
                    <div className='content'>
                      <p>{item.title}</p>
                      <span>{item.desc}</span>
                    </div>
                    <div className='select_icon'>
                        <CheckCircleOutlineIcon color={`${idx===activeCard ? "primary" : "disabled"}`} fontSize='small' />
                    </div>
                </div>)
            })}
           </div>
            <div className='btn_section'>
            <button onClick={()=>{
                console.log("Clicked");
                setActiveStep(2)
               setValue((prevData)=>({
                  ...prevData,
                  stepTwo:activeValue,
                }))
            }} disabled={activeValue === ""} className='primary_btn'>Continue</button>
          </div>
        </div>
        
    </div>
  )
}

export default StepTwo