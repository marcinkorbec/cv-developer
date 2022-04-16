import React from "react";
import {SocialMedia} from "../SocialMedia/SocialMedia";

export const Footer = () => {
  return (
    <footer className="pt-4 pb-4 text-muted text-center d-print-none">
      <div className="container">
        <div className="my-3">
          <div className="h4">Marcin Korbecki</div>
          <div className="footer-nav">
            <nav role="navigation">
              <SocialMedia/>
            </nav>
          </div>
        </div>
        <div className="text-small">
          <div className="mb-1">&copy; Webmarcin.pl</div>
          <div>Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).</div>
        </div>
      </div>
    </footer>
  )
}