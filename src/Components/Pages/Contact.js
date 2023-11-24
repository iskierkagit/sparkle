import React from 'react';
import '../../App.css';
import '../Styles/Contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import{
  faEnvelope,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import VideoBg from '../../Assets/video/sand_2.mp4'

const Contact = () => {
  return (
    <div class="flex-container">
      <div class="flex-child">
        <span className='header'>
          <h3>Stowarzyszenie Rodzin i Przyjaciół</h3>
          <h3>Dzieci z Zespołem Downa</h3>
          <h1>„Iskierka”</h1>
        </span>

        <div className='body'>
          <h3>ul. Felczaka 17/U5, 71-417 Szczecin</h3>
          <h3>NIP 851 311 63 96</h3>
          <h3>KRS 0000353582</h3>
          <h3>PKO BP 62 1440 1143 0000 0000 1161 9916</h3>
        </div>

        <div class="social-container">
          <h3>Znajdziesz nas tutaj:</h3>
          <a href="https://youtube.pl/IskierkaSzczecin" className="youtube social"
            target="_blank" onclick="window.open(this.href, 'new', 'popup'); return false;">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a href="https://pl-pl.facebook.com/iskierkaZD" className="facebook social"
            target="_blank" onclick="window.open(this.href, 'new', 'popup'); return false;">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="mailto:kontakt@iskierka.org.pl" className="gmail social"
            target="_blank" rel="noreferrer noopener">
            <FontAwesomeIcon icon={faEnvelope} size="2x"/>
          </a>
          <a href='https://maps.app.goo.gl/okmaYWXnW6atZHCV6' className="location social"
            target="_blank" onclick="window.open(this.href, 'new', 'popup'); return false;">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
          </a>
          <a href="https://www.instagram.com/iskierka_szczecin/" className="instagram social"
            target="_blank" onclick="window.open(this.href, 'new', 'popup'); return false;">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
      <div class="flex-child" >
        <iframe
          className='map-frame'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d594.1867079268642!2d14.541576269648454!3d53.43723479716999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa09408882a34b%3A0x3f0879082ea286bc!2sWac%C5%82awa%20Felczaka%2017%2C%2071-417%20Szczecin!5e0!3m2!1spl!2spl!4v1697304262765!5m2!1spl!2spl"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="Humanity First Indonesia"
        />
      </div>
      <video src={VideoBg} autoPlay loop muted playsInline/>
    </div>
  )
}
export default Contact;