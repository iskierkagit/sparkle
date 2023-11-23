import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useLocation } from "react-router-dom";
import "./Styles/CookieConsent.css";

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const giveCookieConsent = () => {
    setCookie("cookieConsent", true, { path: "/" });
  
  };

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 960;
  const { pathname } = useLocation();

  return (
    <div className={(width > breakpoint) ? "cookieConsent" : "cookieConsentMobile" }>
      <p>
        Używamy plików cookie, aby poprawić komfort użytkowania. Korzystając z naszej strony internetowej,
         wyrażasz zgodę na używanie przez nas plików cookie.{" "}
        {/*<a href={"/privacy-policy"}>Przeczytaj więcej.</a>*/}
      </p>
      <button onClick={giveCookieConsent}>
        Akceptuję
      </button>
    </div>
  );
};

export default CookieConsent;