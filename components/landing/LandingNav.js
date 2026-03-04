import React, { useState, useEffect } from "react";
import styles from "../../styles/landing.module.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function LandingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
      <div className={styles.navInner}>
        <a
          className={styles.navLogo}
          href="#"
          onClick={(e) => scrollTo(e, "#hero")}
        >
          ANF.
        </a>
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                className={styles.navLink}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          className={styles.navCta}
          href="/cv.pdf"
          download
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
}
