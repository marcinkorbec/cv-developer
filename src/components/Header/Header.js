import React from "react";
import {SocialMedia} from "../SocialMedia/SocialMedia";

export const Header = () => (
    <header className="d-print-none">
      <div className="container text-center text-lg-left">
        <div className="py-3 clearfix">
          <h1 className="site-title mb-0">Marcin Korbecki</h1>
          <div className="site-nav">
            <nav role="navigation">
              <SocialMedia/>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
