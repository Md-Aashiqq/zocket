import React from 'react'

function Input({label,type,placeholder,onChange}) {
  return (
    <div className='input'>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} onChange={(e)=>onChange(e.target.value)} />
    </div>
  )
}

export default Input