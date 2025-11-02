"use client";
import Image from "next/image";
import React from "react";

const email = "takwa.hafyen@gmail.com";

const social = [
  {
    icon: "fab fa-linkedin-in",
    path: "https://www.linkedin.com/in/takwa-hafyen-472264282",
    aria: "LinkedIn",
  },
  {
    icon: "fab fa-github",
    path: "https://github.com/takwa6",
    aria: "GitHub",
  },
  {
    icon: "fas fa-envelope",
    path: "",
    aria: "Email",
  },
];

function openMailFallback(to) {
  const mailto = `mailto:${to}`;
  window.location.href = mailto;

  setTimeout(() => {
    const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      to
    )}`;
    window.open(gmailCompose, "_blank", "noopener,noreferrer");
  }, 500);
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo et droits */}
        <div className="footer-left">
          <div className="logo-wrapper">
            <Image
              src="/images/logo/logo.png"
              alt="Logo"
              fill
              className="footer-logo"
            />
          </div>
          <p className="footer-text">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>

        {/* Icônes sociales */}
        <div className="footer-right">
          <ul className="social-list">
            {social.map((item, i) => (
              <li key={i} className="social-item">
                {item.icon === "fas fa-envelope" ? (
                  <button
                    onClick={() => openMailFallback(email)}
                    className="social-btn"
                    aria-label={item.aria}
                    title={`Envoyer un mail à ${email}`}
                  >
                    <i className={item.icon}></i>
                  </button>
                ) : (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label={item.aria}
                    title={item.aria}
                  >
                    <i className={item.icon}></i>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Ligne du bas */}
      <div className="footer-bottom">
        <p>
          Made with <span className="heart">💚</span> by{" "}
          <span className="author">Takwa Hafyen</span>
        </p>
      </div>

      {/* ✅ CSS intégré */}
      <style jsx>{`
        :root {
          --pistache: #93c572;
        }

        .footer {
          color: #333;
          padding: 60px 0 25px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          font-family: "Montserrat", sans-serif;
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          flex-wrap: wrap;
        }

        .footer-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }

        .logo-wrapper {
          position: relative;
          width: 180px;
          height: 40px;
        }

        .footer-logo {
          object-fit: contain;
        }

        .footer-text {
          font-size: 14px;
          color: #666;
        }

        .social-list {
          display: flex;
          gap: 15px;
          justify-content: flex-end;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          border-radius: 10px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          background: linear-gradient(180deg, var(--bg) 0%, #f1f4f6 100%);
          color: #555;
          font-size: 20px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .social-btn:hover,
        .social-btn:focus {
          background-color: var(--pistache);
          color: #fff;
          border-color: var(--pistache);
          transform: scale(1.1);
        }

        .footer-bottom {
          text-align: center;
          margin-top: 30px;
          color: #555;
          font-size: 15px;
        }

        .heart {
          color: var(--pistache);
          font-size: 18px;
        }

        .author {
          font-weight: 600;
          color: var(--pistache);
        }

        /* ✅ Responsive */
        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }

          .logo-wrapper {
            width: 130px;
            height: 30px;
          }

          .footer-text {
            font-size: 13px;
            text-align: center;
          }

          .footer-right {
            justify-content: center;
          }

          .social-btn {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }
        }

        @media (max-width: 480px) {
          .logo-wrapper {
            width: 110px;
            height: 25px;
          }
        }
      `}</style>
    </footer>
  );
}
