import React from 'react'
import "../Styles/Gallery.css"
import gimg1 from"../Assets/gimg1.jpg"
import gimg2 from"../Assets/gmimg2.jpg"
import gimg3 from"../Assets/gimg3.jpg"
import gimg4 from"../Assets/surgeon-using-digital-tablet-operation-theater.jpg"
import gimg5 from"../Assets/gimg5.jpg"
import gimg8 from"../Assets/gimg6.avif"
import gimg7 from"../Assets/WhatsApp Image 2025-04-10 at 18.22.24_30a4a33f.jpg"
import gimg6 from"../Assets/different-doctors-doing-surgical-procedure-patient.jpg"

const Gallery = () => {
  return (
      <>
        <div className='galleryimg'>
        <h3 className="dt-title gallery-title">
          <span>Gallery</span>
        </h3>
        <div className='img1'>
<img src={gimg1} alt='dgale'></img>
<img src={gimg2} alt='dgale'></img>
<img src={gimg3} alt='dgale'></img>
<img src={gimg4} alt='dgale'></img>
</div>

<div className='img2'>
<img src={gimg5} alt='dgale'></img>
<img src={gimg6} alt='dgale'></img>
<img src={gimg7} alt='dgale'></img>
<img src={gimg8} alt='dgale'></img>
</div>
        </div>
    </>
  )
}

export default Gallery