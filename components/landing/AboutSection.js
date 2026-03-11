import React from "react";
import styles from "../../styles/landing.module.css";
import InView from "./InView";

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutSection() {
  return (
    <section id="about">
      <div className={styles.section}>
        <div className={styles.aboutGrid}>
          {/* Photo */}
          <InView variants={fadeLeft} threshold={0.3}>
            <div className={styles.aboutImageContainer}>
              <div className={styles.aboutImageOuter}>
                <div className={styles.aboutImageGradientBorder} />
                <img
                  className={styles.aboutImage}
                  src="/seacrop.jpeg"
                  alt="Ahmad Nuril Firdaus"
                />
                <div className={styles.aboutImageBadge}>
                  5+ Years<br />Experience
                </div>
              </div>
            </div>
          </InView>

          {/* Text */}
          <InView variants={fadeRight} threshold={0.3}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionLabel}>About Me</div>
              <h2 className={styles.sectionTitle}>
                Turning Ideas into<br />Digital Experiences
              </h2>
              <div className={styles.sectionDivider} />
            </div>
            <p className={styles.aboutTextPara}>
              I&apos;m <strong>Ahmad Nuril Firdaus</strong>, a{" "}
              <strong>Senior Frontend Developer</strong> with over{" "}
              <strong>5 years of experience</strong> crafting fast, scalable,
              and visually compelling web applications with{" "}
              <strong>React.js</strong> and <strong>Next.js</strong>.
            </p>
            <p className={styles.aboutTextPara}>
              From <strong>high-growth startups to enterprise-scale government
              projects</strong> — including PT Pertamina Training &amp; Consulting
              — I&apos;ve consistently delivered products that balance clean
              architecture, pixel-perfect UI, and real business impact.
            </p>
            <p className={styles.aboutTextPara}>
              With a degree in Physics Education from the{" "}
              <strong>University of Jember</strong>, I bring an analytical
              mindset to every problem I solve — breaking down complexity
              and engineering solutions that just <em>work</em>.
            </p>
            <div className={styles.aboutDetails}>
              <div className={styles.aboutDetailItem}>
                <span className={styles.aboutDetailLabel}>Location</span>
                <span className={styles.aboutDetailValue}>Jember, East Java</span>
              </div>
              <div className={styles.aboutDetailItem}>
                <span className={styles.aboutDetailLabel}>Current Role</span>
                <span className={styles.aboutDetailValue}>Senior Frontend Dev @ Pertamina</span>
              </div>
              <div className={styles.aboutDetailItem}>
                <span className={styles.aboutDetailLabel}>Experience</span>
                <span className={styles.aboutDetailValue}>5+ Years</span>
              </div>
              <div className={styles.aboutDetailItem}>
                <span className={styles.aboutDetailLabel}>Email</span>
                <span className={styles.aboutDetailValue}>firdausnurilahmad@gmail.com</span>
              </div>
            </div>
          </InView>
        </div>
      </div>
    </section>
  );
}
