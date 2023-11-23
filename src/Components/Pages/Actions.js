import React from 'react'
import VideoBg from '../../Assets/video/sand_2.mp4'

const Gallery = () => {
  return (
    <div>
      Działania
      <video src={VideoBg} autoPlay loop muted playsInline/>
    </div>
  )
}

export default Gallery;
