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
                  src="/image/profile.jpg"
                  alt="Ahmad Nuril Firdaus"
                />
                <div className={styles.aboutImageBadge}>
                  4+ Years<br />Experience
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
              <strong>Senior Frontend Developer</strong> with 4+ years of
              experience specializing in building dynamic, high-performance
              web applications using <strong>React.js</strong> and{" "}
              <strong>Next.js</strong>.
            </p>
            <p className={styles.aboutTextPara}>
              I have successfully delivered projects for{" "}
              <strong>startups and government agencies</strong> — including
              PT Pertamina Training &amp; Consulting — ensuring scalable,
              user-friendly, and visually appealing interfaces.
            </p>
            <p className={styles.aboutTextPara}>
              Born in <strong>Jember, East Java</strong>, I hold a
              bachelor&apos;s degree in Physics Education from the{" "}
              <strong>University of Jember</strong>. My analytical background
              as a physics teacher shaped the way I approach complex
              engineering problems.
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
                <span className={styles.aboutDetailValue}>4+ Years</span>
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
