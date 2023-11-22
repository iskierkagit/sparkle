import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProLife = () => {
  return (
    <div class="parents-flex-container">
      <div class="parents-flex-child">
        <h3>Ustawa za życiem</h3>
        <span>
          Mauris porta purus at metus malesuada, nec porta mauris rutrum. Sed 
          sodales massa non placerat pellentesque. Ut cursus luctus pellentesque. 
          Sed ut lorem justo. Duis nunc sem, ultricies a quam eu, finibus mollis nibh. 

          Nullam eu diam magna. Phasellus tristique suscipit iaculis. Praesent non 
          pretium nisi, a maximus leo. Nunc sollicitudin erat quis molestie bibendum. 
          Praesent sed commodo orci, eget suscipit nisi. Nunc quis ipsum et sapien 
          facilisis dapibus. Phasellus luctus elit id enim convallis, a vestibulum risus 
          efficitur. Phasellus vitae consequat nisi, sed eleifend ex. 
        </span>
      </div>  
      <div class="parents-flex-child-image image-container">
        <LazyLoadImage className='image' src={require("../../../Assets/img/4.jpg")}/>
      </div>
    </div>
  );
}

export default ProLife;