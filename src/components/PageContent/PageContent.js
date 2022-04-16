import React from "react";
import {AboutMe} from "../AboutMe/AboutMe";
import {Details} from "../Details/Details";
import {BlueHeader} from "../BlueHeader/BlueHeader";
import {Skills} from "../Skills/Skills";

export const PageContent = () => {
  return (
    <div className="page-content">
      <div className="container">
        <div className="cover shadow-lg bg-white">
          <div className="cover-bg p-3 p-lg-4 text-light">
            <BlueHeader/>
          </div>
          <div className="about-section pt-4 px-3 px-lg-4 mt-1">
            <div className="row">
              <AboutMe/>
              <Details/>
            </div>
          </div>
          {/*component Skills*/}
          <hr className="d-print-none"/>
            <Skills/>
          <hr className="d-print-none"/>
          {/*Component Eucation*/}
          <div className="page-break"></div>
          <div className="education-section px-3 px-lg-4 pb-4">
            <h2 className="h3 mb-4">Edukacja</h2>
            <div className="timeline">
              <div className="timeline-card timeline-card-success card shadow-sm">
                <div className="card-body">
                  <div className="h5 mb-1"> "MegaK.pl" <span className="text-muted h6"> - roczny kurs Full-Stack Developer</span>
                  </div>
                  <div className="text-muted text-small mb-2">06.2021 - 08.2022</div>
                  <div>
                   <p>Roczny intensywny kurs, w którym styczność z kodem ma miejsce prawie codziennie. Prowadzony jest pod kątem Full-Stack
                     Developera z naciskiem na back-end. Składa się z 8 etapów i 1 bonusowego etapu dla osób, którym uda się zakwalifikować.</p>
                    <ul>
                      <li>JavaScript od podstaw do profesjonalisty,</li>
                      <li>Node.js od podstaw do profesjonalisty,</li>
                      <li>Najbardziej znany framework dla Node.js - Express.js,</li>
                      <li>Bazy danych - MySQL & MongoDB,</li>
                      <li>TypeScript, czyli nadzbiór JavaScriptu,</li>
                      <li>Full-stack developer - React,</li>
                      <li>Node.js Advanced - praktyka i praca,</li>
                      <li>Praca zespołowa w oparciu o GIT i Scrum</li>
                    </ul>
                    <p>Dokładny program i opis kursu: <i><a href="https://www.megak.pl/">https://www.megak.pl/</a></i></p>
                  </div>
                </div>
              </div>
              <div className="timeline-card timeline-card-success card shadow-sm">
                <div className="card-body">
                  <div className="h5 mb-1">"Studiuje IT" <span className="text-muted h6"> - roczny kurs informatyki</span>
                  </div>
                  <div className="text-muted text-small mb-2">12.2020 - 12.2021</div>
                  <div>
                    <p>Roczny kurs będący esencją studiów informatycznych. Przedmioty realizowane w ramach kursu to: </p>
                    <ul>
                      <li>fundamenty programowania - (Python, C++, Java, JavaScript, PHP),</li>
                      <li>matematyka dla programistów, bazy danych i aplikacje bazodanowe (SQL, Cypher, Power Bi),</li>
                      <li>architektura komputerów,</li>
                      <li>algorytmy i struktury danych,</li>
                      <li>systemy operacyjne,</li>
                      <li>sieci komputerowe i bezpieczeństwo,</li>
                      <li>inżynieria oprogramowania,</li>
                      <li>prawo w projektach IT,</li>
                      <li>zarządzanie projektami IT.</li>
                    </ul>
                   <p>Dokładny program można obejrzeć tutaj: <i><a href="https://studiuje.it/" target="_blank">https://studiuje.it/</a></i></p>
                  </div>
                </div>
              </div>
              <div className="timeline-card timeline-card-success card shadow-sm">
                <div className="card-body">
                  <div className="h5 mb-1">Politechnika Rzeszowska im. Ignacego Łukasiewcza<span className="text-muted h6"> - Zarządzanie i inżynieria produkcji I Stopnia.</span>
                  </div>
                  <div className="text-muted text-small mb-2">2014 - 2017</div>
                  <div>
                    <strong>Opis Kierunku: </strong>
                    <p>Absolwent posiada wiedzę i umiejętności z zakresu inżynierii produkcji w przemyśle maszynowym oraz ekonomii i zarządzania. Jest przygotowany do projektowania i nadzorowania systemów produkcyjnych, opracowania technologii produkcji w przemyśle maszynowym, zarządzania procesami produkcyjnymi. Potrafi zarządzać transferem technologii i innowacjami. Posiada wiedzę i umiejętności menedżerskie z zakresu, zarządzania przedsiębiorstwem, inwestycjami, kosztami, finansami i kapitałem, zarządzania personelem. Absolwent jest przygotowany do podjęcia pracy w przedsiębiorstwach związanych z eksploatacją i produkcją maszyn bądź ich części, jednostkach doradczych i projektowych związanych z przemysłem maszynowym oraz innych, gdzie wymagana jest wiedza techniczna, ekonomiczna i informatyczna oraz umiejętności organizacyjne. Jest przygotowany do podjęcia studiów II stopnia. Wiedza i umiejętności absolwenta są poszerzone w zakresie wybranej specjalności.</p>
                  </div>
                </div>
              </div>
              <div className="timeline-card timeline-card-success card shadow-sm">
                <div className="card-body">
                  <div className="h5 mb-1">Zespół Szkół nr2 w Rzeszowie<span className="text-muted h6"> - Technik Ekonomista.</span>
                  </div>
                  <div className="text-muted text-small mb-2">2004 - 2008</div>
                </div>
              </div>
            </div>
          </div>
          <hr className="d-print-none"/>
          {/*Experience*/}
          <div className="work-experience-section px-3 px-lg-4">
            <h2 className="h3 mb-4">Doświadczenie</h2>
            <div className="timeline">
              <div className="timeline-card timeline-card-primary card shadow-sm">
                <div className="card-body">
                  <div className="h5 mb-1">WAREHOUSE TEAM MEMBER<span className="text-muted h6"> - Shefford w Bedfordshire UK</span>
                  </div>
                  <div className="text-muted text-small mb-2">2019 - 2021</div>
                  <div>
                    <p>Zakres obowiązków:</p>
                    <ul>
                      <li>Pakowanie zamówień</li>
                      <li>Organizacja magazynu</li>
                      <li>Poprawa przepływu zapasów ( FIFO )</li>
                      <li>Utrzymywanie aktualności dokumentów</li>
                      <li>Zgodność otrzymanych zapasów</li>
                      <li>Przestrzeganie zasad BHP</li>
                      <li>Raportowanie do dyrektora firmy</li>
                      <li>Kontrola jakości</li>
                      <li>Kompletacja zamówień</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="timeline-card timeline-card-primary card shadow-sm">
                <div className="card-body">
                  <div className="h5 mb-1">Ustawiacz form wtryskowych - technolog<span className="text-muted h6"> - ZMM Max-Pol Rzeszów</span>
                  </div>
                  <div className="text-muted text-small mb-2">2011 - 2013</div>
                  <div>
                    <p>Do moich obowiązków należało:</p>
                    <ul>
                      <li>Ustawienie parametrów wtrysku i uruchomienie procesu wtryskiwania</li>
                      <li>ocena wizualna jakości produkowanych detali,</li>
                      <li>ustawianie parametrów procesu na wtryskarkach,</li>
                      <li>Przygotowanie maszyn wtryskowych do przezbrojeń</li>
                      <li>Nadzór nad dokumentacją i procesami funkcjonującymi w obszarze wtrysku</li>
                      <li>Uczestnictwo w nowych projektach, wdrożeniach w zakresie uruchamiania nowej produkcji</li>
                      <li>Przygotowanie materiałów, maszyn i narzędzi zgodnie z zleceniem produkcyjnym</li>
                      <li>Optymalizacja, raportowanie i archiwizacja procesów wtrysków</li>
                      <li>Usuwanie prostych awarii maszyn</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="timeline-card timeline-card-primary card shadow-sm">
                <div className="card-body">
                  <div className="h5 mb-1">Operator Programista CNC - Frezer CNC<span
                    className="text-muted h6"> w PPHU Garda - Błędowa Zgłobieńska</span></div>
                  <div className="text-muted text-small mb-2">May, 2015 - Present</div>
                  <div>
                    <p>Do moich obowiązków należało:</p>
                    <ul>
                      <li>Obsługa i / lub programowanie frezarki cnc,</li>
                      <li>Znajomość sterowania numerycznego i ustawiania maszyn według oprogramowania HEIDENHAIN,</li>
                      <li>Prawidłowy wybór narzędzi i materiałów niezbędnych do wykonywanej pracy,</li>
                      <li>Praca przy innowacyjnych projektach wdrożeniowych,</li>
                      <li>Uzbrajanie, wymianę narzędzi i ustawianie maszyn CNC na podstawie opracowanych programów lub rysunków.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="timeline-card timeline-card-primary card shadow-sm">
                <div className="card-body">
                  <div className="h5 mb-1">Spawacz Tig <span className="text-muted h6"> - WSK-PZL Rzeszów</span>
                  </div>
                  <div className="text-muted text-small mb-2">2008 - 2013</div>
                  <div>
                    <p>Do moich obowiązków należało:</p>
                    <ul>
                      <li>Montaż i kontrola kompletności konstrukcji stalowych, przed rozpoczęciem spawania,</li>
                      <li>Przygotowywanie elementów do spawania przez ich ręczne czyszczenie, prostowanie, ukosowanie, sczepianie,</li>
                      <li>Wykonywanie połączeń spawanych metodami MIG, MAG, TIG, w zależności od posiadanych umiejętności,</li>
                      <li>Przestrzeganie technologii spawania oraz stosowanie technik spawania określonych w instrukcji technologicznej spawania,</li>
                      <li>Zachowywanie właściwej kolejności czynności przy montażu i spawaniu elementów konstrukcji,</li>
                      <li>Praca z oprzyrządowaniem spawalniczym i dokumentacją techniczną,</li>
                      <li>Obsługa i nastawy urządzenia spawalniczego.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="d-print-none"/>
          <div className="contant-section px-3 px-lg-4 pb-4" id="contact">
            <h2 className="h3 text mb-3">Contact</h2>
            <div className="row">
              {/*<div className="col-md-7 d-print-none">*/}
              {/*  <div className="my-2">*/}
              {/*    <form action="https://formspree.io/your@email.com"*/}
              {/*          method="POST">*/}
              {/*      <div className="row">*/}
              {/*        <div className="col-6">*/}
              {/*          <input className="form-control" type="text" id="name" name="name" placeholder="Your Name"*/}
              {/*                 required/>*/}
              {/*        </div>*/}
              {/*        <div className="col-6">*/}
              {/*          <input className="form-control" type="email" id="email" name="_replyto"*/}
              {/*                 placeholder="Your E-mail" required/>*/}
              {/*        </div>*/}
              {/*      </div>*/}
              {/*      <div className="form-group my-2">*/}
              {/*        <textarea className="form-control" style="resize: none;" id="message" name="message" rows="4"*/}
              {/*                  placeholder="Your Message" required></textarea>*/}
              {/*      </div>*/}
              {/*      <button className="btn btn-primary mt-2" type="submit">Send</button>*/}
              {/*    </form>*/}
              {/*  </div>*/}
              {/*</div>*/}
              <div className="col">
                <div className="mt-2">
                  <h3 className="h6">Adres</h3>
                  <div className="pb-2 text-secondary">Zabratówka 119c, 36-017, Błędowa Tyczyńska</div>
                  <h3 className="h6">Telefon</h3>
                  <div className="pb-2 text-secondary">+48 501 360 355</div>
                  <h3 className="h6">Email</h3>
                  <div className="pb-2 text-secondary">poczta@webmarcin.pl</div>
                </div>
              </div>
              <div className="col d-none d-print-block">
                <div className="mt-2">
                  <div>
                    <div className="mb-2">
                      <div className="text-dark"><i
                        className="fab fa-twitter mr-1"></i><span>https://twitter.com/templateflip</span>
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="text-dark"><i
                        className="fab fa-facebook mr-1"></i><span>https://www.facebook.com/templateflip</span>
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="text-dark"><i
                        className="fab fa-instagram mr-1"></i><span>https://www.instagram.com/templateflip</span>
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="text-dark"><i
                        className="fab fa-github mr-1"></i><span>https://github.com/templateflip</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}