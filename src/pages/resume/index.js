import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { meta, contactConfig, socialprofils } from "../../content_option";
import {
  FiDownload,
  FiEye,
  FiCode,
  FiLayers,
  FiCpu,
  FiZap,
  FiAward,
  FiArrowRight,
  FiGlobe,
  FiServer,
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const resumeStats = [
  { icon: FiZap,    label: "Experience",      value: "3 Yrs",     color: "#7C3AED" },
  { icon: FiCode,   label: "Frontend",        value: "React / Next", color: "#06B6D4" },
  { icon: FiCpu,    label: "Backend",         value: "Node / FastAPI", color: "#8B5CF6" },
  { icon: FiGlobe,  label: "AI/LLM",          value: "OpenAI / RAG", color: "#06B6D4" },
  { icon: FiServer, label: "Cloud",           value: "AWS / Azure",  color: "#7C3AED" },
  { icon: FiAward,  label: "Recognition",     value: "Spot Award",   color: "#F59E0B" },
];

const highlights = [
  "Led frontend for PM Kisan eMitra (Govt. of India) — serving 10M+ beneficiaries",
  "Built full-stack Agentic AI analytics for Aditya Birla Group — React + FastAPI + PostgreSQL + OpenAI",
  "Architected AI Coding Mentor — 60% load improvement with Next.js Server Components + Prisma",
  "Built reusable Tailwind component libraries improving team velocity 40% across 3 enterprise projects",
  "Full-stack experience: React / Next.js → Node.js / FastAPI / ASP.NET Core → PostgreSQL / MongoDB",
  "AI/LLM expertise: RAG pipelines, LangChain, LangGraph, OpenAI API, streaming agent responses",
];

const skillBars = [
  { label: "React.js / Next.js",       level: 92 },
  { label: "TypeScript",                level: 88 },
  { label: "Node.js / Express",         level: 75 },
  { label: "FastAPI / Python",          level: 70 },
  { label: "ASP.NET Core / C#",         level: 62 },
  { label: "PostgreSQL / MongoDB",      level: 78 },
  { label: "AI / LLM Integration",      level: 80 },
  { label: "Docker / AWS / Azure",      level: 68 },
];

export const ResumePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Resume | {meta.title}</title>
        <meta name="description" content="Download Tajammul Khan's resume — Full-Stack Engineer with 3 years in React, Next.js, Node.js, FastAPI, ASP.NET Core, AI/LLM integration, and cloud deployment." />
      </Helmet>

      <div className="resume-page">
        {/* ── Page hero ── */}
        <motion.div
          className="page-hero"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          <motion.span className="section-label" variants={fadeUp}>
            — Resume
          </motion.span>
          <motion.h1 className="page-hero__title" variants={fadeUp}>
            Tajammul Khan<br />Full-Stack Engineer
          </motion.h1>
          <motion.p className="resume-page__intro" variants={fadeUp}>
            React · Next.js · TypeScript · Node.js · FastAPI · ASP.NET Core · AI/LLM · PostgreSQL · AWS
          </motion.p>
        </motion.div>

        {/* ── Main resume card ── */}
        <motion.div
          className="resume-preview-card glass-card"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {/* Card header */}
          <div className="resume-preview-header">
            <div className="resume-preview-header__left">
              <div className="resume-avatar" aria-hidden="true">TK</div>
              <div>
                <h2 className="resume-preview-name">Tajammul Khan</h2>
                <p className="resume-preview-role">
                  Full-Stack Engineer · Tibil Solutions, Bengaluru
                </p>
                <div className="resume-preview-contacts mono">
                  <span>{contactConfig.YOUR_EMAIL}</span>
                  <span className="contact-sep">·</span>
                  <span>{contactConfig.YOUR_FONE}</span>
                  <span className="contact-sep">·</span>
                  <span>{contactConfig.YOUR_LOCATION}</span>
                </div>
              </div>
            </div>

            <div className="resume-preview-actions">
              <a
                href="/Tajammul_Khan_Resume.pdf"
                download="Tajammul_Khan_Resume.pdf"
                className="btn-primary-pill"
                aria-label="Download resume as PDF"
              >
                <FiDownload aria-hidden="true" />
                Download PDF
              </a>
              <a
                href="/Tajammul_Khan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-pill"
                aria-label="View resume in new tab"
              >
                <FiEye aria-hidden="true" />
                View Online
              </a>
            </div>
          </div>

          <div className="resume-preview-divider" />

          {/* Stats row */}
          <div className="resume-stats-grid">
            {resumeStats.map(({ icon: Icon, label, value, color }) => (
              <div key={label} className="resume-stat-item">
                <div
                  className="resume-stat-icon"
                  style={{ color, background: `${color}18` }}
                  aria-hidden="true"
                >
                  <Icon />
                </div>
                <div>
                  <p className="resume-stat-value">{value}</p>
                  <p className="resume-stat-label mono">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Career highlights ── */}
        <motion.section
          className="resume-highlights"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.h2 className="section-heading" variants={fadeUp}>
            Career Highlights
          </motion.h2>

          <motion.div className="highlights-grid" variants={stagger}>
            {highlights.map((h, i) => (
              <motion.div key={i} className="highlight-card glass-card" variants={fadeUp}>
                <span className="highlight-num gradient-text mono">0{i + 1}</span>
                <p className="highlight-text">{h}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ── Skills snapshot ── */}
        <motion.section
          className="resume-skills-snapshot"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.h2 className="section-heading" variants={fadeUp}>
            Core Proficiency
          </motion.h2>

          <motion.div className="skills-snapshot-grid" variants={stagger}>
            {skillBars.map(({ label, level }) => (
              <motion.div key={label} className="skill-bar-item" variants={fadeUp}>
                <div className="skill-bar-top">
                  <span className="skill-bar-label mono">{label}</span>
                  <span className="skill-bar-pct mono">{level}%</span>
                </div>
                <div className="skill-bar-track">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ── Stack overview ── */}
        <motion.section
          className="resume-stack-section"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.h2 className="section-heading" variants={fadeUp}>Full-Stack Capabilities</motion.h2>
          <motion.div className="stack-overview" variants={stagger}>
            {[
              { layer: "Frontend",     icon: FiCode,   items: ["React.js", "Next.js 14", "Angular 14+", "TypeScript", "Tailwind CSS", "Framer Motion"] },
              { layer: "Backend",      icon: FiCpu,    items: ["Node.js", "Express", "FastAPI", "ASP.NET Core", "C#", "REST / GraphQL"] },
              { layer: "AI & LLM",     icon: FiGlobe,  items: ["OpenAI API", "LangChain", "LangGraph", "RAG", "Prompt Engineering", "Vector DBs"] },
              { layer: "Data & Cloud", icon: FiServer, items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Azure / GCP"] },
            ].map(({ layer, icon: Icon, items }) => (
              <motion.div key={layer} className="stack-layer glass-card" variants={fadeUp}>
                <div className="stack-layer__header">
                  <Icon className="stack-icon" aria-hidden="true" />
                  <span className="stack-layer__label mono">{layer}</span>
                </div>
                <div className="stack-pills">
                  {items.map((it) => (
                    <span key={it} className="stack-pill mono">{it}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ── CTA ── */}
        <motion.div
          className="resume-cta glass-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div>
            <h3 className="resume-cta__title">Ready to work together?</h3>
            <p className="resume-cta__sub">Open to Frontend, Full-Stack, and AI Engineer roles at product companies and ambitious startups.</p>
          </div>
          <div className="resume-cta__actions">
            <Link to="/contact" className="btn-primary-pill">
              Get In Touch <FiArrowRight aria-hidden="true" />
            </Link>
            <div className="resume-cta__social">
              <a
                href={socialprofils.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-social"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={socialprofils.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-social"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </HelmetProvider>
  );
};
