"use client";
import React from "react";

const email = "takwa.hafyen@gmail.com";

const socialLink = [
  {
    icon: "fab fa-linkedin-in",
    link: "https://www.linkedin.com/in/takwa-hafyen-472264282",
    aria: "LinkedIn",
  },
  {
    icon: "fab fa-github",
    link: "https://github.com/takwa6",
    aria: "GitHub",
  },
  {
    icon: "fas fa-envelope",
    link: "",
    aria: "Envoyer un e-mail",
  },
];

function openMailFallback(to, subject = "", body = "") {
  const mailto = `mailto:${to}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}${
    body ? `${subject ? "&" : "?"}body=${encodeURIComponent(body)}` : ""
  }`;

  // Essaie d'ouvrir le client mail par défaut
  window.location.href = mailto;

  // Si aucun client n'est configuré, ouvre Gmail en fallback
  setTimeout(() => {
    const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}`;
    window.open(gmailCompose, "_blank", "noopener,noreferrer");
  }, 500);
}

export default function HeroSociable() {
  return (
    <div className="social-container">
      <ul className="social-list">
        {socialLink.map((item, i) => (
          <li key={i} className="social-item">
            {item.icon === "fas fa-envelope" ? (
              <button
                onClick={() => openMailFallback(email)}
                className="social-button"
                aria-label={item.aria}
                title={`Envoyer un mail à ${email}`}
              >
                <i className={item.icon}></i>
              </button>
            ) : (
              <a
                className="social-button"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.aria}
                title={item.aria}
              >
                <i className={item.icon}></i>
              </a>
            )}
          </li>
        ))}
      </ul>

      <style jsx>{`
        .social-container {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 11;
        }

        .social-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .social-item {
          margin: 10px 0;
        }

        .social-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: white;
          font-size: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        /* 💎 Thème cohérent avec ton template */
        .social-button:hover,
        .social-button:focus,
        .social-button:active {
          background-color: var(--main-color);
          border-color: var(--main-color);
          color: #fff;
          transform: scale(1.1);
          box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
        }

        .social-button i {
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
