import React from 'react';
import '../../Styles/BaseBackground.css'
import '../../Styles/Management.css'
import{
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Management = () => {
  return (
    <div className='base'>
      <div className='management-flex-container'>
        <div className='management-flex-child'>
          <div className='management-content'>
            <img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/8021/girl-png.png" 
            height="92" width="92"/>
            <h2>Magdalena Seidler-Kumor</h2>
            <div className='management-signature-message'>
              <h3>Prezes</h3>
              <a href="mailto:kontakt@iskierka.org.pl" className="gmail social"
                target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon={faEnvelope} size="2x"/>
              </a>
            </div>
          </div>
        </div>

        <div className='management-flex-child'>
          <div className='management-content'>
            <img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/8021/girl-png.png" 
            height="92" width="92"/>
            <h2>Małgorzata Świerzko</h2>
            <div className='management-signature-message'>
              <h3>Wiceprezes</h3>
              <a href="mailto:kontakt@iskierka.org.pl" className="gmail social"
                target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon={faEnvelope} size="2x"/>
              </a>
            </div>
          </div>
        </div>

        <div className='management-flex-child'>
          <div className='management-content'>
            <img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/8021/girl-png.png" 
            height="92" width="92"/>
            <h2>Jolanta Ćwirko</h2>
            <h3>Członek zarządu</h3>
            <a href="mailto:kontakt@iskierka.org.pl" className="gmail social"
              target="_blank" rel="noreferrer noopener">
              <FontAwesomeIcon icon={faEnvelope} size="2x"/>
            </a>
          </div>
        </div>

        <div className='management-flex-child'>
          <div className='management-content'>
            <img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/8021/girl-png.png" 
            height="92" width="92"/>
            <h2>Marta Frydecka</h2>
            <h3>Członek zarządu</h3>
            <a href="mailto:kontakt@iskierka.org.pl" className="gmail social"
              target="_blank" rel="noreferrer noopener">
              <FontAwesomeIcon icon={faEnvelope} size="2x"/>
            </a>
          </div>
        </div>

        <div className='management-flex-child'>
          <div className='management-content'>
            <img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/8021/girl-png.png" 
            height="92" width="92"/>
            <h2>Katarzyna Sejdak</h2>
            <h3>Skarbnik</h3>
            <a href="mailto:kontakt@iskierka.org.pl" className="gmail social"
              target="_blank" rel="noreferrer noopener">
              <FontAwesomeIcon icon={faEnvelope} size="2x"/>
            </a>
          </div>
        </div>
      </div>

      <div className='management-flex-container'>
        <div className='management-flex-child'>
          <div className='management-content'>
            <img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/8021/avatar1.png" 
            height="92" width="92"/>
            <h2>Łukasz Jurga</h2>
            <h3>Przewodniczący komisji rewizyjnej</h3>
            <a href="mailto:kontakt@iskierka.org.pl" className="gmail social"
              target="_blank" rel="noreferrer noopener">
              <FontAwesomeIcon icon={faEnvelope} size="2x"/>
            </a>
          </div>
        </div>

        <div className='management-flex-child'>
          <div className='management-content'>
            <img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/8021/girl-png.png" 
            height="92" width="92"/>
            <h2>Ewa Kazidróg</h2>
            <h3>Członek komisji rewizyjnej</h3>
            <a href="mailto:kontakt@iskierka.org.pl" className="gmail social"
              target="_blank" rel="noreferrer noopener">
              <FontAwesomeIcon icon={faEnvelope} size="2x"/>
            </a>
          </div>
        </div>

        <div className='management-flex-child'>
          <div className='management-content'>
            <img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/8021/avatar2.png" 
            height="92" width="92"/>
            <h2>Hubert Kaczmarek</h2>
            <h3>Członek komisji rewizyjnej</h3>
            <a href="mailto:kontakt@iskierka.org.pl" className="gmail social"
              target="_blank" rel="noreferrer noopener">
              <FontAwesomeIcon icon={faEnvelope} size="2x"/>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
export default Management;