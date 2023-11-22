import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Rehabilitation = () => {
  return (
    <div class="parents-flex-container">
      <div class="parents-flex-child-image image-container">
        <LazyLoadImage className='image' src={require("../../../Assets/img/5.jpg")}/>
      </div>  
      <div class="parents-flex-child">
        <h3>Rehabilitacja</h3>
        <span>
          Mauris porta purus at metus malesuada, nec porta mauris rutrum. Sed 
          sodales massa non placerat pellentesque. Ut cursus luctus pellentesque. 
          Sed ut lorem justo. Duis nunc sem, ultricies a quam eu, finibus mollis nibh. 

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

export default Rehabilitation;