import React, { useState } from 'react'
import CustomSlider from '../../../Components/CustomSilder';
import CustomToggle from '../../../Components/CustomToggle';
import Input from '../../../Components/Input';

function StepThree({setValue,setActiveStep}) {

  const [activeValue,setActiveVal] = useState({
    budgetType:"",
    budgetAmt:0,
    startDate:"",
    endDate:"",
    locationType:"",
    location:""
  })

  const [startDate,setStartDate] = useState("")
  const [endDate,setEndDate] = useState("")
  const [budget,setBudget] = useState(1000)
  const [budgetType,setBudgetType] = useState("")

  const [location,setLoaction] = useState("")
  const [radius,setRadius] = useState(0)
  const [locationType,setLoactionType] = useState("")


  return (
    <div className='step_three'>
        <div className='card'>
            <div className='header'><h1>What you want to do?</h1> < span>  (Step of 1/4)</span></div>
           <div className='container'>

            <div className='budget_contanier'>

                <p className='title'>Budget and dates info</p>

                <div className='toggle_section'>
                    <CustomToggle getValue={(val)=>{
                        console.log(val)
                        setBudgetType(val)
                    }} label={"Budget"} value={["Lifetime","Daily"]} />
                </div>
                <div className='dates_grp'>
                        <Input label="Start date" type="date" placeholder="" onChange={setStartDate} />
                        <Input label="End date" type="date" placeholder=""  onChange={setEndDate} />
                </div>
                
                <div className='slider_container'>
                    <CustomSlider onChange={setBudget} max={10000} min={1000} label="Budget" />
                </div>

            </div>

             <div className='budget_contanier'>

                <p className='title'>Location info</p>

                <div className='toggle_section'>
                    <CustomToggle getValue={(val)=>{
                        setLoactionType(val)
                    }} label={"Location type"} value={["location","Radius"]} />
                </div>
                <div className='dates_grp'>
                    <Input label="Select Location" placeholder="Select a place name, address or coordinates" type="text"  onChange={setLoaction} />
                </div>
                
                <div className='slider_container'>
                    <CustomSlider  onChange={setRadius} label="Select target radius" max={30} min={1} />
                </div>

            </div>
     
           </div>
           
        </div>
         <div className='btn_section'>
            <button onClick={()=>{
                setActiveStep(3)
                const val = {
                                budgetType,
                                budget,
                                startDate,
                                endDate,
                                locationType,
                                location
                            }
               setValue((prevData)=>({
                  ...prevData,
                  stepThree:val,
                }))
            }} disabled={activeValue === ""} className='primary_btn'>Continue</button>
          </div>
        
    </div>
  )
}

export default StepThree