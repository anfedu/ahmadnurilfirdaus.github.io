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
              My name is <strong>Ahmad Nuril Firdaus</strong>, a passionate
              web developer since 2020. I was born in{" "}
              <strong>Jember, East Java</strong> and earned my bachelor&apos;s
              degree in Physics Education at the{" "}
              <strong>University of Jember</strong>.
            </p>
            <p className={styles.aboutTextPara}>
              In 2020, I took intensive coding training in{" "}
              <strong>Full Stack JavaScript</strong> and fell completely in
              love with the ecosystem. Ever since, building modern web and
              mobile apps has been both my passion and my profession.
            </p>
            <p className={styles.aboutTextPara}>
              I enjoy working with <strong>React.js</strong>,{" "}
              <strong>Next.js</strong>, <strong>React Native</strong>,{" "}
              <strong>Node.js</strong>, and modern back-end tools like GraphQL
              and MongoDB to craft seamless, performant applications.
            </p>
            <div className={styles.aboutDetails}>
              <div className={styles.aboutDetailItem}>
                <span className={styles.aboutDetailLabel}>Location</span>
                <span className={styles.aboutDetailValue}>Indonesia</span>
              </div>
              <div className={styles.aboutDetailItem}>
                <span className={styles.aboutDetailLabel}>Education</span>
                <span className={styles.aboutDetailValue}>Physics Education — UNEJ</span>
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
