import React from "react";

export const SocialMedia = () => {
	 const socialMediaData = [
		 {

		 }
	 ]

	return (
  <ul className="nav justify-content-center">
    <li className="nav-item"><a className="nav-link" href="https://www.linkedin.com/in/marcin-korbecki-9021661a5/"
                                title="LinkedIn" target="_blank"><i className="fab fa-linkedin"/><span
      className="menu-title sr-only">Linked In</span></a>
    </li>

    <li className="nav-item"><a className="nav-link" href="https://webmarcin.pl"
                                title="Mój Blog" target="_blank"><i className="fab fa-blogger"/><span
      className="menu-title sr-only">Mój Blog</span></a>
    </li>
    <li className="nav-item"><a className="nav-link" href="https://www.facebook.com/uczszsiewkoncu"
                                title="Facebook" target="_blank"><i className="fab fa-facebook"/><span
      className="menu-title sr-only">Facebook</span></a>
    </li>
    <li className="nav-item"><a className="nav-link" href="https://www.instagram.com/m.j.korbecki/"
                                title="Instagram" target="_blank"><i className="fab fa-instagram"/><span
      className="menu-title sr-only">Instagram</span></a>
    </li>
    <li className="nav-item"><a className="nav-link" href="https://github.com/marcinkorbec"
                                title="Github" target="_blank"><i className="fab fa-github"/><span
      className="menu-title sr-only">Github</span></a>
    </li>
  </ul>
)}