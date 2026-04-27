import React, { useState, useEffect } from "react";
import "./style.css";
import { VscClose, VscGrabber } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Work" },
  { to: "/contact", label: "Contact" },
];

const Headermain = () => {
  const [isActive, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActive(false);
    document.body.classList.remove("ovhidden");
  }, [location]);

  const handleToggle = () => {
    const next = !isActive;
    setActive(next);
    document.body.classList.toggle("ovhidden", next);
  };

  return (
    <>
      <header className={`site__header ${scrolled ? "scrolled" : ""}`}>
        <div className="header__inner">
          <Link className="header__logo" to="/">
            {logotext}<span className="logo-dot">.</span>
          </Link>

          <nav className="header__nav" aria-label="Main navigation">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`nav__link ${location.pathname === to ? "active" : ""}`}
              >
                {label}
              </Link>
            ))}
            <Themetoggle />
            <Link to="/contact" className="nav__cta">
              Hire Me
            </Link>
          </nav>

          <div className="header__mobile-controls">
            <Themetoggle />
            <button
              className="menu__button"
              onClick={handleToggle}
              aria-label={isActive ? "Close menu" : "Open menu"}
            >
              {isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile__menu ${isActive ? "open" : ""}`}>
        <nav className="mobile__nav" aria-label="Mobile navigation">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`mobile__link ${location.pathname === to ? "active" : ""}`}
              onClick={handleToggle}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="mobile__footer">
          <a href={socialprofils.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
};

export default Headermain;
