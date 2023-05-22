import React from 'react'
import './Summary.css'
function SummaryComponent({year,title,camp,description}) {
  return (
    <div className='SummaryComponent'> 
    <div className='SummaryComponent_childWrapper'>
    <div className='SummaryComponent_yeare'>{year}</div>
    <div className='SummaryComponent_title'>{title}</div>
    <div className='SummaryComponent_title2'>{camp}</div>
    <p>{description}</p>
    </div>
    </div>
  )
}

export default SummaryComponent