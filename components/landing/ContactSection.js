import React from "react";
import styles from "../../styles/landing.module.css";
import InView from "./InView";

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ContactSection() {
  return (
    <section id="contact">
      <div className={styles.sectionSep} />
      <div className={styles.section}>
        <InView variants={headerVariants} threshold={0.3}>
          <div className={styles.sectionHeader} style={{ textAlign: "center" }}>
            <div className={styles.sectionLabel} style={{ textAlign: "center" }}>
              Get In Touch
            </div>
            <h2 className={styles.sectionTitle} style={{ textAlign: "center" }}>
              Let&apos;s Work Together
            </h2>
            <div className={styles.sectionDivider} style={{ margin: "14px auto" }} />
          </div>
        </InView>

        <InView variants={cardVariants} threshold={0.3}>
          <div className={styles.contactCard}>
            <div className={styles.contactCardGlow} />
            <p className={styles.contactSubtitle}>
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision. Drop me a message
              and let&apos;s build something great together.
            </p>
            <a
              className={styles.contactEmailLink}
              href="mailto:firdausnurilahmad@gmail.com"
            >
              firdausnurilahmad@gmail.com
            </a>
            <div className={styles.contactLinks}>
              <a
                className={styles.contactLinkItem}
                href="mailto:firdausnurilahmad@gmail.com"
              >
                ✉️ Email
              </a>
              <a
                className={styles.contactLinkItem}
                href="https://github.com/ahmadnurilfirdaus"
                target="_blank"
                rel="noreferrer"
              >
                🐙 GitHub
              </a>
              <a
                className={styles.contactLinkItem}
                href="/cv.pdf"
                download
                target="_blank"
                rel="noreferrer"
              >
                📄 Download CV
              </a>
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
}
