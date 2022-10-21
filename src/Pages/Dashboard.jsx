import React from 'react'
import CreateCampings from './CreateCampings'

function Dashboard() {
  return (
    <div className='dashboard'>
      {/* <div className='dashboard_top'>
        <div className='text_content'>
          <h1>Your Campaigns</h1>
          <p>Check the list of campigns you created </p>
        </div>
        <button className='primary_btn'>Create Campaigns</button>
      </div> */}
      <CreateCampings />
    </div>
  )
}

export default Dashboard