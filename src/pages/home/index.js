import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta, socialprofils } from "../../content_option";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiDownload, FiArrowRight } from "react-icons/fi";

const heroStats = [
  { value: "3",   label: "Years Exp." },
  { value: "10M+", label: "Users Reached" },
  { value: "4",    label: "Shipped Projects" },
  { value: "90+",  label: "Lighthouse" },
];

const marqueeItems = [
  "React.js", "Next.js", "TypeScript", "Node.js", "FastAPI", ".NET Core",
  "PostgreSQL", "MongoDB", "OpenAI", "LangChain", "Docker", "AWS", "Azure",
  "GraphQL", "CI/CD", "Tailwind CSS", "Angular", "Redis", "RAG",
];

export const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content="Frontend Engineer, React Developer, Next.js, TypeScript, Full Stack, Tajammul Khan" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Helmet>

      <section className="hero">
        {/* Ambient background blobs */}
        <div className="hero__bg" aria-hidden="true">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
        </div>

        <div className="hero__inner">
          {/* ── Text Column ── */}
          <div className="hero__content">

            {/* Availability Badge */}
            <motion.div
              className="hero__badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <span className="badge-dot" aria-hidden="true" />
              <span className="mono">Available for opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="hero__name"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              Tajammul<br />Khan
            </motion.h1>

            {/* Typewriter roles */}
            <motion.div
              className="hero__typewriter"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              aria-label="Frontend Engineer — rotating roles"
            >
              <Typewriter
                options={{
                  strings: introdata.animated,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 35,
                  delay: 55,
                }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              className="hero__desc"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36 }}
            >
              {introdata.description}
            </motion.p>

            {/* Stat pills */}
            <motion.div
              className="hero__stats"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.46 }}
            >
              {heroStats.map(({ value, label }) => (
                <div key={label} className="hero__stat glass-card">
                  <span className="hero__stat-value gradient-text">{value}</span>
                  <span className="hero__stat-label mono">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.56 }}
            >
              <Link to="/portfolio" className="btn-primary-pill">
                View Projects <FiArrowRight aria-hidden="true" />
              </Link>
              <Link to="/contact" className="btn-ghost-pill">
                Contact Me
              </Link>
              <a
                href="/Tajammul_Khan_Resume.pdf"
                download="Tajammul_Khan_Resume.pdf"
                className="btn-ghost-pill hero__resume-btn"
                aria-label="Download Tajammul Khan's Resume PDF"
              >
                <FiDownload aria-hidden="true" />
                Resume
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              className="hero__socials"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.66 }}
            >
              <a
                href={socialprofils.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Tajammul's GitHub profile"
              >
                <FaGithub />
              </a>
              <a
                href={socialprofils.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Tajammul's LinkedIn profile"
              >
                <FaLinkedin />
              </a>
              <Link to="/contact" aria-label="Send Tajammul an email">
                <HiOutlineMail />
              </Link>
            </motion.div>
          </div>

          {/* ── Profile Image ── */}
          <motion.div
            className="hero__image-wrap"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="hero__image-glow" aria-hidden="true" />
            <div className="hero__image-frame">
              <img
                src={introdata.your_img_url}
                alt="Tajammul Khan — Frontend Engineer"
                className="hero__image"
              />
            </div>
            {/* Floating badges */}
            <motion.div
              className="hero__float-badge hero__float-badge--top"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              aria-hidden="true"
            >
              <span className="mono">React Expert</span>
            </motion.div>
            <motion.div
              className="hero__float-badge hero__float-badge--bottom"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              aria-hidden="true"
            >
              <span className="badge-dot badge-dot--green" />
              <span className="mono">Open to Work</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          aria-hidden="true"
        >
          <div className="scroll-line" />
          <span className="mono">scroll</span>
        </motion.div>
      </section>

      {/* Tech Marquee Strip */}
      <motion.div
        className="marquee-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        aria-hidden="true"
      >
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="marquee-item mono">
              {item} <span className="marquee-dot">·</span>
            </span>
          ))}
        </div>
      </motion.div>
    </HelmetProvider>
  );
};
