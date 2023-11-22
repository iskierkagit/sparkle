import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Declarations = () => {
  return (
    <div class="parents-flex-container">
      <div class="parents-flex-child">
        <h3>Deklaracje</h3>
        <span>
          Nam sit amet viverra urna, sed aliquam risus. Morbi condimentum risus in 
          maximus sodales. Curabitur vel posuere nisi. Cras interdum eros in dolor 
          tempor commodo. Nunc et ante porttitor, vehicula urna vitae, pulvinar libero. 
          Mauris consequat a urna id iaculis. Vestibulum ante ipsum primis in faucibus 
          orci luctus et ultrices posuere cubilia curae; Praesent feugiat feugiat elit. 
          Integer et dapibus erat. Maecenas convallis mauris quis consequat viverra. 
          Suspendisse quam massa, iaculis a iaculis eget, faucibus vel ex.
          
          Nam finibus placerat arcu. Aenean vel odio eu ipsum maximus luctus quis eu tortor. Aliquam 
          rutrum nisl non nisl dictum, sed consectetur tellus ultrices.
        </span>
      </div>  
      <div class="parents-flex-child-image image-container">
        <LazyLoadImage className='image' src={'2.jpg'}/>
      </div>
    </div>
  );
}

export default Declarations;