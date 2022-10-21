import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function CustomSlider({label,max,min,onChange}) {
  return (
    <div className='slider'>
        
    
    <label>{label}</label>

      <Slider
        min={min}
        max={max}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        color="primary"
        onChange={(e,val)=>{
            onChange(val)
        }}
      />

    <div className='range'>
        <p>{min}</p>
        <p>{max}</p>
    </div>
      
    </div>
  );
}
