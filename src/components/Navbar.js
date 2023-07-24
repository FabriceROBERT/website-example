import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/">
            1804
            <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/accueil"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/produits"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Produits
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/connecter"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Se connecter
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outlne">Inscription</Button>}
        </div>
      </nav>
    </>
  );
}
