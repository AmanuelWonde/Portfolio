import React from 'react'
import TestimonialComponent from './TestimonialComponent'

function Testimonia() {
  return (
    <div className='Testimonia' id='client'>
      <div className='Testimonia_header'>
      <div className='Testimonia_header_bold'>
    TESTIMONIAL
      </div>
      <div className='Testimonia_header2'>
         Client Speak
      </div>
      </div>
      <div className='Testimonia_componentWrapper'>
         <TestimonialComponent/>
         <TestimonialComponent/>
      </div>
    </div>
  )
}

export default Testimonia