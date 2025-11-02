// PortfolioVideo.js
"use client";
import React from "react";

const PortfolioVideo = ({ videoUrl }) => {
  if (!videoUrl) return null;

  // Vérifie si c’est un lien Google Drive
  const isGoogleDrive = videoUrl.includes("drive.google.com");

  if (isGoogleDrive) {
    // Extrait l’ID du fichier Drive
    const match = videoUrl.match(/[-\w]{25,}/);
    const fileId = match ? match[0] : null;

    return (
      <iframe
        src={`https://drive.google.com/file/d/${fileId}/preview`}
        width="100%"
        height="480"
        allow="autoplay"
        allowFullScreen
        style={{
          border: "none",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        }}
      />
    );
  }

  // Sinon, c’est un fichier local ou MP4
  return (
    <video
      controls
      width="100%"
      height="480"
      style={{
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      }}
    >
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default PortfolioVideo;
