import React from 'react';
import VideoBg from '../../../Assets/video/sand_2.mp4'

const Sparkle = () => {
  return (
    <div>
      <h1 className='sparkle'>Iskierka</h1>
      <video src={VideoBg} autoPlay loop muted playsInline/>
    </div>
  );
}

export default Sparkle;
