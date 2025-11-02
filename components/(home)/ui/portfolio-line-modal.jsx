"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function PortfolioLineModal() {
  const portfolioInfo = useSelector((state) =>
    state.portfolio ? state.portfolio.portfolioInfo : null
  );

  const [show, setShow] = useState(false);
  const videoRef = useRef(null);

  // Ouvrir le modal dès que le portfolioInfo est disponible
  useEffect(() => {
    if (portfolioInfo) {
      setShow(true);
    }
  }, [portfolioInfo]);

  // Gérer la source vidéo
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    try {
      if (portfolioInfo?.videoUrl) {
        vid.src = portfolioInfo.videoUrl;
        vid.load?.();
      } else {
        if (vid.tagName === "VIDEO") {
          vid.removeAttribute("src");
          vid.load?.();
        }
      }
    } catch {}
    return () => {
      try {
        vid?.pause?.();
      } catch {}
    };
  }, [portfolioInfo, show]);

  const handleClose = () => setShow(false);

  if (!portfolioInfo) return null;

  const {
    title,
    client,
    duration,
    description,
    KeyAchievements,
    technologies,
    imgLargeUrl,
    imgUrl,
    videoUrl,
  } = portfolioInfo;

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="portfolio-modal-title"
      centered
    >
      <div
        className="portfolio-modal"
        style={{
          //background: "#0c0e1a",
          color: "#fff",
          borderRadius: 16,
          padding: 20,
          boxShadow: "0 0 20px rgba(159, 240, 26, 0.2)",
        }}
      >
        {/* Bouton de fermeture moderne */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={handleClose}
            style={{
              background: "#9ef01a",
              border: "none",
              color: "#0c0e1a",
              borderRadius: "50%",
              width: 40,
              height: 40,
              cursor: "pointer",
              fontSize: 18,
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#b7f86a")}
            onMouseLeave={(e) => (e.target.style.background = "#9ef01a")}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <Modal.Body>
          {/* Image ou vidéo */}
          <div className="portfolio-media mb-4" style={{ borderRadius: 12 }}>
            {videoUrl ? (
              <iframe
                src={videoUrl}
                width="100%"
                height="400"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={title || "portfolio-video"}
                style={{
                  borderRadius: 12,
                  border: "2px solid #9ef01a33",
                }}
              />
            ) : imgLargeUrl || imgUrl ? (
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 0,
                  paddingBottom: "56.25%",
                  borderRadius: 12,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={imgLargeUrl || imgUrl}
                  alt={title || "portfolio image"}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            ) : null}
          </div>

          {/* Informations principales */}
          <h2
            id="portfolio-modal-title"
            style={{
              color: "#9ef01a",
              fontWeight: 700,
              fontSize: "1.8rem",
              marginBottom: 10,
            }}
          >
            {title}
          </h2>

          <p style={{ color: "#ccc", marginBottom: 6 }}>
            <strong>Client :</strong> {client || "—"}
          </p>
          <p style={{ color: "#ccc", marginBottom: 20 }}>
            <strong>Duration :</strong> {duration || "—"}
          </p>

          {/* Description */}
          {description?.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <h5 style={{ color: "#9ef01a" }}>Description :</h5>
              <ul style={{ color: "#ccc", paddingLeft: 20 }}>
                {description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Réalisations clés */}
          {KeyAchievements?.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <h5 style={{ color: "#9ef01a" }}>Key Achievements :</h5>
              <ul style={{ color: "#ccc", paddingLeft: 20 }}>
                {KeyAchievements.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {technologies?.length > 0 && (
            <div>
              <h5 style={{ color: "#9ef01a" }}>Tools & Technologies :</h5>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginTop: 10,
                }}
              >
                {technologies.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      //background: "#9ef01a22",
                      color: "#9ef01a",
                      padding: "6px 12px",
                      borderRadius: 8,
                      fontSize: "0.9rem",
                      fontWeight: 500,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </Modal.Body>
      </div>
    </Modal>
  );
}
