import React from "react";
import styles from "../../styles/landing.module.css";
import InView from "./InView";

const experiences = [
  {
    year: "2020 – Present",
    title: "Full Stack Developer",
    company: "Mejik — Software House, South Jakarta",
    description:
      "Worked as a front-end developer at Mejik Utama Sugiharta, a software house based in South Jakarta. Built and maintained web applications using React.js and modern JavaScript tooling. Collaborated closely with designers and back-end engineers to deliver responsive, high-quality products.",
  },
  {
    year: "2018 – 2020",
    title: "Physics Teacher",
    company: "Unacademy — Online Education Platform",
    description:
      "Taught Physics to students through Unacademy, an Indian online education technology platform. Created engaging video lessons and practice materials, helping students build strong conceptual foundations in Physics.",
  },
  {
    year: "2014 – 2018",
    title: "Bachelor of Physics Education",
    company: "University of Jember (UNEJ), East Java",
    description:
      "Studied Physics Education and graduated with a bachelor's degree. Developed strong analytical, problem-solving, and communication skills that later translated seamlessly into software engineering.",
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const itemVariants = (i) => ({
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  },
});

export default function ExpSection() {
  return (
    <section id="experience">
      <div className={styles.sectionSep} />
      <div className={styles.section}>
        <InView variants={headerVariants} threshold={0.3}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>Background</div>
            <h2 className={styles.sectionTitle}>Experience & Education</h2>
            <div className={styles.sectionDivider} />
            <p className={styles.sectionDesc}>
              My journey from physics classroom to production code — a path
              shaped by curiosity and a love for building things.
            </p>
          </div>
        </InView>

        <div className={styles.timeline}>
          <div className={styles.timelineLine} />
          {experiences.map((exp, i) => (
            <InView key={exp.title} variants={itemVariants(i)} threshold={0.2}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineYear}>{exp.year}</div>
                <div className={styles.timelineTitle}>{exp.title}</div>
                <div className={styles.timelineCompany}>{exp.company}</div>
                <p className={styles.timelineDesc}>{exp.description}</p>
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
