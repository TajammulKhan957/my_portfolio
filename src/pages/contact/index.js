import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import { meta, contactConfig, socialprofils } from "../../content_option";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import {
  FiMapPin,
  FiCopy,
  FiCheck,
  FiDownload,
  FiEye,
  FiFileText,
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

export const ContactUs = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata((prev) => ({ ...prev, loading: true }));

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_PUBLIC_KEY
      )
      .then(
        () =>
          setFormdata({
            email: "",
            name: "",
            message: "",
            loading: false,
            alertmessage: "Message sent! I'll get back to you within 24 hours.",
            variant: "success",
            show: true,
          }),
        (error) =>
          setFormdata((prev) => ({
            ...prev,
            loading: false,
            alertmessage: `Failed to send: ${error.text}`,
            variant: "danger",
            show: true,
          }))
      );
  };

  const handleChange = (e) => {
    setFormdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(contactConfig.YOUR_EMAIL)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      })
      .catch(() => {
        /* fallback: open mail client */
        window.open(`mailto:${contactConfig.YOUR_EMAIL}`, "_self");
      });
  };

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact | {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <div className="contact-page">
        {/* ── Page hero ── */}
        <motion.div
          className="page-hero"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          <motion.span className="section-label" variants={fadeUp}>
            — Get In Touch
          </motion.span>
          <motion.h1 className="page-hero__title" variants={fadeUp}>
            Let's build something<br />remarkable together.
          </motion.h1>
        </motion.div>

        {/* ── Two-column grid ── */}
        <div className="contact-grid">
          {/* ── Info column ── */}
          <motion.div
            className="contact-info"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.div className="avail-badge" variants={fadeUp}>
              <span className="avail-dot" aria-hidden="true" />
              Available for full-time roles
            </motion.div>

            <motion.p className="contact-desc" variants={fadeUp}>
              {contactConfig.description}
            </motion.p>

            {/* Contact details */}
            <motion.div className="contact-details" variants={fadeUp}>
              {/* Email with copy button */}
              <div className="contact-detail glass-card">
                <HiOutlineMail className="detail-icon" aria-hidden="true" />
                <div className="detail-text">
                  <span className="detail-label mono">Email</span>
                  <span className="detail-value">{contactConfig.YOUR_EMAIL}</span>
                </div>
                <button
                  className={`copy-btn ${copied ? "copy-btn--copied" : ""}`}
                  onClick={handleCopyEmail}
                  aria-label={copied ? "Email copied!" : "Copy email address"}
                  title={copied ? "Copied!" : "Copy email"}
                >
                  {copied ? <FiCheck /> : <FiCopy />}
                  <span className="mono">{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>

              {/* Phone */}
              <div className="contact-detail glass-card">
                <BsTelephoneFill className="detail-icon" aria-hidden="true" />
                <div className="detail-text">
                  <span className="detail-label mono">Phone</span>
                  <span className="detail-value">{contactConfig.YOUR_FONE}</span>
                </div>
              </div>

              {/* Location */}
              <div className="contact-detail glass-card">
                <FiMapPin className="detail-icon" aria-hidden="true" />
                <div className="detail-text">
                  <span className="detail-label mono">Location</span>
                  <span className="detail-value">{contactConfig.YOUR_LOCATION}</span>
                </div>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div className="contact-socials" variants={fadeUp}>
              <a
                href={socialprofils.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn glass-card"
                aria-label="Visit GitHub profile"
              >
                <FaGithub aria-hidden="true" /> GitHub
              </a>
              <a
                href={socialprofils.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn glass-card"
                aria-label="Visit LinkedIn profile"
              >
                <FaLinkedin aria-hidden="true" /> LinkedIn
              </a>
            </motion.div>
          </motion.div>

          {/* ── Form column ── */}
          <motion.div
            className="contact-form-wrap glass-card"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {formData.show && (
              <div className={`form-alert form-alert--${formData.variant}`} role="alert">
                <span>{formData.alertmessage}</span>
                <button
                  onClick={() => setFormdata((prev) => ({ ...prev, show: false }))}
                  className="alert-close"
                  aria-label="Dismiss alert"
                >
                  ×
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name" className="mono">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email" className="mono">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="message" className="mono">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, role, or just say hello..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary-pill form-submit"
                disabled={formData.loading}
              >
                {formData.loading ? "Sending…" : "Send Message →"}
              </button>
            </form>
          </motion.div>
        </div>

        {/* ── Resume Download Strip ── */}
        <motion.div
          className="contact-resume glass-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="contact-resume__icon" aria-hidden="true">
            <FiFileText />
          </div>
          <div className="contact-resume__text">
            <h3 className="contact-resume__title">Resume Available</h3>
            <p className="contact-resume__sub mono">Full-Stack Engineer · React · Node.js · FastAPI · AI/LLM · 3 Years</p>
          </div>
          <div className="contact-resume__actions">
            <a
              href="/Tajammul_Khan_Resume.pdf"
              download="Tajammul_Khan_Resume.pdf"
              className="btn-primary-pill"
              aria-label="Download Tajammul's resume"
            >
              <FiDownload aria-hidden="true" />
              Download
            </a>
            <a
              href="/Tajammul_Khan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-pill"
              aria-label="View Tajammul's resume online"
            >
              <FiEye aria-hidden="true" />
              View
            </a>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <motion.footer
          className="site-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="mono">
            Designed &amp; built by Tajammul Khan · {new Date().getFullYear()}
          </p>
          <div className="footer-links">
            <a href={socialprofils.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>Email</a>
          </div>
        </motion.footer>
      </div>

      {formData.loading && <div className="loading-bar" aria-hidden="true" />}
    </HelmetProvider>
  );
};
