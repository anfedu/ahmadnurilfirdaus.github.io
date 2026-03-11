import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiApollographql,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiChakraui,
  SiMui,
  SiGit,
  SiGithub,
  SiReactquery,
  SiStrapi,
  SiPostgresql,
  SiDocker,
  SiAntdesign,
  SiMysql,
  SiRedux,
  SiClickup,
  SiTrello,
  SiJira,
  SiOpenai,
} from "react-icons/si";


import styles from "../../styles/landing.module.css";
import InView from "./InView";

const skills = [
  // Language
  { Icon: SiJavascript,    name: "JavaScript",   category: "Language",        color: "#F7DF1E" },
  { Icon: SiTypescript,    name: "TypeScript",   category: "Language",        color: "#3178C6" },
  // Frontend
  { Icon: SiReact,         name: "React.js",     category: "Frontend",        color: "#61DAFB" },
  { Icon: SiNextdotjs,     name: "Next.js",      category: "Frontend",        color: "#FFFFFF" },
  { Icon: SiReact,         name: "React Native", category: "Mobile",          color: "#61DAFB" },
  // Backend
  { Icon: SiNodedotjs,     name: "Node.js",      category: "Backend",         color: "#339933" },
  { Icon: SiExpress,       name: "Express.js",   category: "Backend",         color: "#FFFFFF" },
  // API
  { Icon: SiGraphql,       name: "GraphQL",      category: "API",             color: "#E10098" },
  { Icon: SiApollographql, name: "Apollo",       category: "API",             color: "#7B69EE" },
  // Database
  { Icon: SiMongodb,       name: "MongoDB",      category: "Database",        color: "#47A248" },
  { Icon: SiPostgresql,    name: "PostgreSQL",   category: "Database",        color: "#336791" },
  { Icon: SiMysql,         name: "MySQL",        category: "Database",        color: "#4479A1" },
  // Styling
  { Icon: SiTailwindcss,   name: "Tailwind CSS", category: "Styling",         color: "#06B6D4" },
  // UI Library
  { Icon: SiChakraui,      name: "Chakra UI",    category: "UI Library",      color: "#319795" },
  { Icon: SiMui,           name: "Material UI",  category: "UI Library",      color: "#007FFF" },
  { Icon: SiAntdesign,     name: "Ant Design",   category: "UI Library",      color: "#0170FE" },
  // State Management
  { Icon: SiRedux,         name: "Redux",        category: "State Management",color: "#764ABC" },
{ Icon: SiReactquery,    name: "React Query",  category: "State Management",color: "#FF4154" },
  // CMS
  { Icon: SiStrapi,        name: "Strapi",       category: "CMS",             color: "#4945FF" },
  // Tools
  { Icon: SiGit,           name: "Git",          category: "Tools",           color: "#F05032" },
  { Icon: SiGithub,        name: "GitHub",       category: "Tools",           color: "#FFFFFF" },
  { Icon: SiDocker,        name: "Docker",       category: "Tools",           color: "#2496ED" },
  // Project Management
  { Icon: SiClickup,       name: "ClickUp",      category: "Project Mgmt",    color: "#7B68EE" },
  { Icon: SiTrello,        name: "Trello",       category: "Project Mgmt",    color: "#0052CC" },
  { Icon: SiJira,          name: "Jira",         category: "Project Mgmt",    color: "#0052CC" },
  // AI Tools
  { Icon: SiOpenai,        name: "ChatGPT",      category: "AI Tools",        color: "#10A37F" },
];

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
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

        <div className={styles.skillsGrid}>
          {skills.map((skill, i) => (
            <InView
              key={skill.name + i}
              variants={{
                hidden: { opacity: 0, y: 24, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.45,
                    delay: i * 0.055,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              threshold={0.05}
            >
              <div
                className={styles.skillCard}
                style={{ "--skill-color": skill.color }}
              >
                <span className={styles.skillIcon} style={{ color: skill.color }}>
                  <skill.Icon size={34} />
                </span>
                <div className={styles.skillName}>{skill.name}</div>
                <div className={styles.skillCategory}>{skill.category}</div>
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
