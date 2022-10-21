import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import StepOne from './StepperTab/StepOne';
import StepTwo from './StepperTab/StepTwo';
import StepThree from './StepperTab/StepThree';
import { ColorlibConnector, ColorlibStepIcon } from './CustomStepper';




function CreateCampings() {

    const [activeStep,setActiveStep] = useState(0);
    const [value,setValue] = useState({
        stepOne:"",
        stepTwo:"",
        stepThree:"",
        stepFour:"",
    })

    useEffect(() => {
        console.log(value)
    }, [value])
    


    const steps = ['What you want to do', 'Choose product', 'Campaign settings','Ready'];


  const showStep = (idx) =>{

    switch (idx) {
        case 0:
            return <StepOne setActiveStep={setActiveStep} setValue={setValue} />
        case 1:
            return <StepTwo setActiveStep={setActiveStep} setValue={setValue} />
        case 2:
            return  <StepThree setActiveStep={setActiveStep} setValue={setValue} />
        default:
            return <h1>Error</h1>
    }

  }  

  return (
    <div className='create_page'>
        <div className='top_section'>
            <div className='text_content'>
                <h1>Your Ad Campaign</h1>
                <p>Launch your ad in just 4 easy steps </p>
            </div>
        </div>
        <div className='stepper_section'>
            <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
        </div>
        <div className='card_content'>
            {showStep(activeStep)}
        </div>
    </div>
  )
}

export default CreateCampings