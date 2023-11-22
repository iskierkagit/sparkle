import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";

const FirstSteps = () => {
  return (
    <div class="parents-flex-container">     
      <div class="parents-flex-child-image image-container">
        <LazyLoadImage className='image' src={require("../../../Assets/img/1.jpg")}/>
      </div>  
      <div class="parents-flex-child">
        <h3>Pierwsze kroki</h3>
        <span>
            Vestibulum euismod nisi vel nisl eleifend, in ultricies eros 
            sollicitudin. Fusce urna neque, gravida ut est vitae, placerat tincidunt 
            metus. Nulla lacinia id lacus at bibendum. Quisque nec consectetur magna, 
            ut scelerisque ex. Vestibulum quis est id quam commodo accumsan at vel 
            magna. Aenean tincidunt justo eu elit iaculis, vel cursus metus facilisis. 
            Nulla commodo, lectus vel blandit maximus, sapien nisl mollis nunc, 
            in mattis quam augue lacinia justo. Nam nec lacinia augue. Phasellus 
            fermentum ut est finibus finibus. Sed sed vestibulum felis, vel ultricies 
            nisl.
        </span>
      </div>
    </div>
  );
}

export default FirstSteps;