import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import { dataportfolio, meta } from "../../content_option";
import { FaGithub } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Work | {meta.title}</title>
        <meta name="description" content={meta.description} />
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
        </motion.div>

        {/* ── Project grid ── */}
        <motion.div
          className="portfolio-grid"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          {dataportfolio.map((item, i) => (
            <motion.article
              key={i}
              className={`project-card glass-card ${item.featured ? "project-card--featured" : ""}`}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 320, damping: 22 } }}
            >
              {item.featured && (
                <div className="featured-badge mono">✦ Featured</div>
              )}

              <div className="project-card__image">
                <img src={item.img} alt={item.name} loading="lazy" />
                <div className="project-card__overlay" aria-hidden="true" />
              </div>

              <div className="project-card__body">
                <h3 className="project-card__name">{item.name}</h3>
                <p className="project-card__desc">{item.description}</p>

                <div className="project-card__tech">
                  {item.tech.map((t) => (
                    <span key={t} className="tech-tag mono">{t}</span>
                  ))}
                </div>

                <div className="project-card__links">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub aria-hidden="true" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </HelmetProvider>
  );
};
