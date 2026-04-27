import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import { meta, contactConfig, socialprofils } from "../../content_option";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";

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
            alertmessage: "Message sent! I'll get back to you soon.",
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
            Let's build something<br />together.
          </motion.h1>
        </motion.div>

        {/* ── Grid ── */}
        <div className="contact-grid">
          {/* Info column */}
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

            <motion.div className="contact-details" variants={fadeUp}>
              <button
                className="contact-detail glass-card contact-detail--btn"
                onClick={() => window.open(`mailto:${contactConfig.YOUR_EMAIL}`, "_self")}
                aria-label={`Send email to ${contactConfig.YOUR_EMAIL}`}
              >
                <HiOutlineMail className="detail-icon" aria-hidden="true" />
                <div>
                  <span className="detail-label mono">Email</span>
                  <span className="detail-value">{contactConfig.YOUR_EMAIL}</span>
                </div>
              </button>

              <div className="contact-detail glass-card">
                <BsTelephoneFill className="detail-icon" aria-hidden="true" />
                <div>
                  <span className="detail-label mono">Phone</span>
                  <span className="detail-value">{contactConfig.YOUR_FONE}</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="contact-socials" variants={fadeUp}>
              <a
                href={socialprofils.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn glass-card"
              >
                <FaGithub aria-hidden="true" /> GitHub
              </a>
              <a
                href={socialprofils.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn glass-card"
              >
                <FaLinkedin aria-hidden="true" /> LinkedIn
              </a>
            </motion.div>
          </motion.div>

          {/* Form column */}
          <motion.div
            className="contact-form-wrap glass-card"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {formData.show && (
              <div className={`form-alert form-alert--${formData.variant}`}>
                <span>{formData.alertmessage}</span>
                <button
                  onClick={() => setFormdata((prev) => ({ ...prev, show: false }))}
                  className="alert-close"
                  aria-label="Dismiss"
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
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
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
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="message" className="mono">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or role..."
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
          </div>
        </motion.footer>
      </div>

      {formData.loading && <div className="loading-bar" aria-hidden="true" />}
    </HelmetProvider>
  );
};
