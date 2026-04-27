import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import { dataabout, meta, worktimeline, services } from "../../content_option";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const stats = [
  { value: "2+",   label: "Years Exp." },
  { value: "10M+", label: "Users Reached" },
  { value: "4",    label: "Key Projects" },
  { value: "Open", label: "To Work" },
];

const skillCategories = [
  {
    label: "Frontend",
    items: ["React.js", "Next.js 13", "Angular 14+", "TypeScript", "JavaScript ES6+"],
  },
  {
    label: "Styling",
    items: ["Tailwind CSS", "Material-UI", "Styled Components", "SASS/SCSS", "Responsive Design"],
  },
  {
    label: "State & Data",
    items: ["Redux Toolkit", "Context API", "React Hook Form", "Recharts", "Chart.js", "ApexCharts"],
  },
  {
    label: "Tools & Backend",
    items: ["Node.js", "Express.js", "Git", "Docker", "AWS", "MySQL", "Firebase", "CI/CD"],
  },
  {
    label: "Currently Learning",
    items: ["GraphQL", "Three.js", "Micro-frontends"],
    highlight: true,
  },
];

export const About = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <div className="about-page">
        {/* ── Page hero ── */}
        <motion.div
          className="page-hero"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          <motion.span className="section-label" variants={fadeUp}>
            — About Me
          </motion.span>
          <motion.h1 className="page-hero__title" variants={fadeUp}>
            The person<br />behind the code.
          </motion.h1>
        </motion.div>

        {/* ── Bio + Stats ── */}
        <section className="about-bio">
          <motion.p
            className="about-bio__text"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            {dataabout.aboutme}
          </motion.p>

          <motion.div
            className="about-stats"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            {stats.map(({ value, label }) => (
              <motion.div key={label} className="stat-card glass-card" variants={fadeUp}>
                <span className="stat-value gradient-text">{value}</span>
                <span className="stat-label mono">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Experience ── */}
        <section className="about-section">
          <motion.h2
            className="section-heading"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            Experience
          </motion.h2>

          <motion.div
            className="timeline"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            {worktimeline.map((item, i) => (
              <motion.div key={i} className="timeline-item glass-card" variants={fadeUp}>
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-body">
                  <div className="timeline-header">
                    <h3>{item.jobtitle}</h3>
                    <span className="timeline-date mono">{item.date}</span>
                  </div>
                  <p className="timeline-where">{item.where}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Tech Stack ── */}
        <section className="about-section">
          <motion.h2
            className="section-heading"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            Tech Stack
          </motion.h2>

          <motion.div
            className="skill-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            {skillCategories.map(({ label, items, highlight }) => (
              <motion.div
                key={label}
                className={`skill-card glass-card ${highlight ? "skill-card--learning" : ""}`}
                variants={fadeUp}
              >
                <span className="skill-card__label mono">{label}</span>
                <div className="skill-pills">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className={`skill-pill ${highlight ? "skill-pill--learning" : ""}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Services ── */}
        <section className="about-section">
          <motion.h2
            className="section-heading"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            What I Do
          </motion.h2>

          <motion.div
            className="services-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            {services.map((svc, i) => (
              <motion.div key={i} className="service-card glass-card" variants={fadeUp}>
                <span className="service-num mono">0{i + 1}</span>
                <h3 className="service-title">{svc.title}</h3>
                <p className="service-desc">{svc.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </HelmetProvider>
  );
};
