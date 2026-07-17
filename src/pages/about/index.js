import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import {
  dataabout,
  meta,
  worktimeline,
  services,
  techstack,
} from "../../content_option";
import {
  FiCode,
  FiLayout,
  FiDatabase,
  FiCpu,
  FiServer,
  FiZap,
  FiDownload,
  FiEye,
  FiAward,
  FiCheck,
  FiTool,
  FiGlobe,
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const categoryIconMap = {
  "Frontend":           FiCode,
  "Styling":            FiLayout,
  "Backend":            FiCpu,
  "AI & LLM":           FiGlobe,
  "Databases":          FiDatabase,
  "Cloud & DevOps":     FiServer,
  "Tools & Practices":  FiTool,
  "Currently Learning": FiZap,
};

const statsData = [
  { end: 3,    suffix: "",    label: "Years Experience" },
  { end: 10,   suffix: "M+",  label: "Users Reached" },
  { end: 4,    suffix: "",    label: "Enterprise Projects" },
  { end: 90,   suffix: "+",   label: "Lighthouse Score" },
  { end: 25,   suffix: "+",   label: "Technologies" },
];

function AnimatedCounter({ end, suffix, trigger }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    const duration = 1600;
    const start = performance.now();
    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [trigger, end]);

  return (
    <span className="stat-value gradient-text">
      {count}{suffix}
    </span>
  );
}

export const About = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });

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
            ref={statsRef}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            {statsData.map(({ end, suffix, label }) => (
              <motion.div key={label} className="stat-card glass-card" variants={fadeUp}>
                <AnimatedCounter end={end} suffix={suffix} trigger={statsInView} />
                <span className="stat-label mono">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Experience Timeline ── */}
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
                    <div>
                      <h3>{item.jobtitle}</h3>
                      <p className="timeline-where">
                        {item.where} · {item.location}
                      </p>
                    </div>
                    <div className="timeline-meta">
                      <span className="timeline-date mono">{item.date}</span>
                      <span className="timeline-type mono">{item.type}</span>
                    </div>
                  </div>

                  {item.achievements && (
                    <ul className="timeline-achievements">
                      {item.achievements.map((ach, j) => (
                        <li key={j} className="timeline-achievement">
                          <FiCheck className="ach-icon" aria-hidden="true" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            className="education-card glass-card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <div className="education-icon" aria-hidden="true">
              <FiAward />
            </div>
            <div>
              <h3 className="education-title">B.E. Computer Science</h3>
              <p className="education-where">JAIN Institute of Technology, Bengaluru</p>
              <p className="education-meta mono">8.19 CGPA · Graduated 2023</p>
            </div>
          </motion.div>
        </section>

        {/* ── Resume Section ── */}
        <section className="about-section">
          <motion.div
            className="resume-card glass-card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
          >
            <div className="resume-card__left">
              <span className="section-label" style={{ marginBottom: "0.5rem" }}>Resume</span>
              <h2 className="resume-card__title">Tajammul Khan</h2>
              <p className="resume-card__sub">Frontend Engineer · React · Next.js · TypeScript</p>
              <div className="resume-stats">
                <span className="resume-stat mono">3 Yrs Experience</span>
                <span className="resume-stat-sep">·</span>
                <span className="resume-stat mono">React Expert</span>
                <span className="resume-stat-sep">·</span>
                <span className="resume-stat mono">Full Stack</span>
                <span className="resume-stat-sep">·</span>
                <span className="resume-stat mono">AI Integration</span>
              </div>
            </div>
            <div className="resume-card__actions">
              <a
                href="/Tajammul_Khan_Resume.pdf"
                download="Tajammul_Khan_Resume.pdf"
                className="btn-primary-pill"
                aria-label="Download Tajammul Khan's Resume as PDF"
              >
                <FiDownload aria-hidden="true" />
                Download PDF
              </a>
              <a
                href="/Tajammul_Khan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-pill"
                aria-label="View Tajammul Khan's Resume online"
              >
                <FiEye aria-hidden="true" />
                View Online
              </a>
            </div>
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
            {techstack.map(({ category, color, items, highlight }) => {
              const IconComponent = categoryIconMap[category] || FiCode;
              return (
                <motion.div
                  key={category}
                  className={`skill-card glass-card ${highlight ? "skill-card--learning" : ""}`}
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 22 } }}
                >
                  <div className="skill-card__header">
                    <span
                      className="skill-card__icon"
                      style={{ color }}
                      aria-hidden="true"
                    >
                      <IconComponent />
                    </span>
                    <span className="skill-card__label mono">{category}</span>
                  </div>
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
              );
            })}
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
              <motion.div
                key={i}
                className="service-card glass-card"
                variants={fadeUp}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 22 } }}
              >
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
