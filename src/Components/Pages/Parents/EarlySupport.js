import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";


const EarlySupport = () => {
  return (
    <div class="parents-float-container">
        <LazyLoadImage className='image' src={require("../../../Assets/img/3.jpg")}/>
        <div className='parents-float-text'>
          <h3>Wczesne wspomaganie rozwoju</h3>
          <span>
            Mauris porta purus at metus malesuada, nec porta mauris rutrum. Sed 
            sodales massa non placerat pellentesque. Ut cursus luctus pellentesque. 
            Sed ut lorem justo. Duis nunc sem, ultricies a quam eu, finibus mollis nibh. 
            
            Nam sit amet viverra urna, sed aliquam risus. Morbi condimentum risus in 
            maximus sodales. Curabitur vel posuere nisi. Cras interdum eros in dolor 
            tempor commodo. Nunc et ante porttitor, vehicula urna vitae, pulvinar libero. 
            Mauris consequat a urna id iaculis. Vestibulum ante ipsum primis in faucibus 
            orci luctus et ultrices posuere cubilia curae; Praesent feugiat feugiat elit. 
            Integer et dapibus erat. Maecenas convallis mauris quis consequat viverra. 
            Suspendisse quam massa, iaculis a iaculis eget, faucibus vel ex.

            Nullam eu diam magna. Phasellus tristique suscipit iaculis. Praesent non 
            pretium nisi, a maximus leo. Nunc sollicitudin erat quis molestie bibendum. 
            Praesent sed commodo orci, eget suscipit nisi. Nunc quis ipsum et sapien 
            facilisis dapibus. Phasellus luctus elit id enim convallis, a vestibulum risus 
            efficitur. Phasellus vitae consequat nisi, sed eleifend ex. 
            
            Quisque in justo lorem. Class aptent taciti sociosqu ad litora torquent per 
            conubia nostra, per inceptos himenaeos. Maecenas est lorem, luctus sed ex id, 
            tincidunt faucibus lacus. Fusce eu interdum mi, id blandit urna. Nam finibus 
            placerat arcu. Aenean vel odio eu ipsum maximus luctus quis eu tortor. Aliquam 
            rutrum nisl non nisl dictum, sed consectetur tellus ultrices.
          </span>
        </div>
      </div>
  );
}

export default EarlySupport;