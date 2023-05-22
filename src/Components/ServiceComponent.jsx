import React from 'react'
import './Service.css'
function ServiceComponent({icon,header,paragraph}) {
  return (
    <div className='ServiceComponent'>
        <div className='ServiceComponent_icon'>
            {icon}
        </div>
        <div className='ServiceComponent_paragraph'>
      <div className='ServiceComponent_paragraph_header'>{header}</div>
      <div>{paragraph}</div>
        </div>
    </div>
  )
}
export default ServiceComponent