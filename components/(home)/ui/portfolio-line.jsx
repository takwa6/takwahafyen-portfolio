"use client";
import { addPortfolioInfo } from "@/redux/features/portfolio/poftfolioSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function PortfolioLine({ data }) {
  const dispatch = useDispatch();

  // ✅ Import Bootstrap JS seulement côté client
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const openPortfolioModal = () => {
    dispatch(addPortfolioInfo(data));

    // ✅ Attendre un petit délai pour laisser Redux mettre à jour les données
    setTimeout(() => {
      const modalElement = document.getElementById("portfolio-area-modal");
      if (modalElement) {
        // Bootstrap Modal est maintenant disponible via le module importé
        const modal = new window.bootstrap.Modal(modalElement);
        modal.show();
      }
    }, 100); // petit délai pour éviter la course entre dispatch et modal
  };

  const techList = Array.isArray(data.technologies)
    ? data.technologies
    : typeof data.technologies === "string"
    ? data.technologies.split(",")
    : [];

  return (
    <div className="portfolio-card" onClick={openPortfolioModal}>
      <style jsx>{`
        .portfolio-card {
        background:rgb(37, 41, 53);
          border-radius: 16px;
          padding: 20px;
          border-top: 4px solid #9ef01a;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
          transition: all 0.3s ease;
          cursor: pointer;
          max-width: 500px;
          margin: auto;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .portfolio-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.6);
        }

        .project-image {
          width: 100%;
          height: 220px;
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 15px;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.55);
          opacity: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: opacity 0.3s ease;
        }

        .portfolio-card:hover .overlay {
          opacity: 1;
        }

        .plus-icon {
          font-size: 32px;
          color: #9ef01a;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.3s ease;
        }

        .portfolio-card:hover .plus-icon {
          transform: scale(1.1);
        }

        .project-title {
          font-size: 20px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 10px;
        }

        .client {
          color: #ffda79;
          font-weight: 500;
          margin-bottom: 10px;
        }

        .tech-container {
          margin-top: 15px;
        }

        .tech-badge {
          display: inline-block;
          color: #fff;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 500;
          margin: 5px 5px 0 0;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .tech-badge:hover {
          transform: scale(1.05);
          background: rgba(255, 255, 255, 0.1);
        }
      `}</style>

      {/* Image + overlay */}
      <div className="project-image">
        <Image src={data.imgUrl} alt={`Project ${data.title}`} fill priority />
        <div className="overlay">
          <div className="plus-icon">
            <i className="far fa-plus"></i>
          </div>
        </div>
      </div>

      {/* Infos projet */}
      <div className="project-info">
        <h3 className="project-title">{data.title}</h3>
        {data.client && <div className="client">{data.client}</div>}
        <div className="tech-container">
          {techList.map((tech, i) => (
            <span key={i} className="tech-badge">
              {tech.trim()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
