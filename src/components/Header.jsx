import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import SocialMedia from "./SocialMedialIcons.jsx";
import HPLogo from "./HarryPotterLogo.jsx";
import "../styles/main.scss";

const Header = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="header">
      <SocialMedia className="socialMedia-icons" />
      <NavLink to="/">
        <HPLogo />
      </NavLink>
      <div className="headerNavbar">
        <nav ref={navRef} className="navbar">
          <ul>
            <li>
              <NavLink to="/characters" onClick={showNavbar}>Characters</NavLink>
            </li>
            <li>
              <NavLink to="/books" onClick={showNavbar}>Books</NavLink>
            </li>
            <li>
              <NavLink to="/movies" onClick={showNavbar}>Films</NavLink>
            </li>
            <li>
              <NavLink to="/spells" onClick={showNavbar}>Spells</NavLink>
            </li>
            <li>
              <NavLink to="/games" onClick={showNavbar}>Games</NavLink>
            </li>
          </ul>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Header;
