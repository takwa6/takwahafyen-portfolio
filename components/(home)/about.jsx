"use client";
import AboutInfo from "./ui/about-info";

export default function About() {
  return (
    <div id="about" className="about-area over-hidden">
      <div className="about-content-wrapper about-margin mt-170 mb-110 position-relative">
        <div className="container">
          <div className="row justify-content-center">
            {/* Section texte "About Me" uniquement */}
            <div className="col-xl-8 col-lg-8 col-md-10 col-sm-12 col-12">
              <AboutInfo />
            </div>
          </div>
        </div>

        {/* Éléments décoratifs supprimés (photo, tilt, shapes, etc.) */}
      </div>
    </div>
  );
}
