import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";

const DisabilityCertificate = () => {
  return (
    <div class="parents-flex-container">
      <div class="parents-flex-child">
        <h3>Orzeczenie o niepełnosprawności</h3>
        <span>
            Morbi ut dignissim ipsum. Pellentesque tempus tincidunt mi, 
            nec ultrices orci pulvinar vel. Proin vitae elit ultricies, 
            ullamcorper leo et, suscipit sem. Suspendisse vitae tincidunt augue, 
            vitae sodales mi. Praesent tincidunt dictum interdum. 
            In cursus dignissim egestas. Donec efficitur ultrices est, elementum 
            porttitor mauris egestas sit amet. Etiam volutpat tortor dolor, mollis 
            iaculis tortor finibus ut. Nulla mattis nibh eu tincidunt faucibus. 
            Quisque sollicitudin sed dui a eleifend. Nunc quis tincidunt leo.
        </span>
      </div>  
      <div class="parents-flex-child-image image-container">
        <LazyLoadImage className='image' src={require("../../../Assets/img/2.jpg")}/>
      </div>
    </div>
  );
}

export default DisabilityCertificate;