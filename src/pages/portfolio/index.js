import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { dataportfolio, meta } from "../../content_option";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiStar, FiTrendingUp, FiCheck, FiChevronDown } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const ProjectVisual = ({ color, tagline, id }) => (
  <div className={`project-visual project-visual--${color}`} aria-hidden="true">
    <div className="project-visual__grid" />
    <div className="project-visual__orb project-visual__orb--1" />
    <div className="project-visual__orb project-visual__orb--2" />
    <div className="project-visual__content">
      <span className="project-visual__id mono">/{id}</span>
      <span className="project-visual__label mono">{tagline}</span>
    </div>
  </div>
);

const ProjectCard = ({ item, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      className={`project-card glass-card ${item.featured ? "project-card--featured" : ""}`}
      variants={fadeUp}
      whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 22 } }}
    >
      {item.featured && (
        <div className="featured-badge mono">
          <FiStar aria-hidden="true" /> Featured
        </div>
      )}

      <ProjectVisual color={item.color} tagline={item.tagline} id={item.id} />

      <div className="project-card__body">
        {/* Header */}
        <div className="project-card__header">
          <div>
            <span className="project-card__tagline mono">{item.tagline}</span>
            <h3 className="project-card__name">{item.name}</h3>
          </div>
          <div className="project-card__link-icons">
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label={`${item.name} GitHub repository`}
            >
              <FaGithub />
            </a>
            {item.live && (
              <a
                href={item.live}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn icon-btn--live"
                aria-label={`${item.name} live demo`}
              >
                <FiExternalLink />
              </a>
            )}
          </div>
        </div>

        {/* Metrics — impact up front */}
        <div className="project-metrics">
          {item.metrics.map((m) => (
            <span key={m} className="metric-badge">
              <FiTrendingUp className="metric-icon" aria-hidden="true" />
              {m}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="project-card__desc">{item.description}</p>

        {/* Business Problem & Solution */}
        <div className="project-story">
          <div className="story-block">
            <span className="story-label mono">Business Problem</span>
            <p className="story-text">{item.problem}</p>
          </div>
          <div className="story-block">
            <span className="story-label mono">My Role & Solution</span>
            <p className="story-text">{item.contribution}</p>
          </div>
        </div>

        {/* Expandable: Key Features + Challenge */}
        <button
          className="expand-toggle"
          onClick={() => setExpanded((p) => !p)}
          aria-expanded={expanded}
          aria-controls={`details-${item.id}`}
        >
          <span className="mono">{expanded ? "Hide Details" : "Key Features & Challenges"}</span>
          <FiChevronDown
            className={`expand-icon ${expanded ? "expand-icon--open" : ""}`}
            aria-hidden="true"
          />
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={`details-${item.id}`}
              className="project-details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              {/* Key Features */}
              {item.features && (
                <div className="detail-section">
                  <span className="detail-section__label mono">Key Features</span>
                  <ul className="features-list">
                    {item.features.map((f, i) => (
                      <li key={i} className="feature-item">
                        <FiCheck className="feature-check" aria-hidden="true" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenge Solved */}
              {item.challenge && (
                <div className="detail-section">
                  <span className="detail-section__label mono">Challenge Solved</span>
                  <p className="detail-section__text">{item.challenge}</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech Stack */}
        <div className="project-card__tech">
          {item.tech.map((t) => (
            <span key={t} className="tech-tag mono">{t}</span>
          ))}
        </div>

        {/* Action links */}
        <div className="project-card__links">
          <a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <FaGithub aria-hidden="true" />
            GitHub
          </a>
          {item.live ? (
            <a
              href={item.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-link--live"
            >
              <FiExternalLink aria-hidden="true" />
              Live Demo
            </a>
          ) : (
            <span className="project-link project-link--private" aria-label="Project under NDA">
              Private / NDA
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Work | {meta.title}</title>
        <meta name="description" content="Full-Stack and Frontend projects by Tajammul Khan — government platforms, AI analytics, EdTech, and developer tools built with React, Next.js, FastAPI, and OpenAI." />
      </Helmet>

      <div className="portfolio-page">
        {/* ── Page hero ── */}
        <motion.div
          className="page-hero"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          <motion.span className="section-label" variants={fadeUp}>
            — Selected Work
          </motion.span>
          <motion.h1 className="page-hero__title" variants={fadeUp}>
            Projects that<br />made an impact.
          </motion.h1>
          <motion.p className="page-hero__sub" variants={fadeUp}>
            Enterprise applications, government platforms, and AI-powered tools — built full-stack with performance, scalability, and measurable business outcomes.
          </motion.p>
        </motion.div>

        {/* ── Project grid ── */}
        <motion.div
          className="portfolio-grid"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          {dataportfolio.map((item, i) => (
            <ProjectCard key={item.id} item={item} index={i} />
          ))}
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          className="portfolio-cta"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          <p className="portfolio-cta__text">
            Want to see more work, explore my code, or discuss a project?
          </p>
          <a
            href="https://github.com/TajammulKhan957"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-pill"
          >
            <FaGithub aria-hidden="true" />
            View GitHub
          </a>
        </motion.div>
      </div>
    </HelmetProvider>
  );
};
