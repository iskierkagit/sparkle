import React from 'react';
import '../../../App.css';
import VideoBg from '../../../Assets/video/sand_2.mp4'

const About = () => {
  return <div>
      <video src={VideoBg} autoPlay loop muted/>
  </div>
}
export default About;