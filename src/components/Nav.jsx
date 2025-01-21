import logo from "../assets/must-logo.png";
import logoalt from "../assets/must-logo-alt.png"
import menu from "../assets/menu.svg";
import menualt from "../assets/menu-alt.svg"
import { useState, useEffect } from "react";


export default function Nav() {
  
  const [showNav, setShowNav] = useState(false);
 
  const toggleNavItems = () => {
    setShowNav((prevShowNav) => !prevShowNav);   

};

  const closeNav = () => {
    setShowNav(false);
  };

const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo">
         <a href="hero"><img className="logo-img" src={isScrolled ? logoalt : logo} alt="logo" /> </a>
      </div>

      <div className={"menu-icon"} onClick={toggleNavItems}>
        <img src={isScrolled ? menualt : menu} alt="menu" />
      </div>
      {/* Classes dinâmicas baseadas no estado */}
      <div className={`nav-elements ${showNav ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#hero" onClick={closeNav}>Início</a>
          </li>
          <li>
            <a href="#aboutus" onClick={closeNav}>Sobre nós</a>
          </li>
          <li>
            <a href="#benefits" onClick={closeNav}>Benefícios</a>
          </li>
          <li>
            <a href="#testimonials" onClick={closeNav}>Depoimentos</a>
          </li>
          <li>
            <a href="#contact" onClick={closeNav}>Contato</a>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
}
