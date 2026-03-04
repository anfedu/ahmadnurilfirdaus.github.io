import React from "react";
import styles from "../../styles/landing.module.css";
import InView from "./InView";

const projects = [
  {
    title: "Social App",
    image: "/image/socialappweb.png",
    description:
      "A full-featured social media application with real-time feed, user profiles, and interactive posts. Built with a modern React front-end and Node.js back-end.",
    tags: ["React.js", "Node.js", "MongoDB", "GraphQL"],
  },
  {
    title: "DeweTour",
    image: "/image/dewetourweb.png",
    description:
      "A travel booking platform that lets users explore and book tour packages. Features intuitive browsing, booking flow, and a responsive mobile experience.",
    tags: ["React Native", "Next.js", "Express", "REST API"],
  },
  {
    title: "The Journey",
    image: "/image/thejourneyweb.png",
    description:
      "A travel blog and journal web application where users can document their adventures with rich content, photos, and stories from around the world.",
    tags: ["Next.js", "Apollo", "GraphQL", "MongoDB"],
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const cardVariants = (i) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  },
});

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className={styles.sectionSep} />
      <div className={styles.section}>
        <InView variants={headerVariants} threshold={0.3}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>Work</div>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <div className={styles.sectionDivider} />
            <p className={styles.sectionDesc}>
              A selection of projects I&apos;ve built — from social platforms
              to travel apps. Each project reflects my passion for great UX
              and clean code.
            </p>
          </div>
        </InView>

        <div className={styles.projectsGrid}>
          {projects.map((project, i) => (
            <InView key={project.title} variants={cardVariants(i)} threshold={0.1}>
              <div className={styles.projectCard}>
                <div className={styles.projectImageWrap}>
                  <img
                    className={styles.projectImage}
                    src={project.image}
                    alt={project.title}
                  />
                </div>
                <div className={styles.projectBody}>
                  <div className={styles.projectTitle}>{project.title}</div>
                  <p className={styles.projectDesc}>{project.description}</p>
                  <div className={styles.projectTags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.projectTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
