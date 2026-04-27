import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta, socialprofils } from "../../content_option";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <section className="hero">
        {/* Ambient background blobs */}
        <div className="hero__bg" aria-hidden="true">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
        </div>

        <div className="hero__inner">
          {/* ── Text ── */}
          <div className="hero__content">
            <motion.div
              className="hero__badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <span className="badge-dot" />
              <span className="mono">Available for opportunities</span>
            </motion.div>

            <motion.h1
              className="hero__name"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              {introdata.title.replace("I'm ", "")}
            </motion.h1>

            <motion.div
              className="hero__typewriter"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
            >
              <Typewriter
                options={{
                  strings: [
                    introdata.animated.first,
                    introdata.animated.second,
                    introdata.animated.third,
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 35,
                  delay: 55,
                }}
              />
            </motion.div>

            <motion.p
              className="hero__desc"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36 }}
            >
              {introdata.description}
            </motion.p>

            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.48 }}
            >
              <Link to="/portfolio" className="btn-primary-pill">
                View My Work
              </Link>
              <Link to="/contact" className="btn-ghost-pill">
                Get In Touch
              </Link>
            </motion.div>

            <motion.div
              className="hero__socials"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href={socialprofils.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={socialprofils.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <Link to="/contact" aria-label="Contact me">
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
                alt="Tajammul Khan"
                className="hero__image"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          aria-hidden="true"
        >
          <div className="scroll-line" />
          <span className="mono">scroll</span>
        </motion.div>
      </section>
    </HelmetProvider>
  );
};
