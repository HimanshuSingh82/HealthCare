import React from 'react'
import "../Styles/Location.css"
const Location = () => {
  return (
    <><div className='Location'>
<h3 className="dt-title location-title">
          <span>Location</span>
        </h3>
        </div>
        <div className='responsive-map'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.4056134257103!2d83.43054730937327!3d26.73142947665873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39915ca3e2aa136b%3A0xc039bdf0211338a9!2sMadan%20Mohan%20Malaviya%20University%20Of%20Technology!5e0!3m2!1sen!2sin!4v1721303078800!5m2!1sen!2sin" width="600" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
       </>
  )
}

export default Location