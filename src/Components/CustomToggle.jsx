import React, { useState } from 'react'

function CustomToggle({label,value,getValue}) {
 
    const [current,setValue] = useState("")
    return (
   <div className='custom_toggle'>
        <label>{label}</label>
        <div className='toggle'>
            {value.map((item,idx)=>{
                return <div key={idx} onClick={()=>{
                    setValue(item);
                    getValue(item);
                }} className={` btn ${current===item && "active"}`}>
                    {item}
                </div>
            })}
        </div>
    </div>
  )
}

export default CustomToggle