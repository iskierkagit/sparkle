import React from 'react';
import '../../Styles/BaseBackground.css'
import '../../Styles/Management.css'
import VideoBg from '../../../Assets/video/sand_2.mp4'
import{
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Management = () => {
  return (
    <div className='base'>
      {/* <p className='management-title'>Nasza drużyna</p> */}
      <div className='management-flex-container'>
        <div className='management-flex-child'>
          <div className='management-content'>
            <img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/8021/avatar2.png" 
            height="128" width="128"/>
            <h2>Jan Nowak</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur.</h3>
            <a href="mailto:kontakt@iskierka.org.pl" className="gmail social"
              target="_blank" rel="noreferrer noopener">
              <FontAwesomeIcon icon={faEnvelope} size="2x"/>
            </a>
          </div>
        </div>

        <div className='management-flex-child'>
          <div className='management-content'>
            <img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/8021/girl-png.png" 
            height="128" width="128"/>
            <h2>Anna Kowalska</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur.</h3>
            <a href="mailto:kontakt@iskierka.org.pl" className="gmail social"
              target="_blank" rel="noreferrer noopener">
              <FontAwesomeIcon icon={faEnvelope} size="2x"/>
            </a>
          </div>
        </div>

        <div className='management-flex-child'>
          <div className='management-content'>
            <img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/8021/avatar1.png" 
            height="128" width="128"/>
            <h2>Marian Sawicki</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur.</h3>
            <a href="mailto:kontakt@iskierka.org.pl" className="gmail social"
              target="_blank" rel="noreferrer noopener">
              <FontAwesomeIcon icon={faEnvelope} size="2x"/>
            </a>
          </div>
        </div>
      </div>
      <video src={VideoBg} autoPlay loop muted/>
    </div>
  );
}
export default Management;