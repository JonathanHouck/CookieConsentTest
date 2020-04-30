import React from "react";
import CookieConsent from "react-cookie-consent";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  );
}
