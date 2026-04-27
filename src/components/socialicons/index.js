import React from "react";
import "./style.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socialprofils } from "../../content_option";

const ICON_MAP = {
  github: FaGithub,
  linkedin: FaLinkedin,
};

export const Socialicons = () => {
  return (
    <aside className="social-sidebar" aria-label="Social links">
      <ul>
        {Object.entries(socialprofils).map(([platform, url]) => {
          const Icon = ICON_MAP[platform];
          if (!Icon) return null;
          return (
            <li key={platform}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform}
              >
                <Icon aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>
      <div className="social-sidebar__line" aria-hidden="true" />
    </aside>
  );
};
