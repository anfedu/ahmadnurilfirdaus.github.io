import React from "react";
import Head from "next/head";
import styles from "../../styles/landing.module.css";
import LandingNav from "./LandingNav";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ExpSection from "./ExpSection";
import ContactSection from "./ContactSection";

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Ahmad Nuril Firdaus — Full Stack Developer</title>
        <meta
          name="description"
          content="Ahmad Nuril Firdaus — Full Stack JavaScript Developer. React, Next.js, Node.js, GraphQL, MongoDB."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <style>{`
          html, body {
            background: #0d1117 !important;
            margin: 0;
            padding: 0;
          }
          * { box-sizing: border-box; }
        `}</style>
      </Head>
      <div className={styles.page}>
        <LandingNav />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExpSection />
        <ContactSection />
        <footer className={styles.footer}>
          <p className={styles.footerText}>
            Designed & Built by{" "}
            <span className={styles.footerAccent}>Ahmad Nuril Firdaus</span>
            {" "}— {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </>
  );
}
