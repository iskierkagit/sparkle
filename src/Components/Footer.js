import React from "react";
import { useLocation } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "./Styles/Footer.css";

const Footer = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const breakpointWidth = 960;
  const breakpointHeight = 770;

  React.useEffect(() => {
    const handleResizeWindow = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    };
     window.addEventListener("resize", handleResizeWindow);
     return () => {
       window.removeEventListener("resize", handleResizeWindow);
     };
   }, []);


  const { pathname } = useLocation();
  if (pathname === "/") return null;
  if (pathname === "/sparkle") return null;
  if (pathname === "/sparkle/") return null;
  
  return (
    <div className={pathname === "/history" || pathname === "/parents" || pathname === "/finances" ||
          (pathname === "/management" && height < breakpointHeight) ? "footerStatic" : "footer" }>
      <div className="f-content">
      <div className="f-icons">
          <a href="https://youtube.pl/IskierkaSzczecin" target="_blank" 
             onclick="window.open(this.href, 'new', 'popup'); return false;">
            <BsYoutube color="white" size={"1.5rem"} />
          </a>
          <a href="https://pl-pl.facebook.com/iskierkaZD" target="_blank" 
             onclick="window.open(this.href, 'new', 'popup'); return false;">
            <FaFacebookF color="white" size={"1.5rem"} />
          </a>
          <a href="mailto:kontakt@iskierka.org.pl" target="_blank" rel="noreferrer noopener">
            <FiMail color="white" size={"1.5rem"} />
          </a>
          <a href='https://maps.app.goo.gl/okmaYWXnW6atZHCV6' target="_blank" 
             onclick="window.open(this.href, 'new', 'popup'); return false;">
            <FaMapMarkerAlt color="white" size={"1.5rem"} />
          </a>
          <a href='https://www.instagram.com/iskierka_szczecin/' target="_blank" 
             onclick="window.open(this.href, 'new', 'popup'); return false;">
            <FaInstagram color="white" size={"1.5rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;