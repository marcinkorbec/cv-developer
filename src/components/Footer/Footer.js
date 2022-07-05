import React from "react";
import {SocialMedia} from "../SocialMedia/SocialMedia";

export const Footer = (props) => {
  return (
    <footer className="pt-4 pb-4 text-muted text-center d-print-none">
      <div className="container">
        <div className="my-3">
          <div className="h4">{props[1].name}</div>
          <div className="footer-nav">
            <nav role="navigation">
              <SocialMedia {...props}/>
            </nav>
          </div>
        </div>
        <div className="text-small">
          <div className="mb-1">&copy; Webmarcin.pl</div>
          <div>{props[9].footer_disclaimer}</div>
        </div>
      </div>
    </footer>
  )
}