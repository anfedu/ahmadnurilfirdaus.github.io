import React from "react";
import styles from "../../styles/landing.module.css";
import InView from "./InView";

const skills = [
  { icon: "⚛️", name: "React.js", category: "Frontend" },
  { icon: "▲", name: "Next.js", category: "Frontend" },
  { icon: "📱", name: "React Native", category: "Mobile" },
  { icon: "🟩", name: "Node.js", category: "Backend" },
  { icon: "🚂", name: "Express.js", category: "Backend" },
  { icon: "🔷", name: "GraphQL", category: "API" },
  { icon: "🍃", name: "MongoDB", category: "Database" },
  { icon: "🚀", name: "Apollo", category: "API" },
  { icon: "💛", name: "JavaScript", category: "Language" },
  { icon: "🎨", name: "CSS / LESS", category: "Styling" },
  { icon: "🖼️", name: "Material UI", category: "UI Library" },
  { icon: "🐙", name: "Git & GitHub", category: "Tools" },
];

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className={styles.sectionSep} />
      <div className={styles.section}>
        <InView variants={headerVariants} threshold={0.3}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>Tech Stack</div>
            <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
            <div className={styles.sectionDivider} />
            <p className={styles.sectionDesc}>
              Tools and technologies I work with to build modern web and
              mobile applications from front to back.
            </p>
          </div>
        </InView>

        <InView variants={containerVariants} threshold={0.1}>
          <div className={styles.skillsGrid}>
            {skills.map((skill) => (
              <InView key={skill.name} variants={cardVariants} threshold={0.1}>
                <div className={styles.skillCard}>
                  <span className={styles.skillIcon}>{skill.icon}</span>
                  <div className={styles.skillName}>{skill.name}</div>
                  <div className={styles.skillCategory}>{skill.category}</div>
                </div>
              </InView>
            ))}
          </div>
        </InView>
      </div>
    </section>
  );
}
