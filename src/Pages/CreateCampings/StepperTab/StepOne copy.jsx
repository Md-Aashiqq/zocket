import React, { useState } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const data = [{
    title:"Get Leads as calls",
    desc:"Reach broad audience and get leads through calls",
    icon:<span>W</span>,
    platfrom:"Google"
},
{
    title:"Get Leads as Facebook messages",
    desc:"Get more FB messages from Leads",
    icon:<span>W</span>,
    platfrom:"FB"
},
{
    title:"Get Leads as Facebook messages",
    desc:"Get more FB messages from Leads",
    icon:<span>W</span>,
    platfrom:"FB"
}
]


function StepOne({setValue,setActiveStep}) {

  const [activeCard,setActivecard] = useState(null);
  const [activeValue,setActiveVal] = useState("")

  const onCardClick = (val,idx)=>{
    setActivecard(idx)
    setActiveVal(val)
  }

  return (
    <div className='step_one'>
        <div className='card'>
            <div className='header'><h1>What you want to do?</h1> < span>  (Step of 1/4)</span></div>
           <div className='container'>

            <div className='product_card'>

              <div className='header'>
                <div className='profile'>
                  <img alt='as' src={""} />
                  <div>
                    <h1>Mukund Cake Shop</h1>
                    <p>Sponsored</p>
                  </div>
                </div>
              </div>

              <div className='body'>
                <p>We are the best bakery around you. Please like my page to get updates on exciting offers and discounts</p>
              </div>

            </div>

             {/* {data.map((item,idx)=>{
              return (<div key={idx} onClick={()=>onCardClick(item.platfrom,idx)} className={`select_card product_card ${idx===activeCard ? "active" : ""}`}>
                    <div className='icon'>
                      {item.icon}
                    </div>
                    <div className='content'>
                      <p>{item.title}</p>
                      <span>{item.desc}</span>
                    </div>
                    <div className='select_indicator'>
                     {idx===activeCard &&  <CheckCircleIcon fontSize='small' color='primary' />}
                    </div>
                </div>)
            })} */}
           </div>
            <div className='btn_section'>
            <button onClick={()=>{
                console.log("Clicked");
                setActiveStep(1)
               setValue((prevData)=>({
                  ...prevData,
                  stepOne:activeValue,
                }))
            }} disabled={activeCard===null} className='primary_btn'>Continue</button>
          </div>
        </div>
        
    </div>
  )
}

export default StepOne