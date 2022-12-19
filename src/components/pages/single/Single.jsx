import React from 'react'
import Sidebar from '../../sidebar/Sidebar'
import Singlepost from '../../singlepost/Singlepost'
import './single.css'

const Single = () => {
  return (
    <div className='single'>
        <Singlepost/>
        <Sidebar/>
    </div>
  )
}

export default Single
