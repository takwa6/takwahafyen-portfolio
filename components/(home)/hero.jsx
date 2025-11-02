"use client";
import Image from "next/image";
import HeroSociable from "./ui/hero-sociable";
import { Link as ScrollLink } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div id="home" className="slider-area slider-bg-color over-hidden">
      <div
        className="single-slider slider-height over-hidden position-relative xxl-device-width bg-cover no-repeat"
        style={{
          backgroundImage: "url(/images/slider/slider-bg.jpg)",
        }}
      >
        {/* === Shapes === */}
        

        {/* === Contenu principal === */}
        <div className="container slider-height d-flex align-items-end">
          <div className="row justify-content-center align-items-center h-100">
            {/* Texte */}
            <div className="col-xl-5 col-lg-6 col-md-12 col-sm-11 col-12 d-flex align-items-center justify-content-center">
              <div className="slider-wrapper h-100">
                <div
                  className="slider-content text-center mt--45 text-lg-left position-relative z-index11"
                  data-aos="fade-right"
                  data-aos-duration={2200}
                >
                  <h1 className="mb-15 white-text">
                    <span className="sub-heading d-block text-uppercase theme-color mb-0">
                      Hello I’m
                    </span>
                    Takwa Hafyen
                  </h1>

                  <h2 className="text-capitalize white-text mb-40">
                    A Passionate
                    <span className="d-text d-block d-sm-inline-block">
                      <TypeAnimation
                        className="typer theme-color d-inline-block pl-2"
                        sequence={[
                          "Software Engineer",
                          1000,
                          "AI Enthusiast",
                          1000,
                        ]}
                        wrapper="span"
                        speed={30}
                        repeat={Infinity}
                      />
                    </span>
                  </h2>

                  {/* Bouton scroll */}
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={800}
                    offset={-50}
                    className="btn position-relative over-hidden theme-bg text-uppercase transition5 cursor-pointer"
                  >
                    Let’s Connect
                  </ScrollLink>
                </div>
              </div>
            </div>

            {/* Image principale */}
            <div className="col-xl-7 col-lg-6 col-md-7 col-sm-10 col-12 d-flex justify-content-center align-items-end h-100">
              <div className="slider-img pl-120 position-relative z-index1">
                <Image
                  height="0"
                  width="0"
                  src="/images/slider/person.png"
                  alt="hero image"
                  sizes="100vw"
                  className="h-100 w-100"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <HeroSociable />

        {/* === CSS intégré === */}
        <style jsx>{`
          /* Styles généraux des shapes */
          .hero-shape {
            transition: all 0.3s ease;
            opacity: 0.9;
          }

          /* Position sur grands écrans */
          .hero-shape1 {
            top: 10%;
            left: 5%;
          }
          .hero-shape2 {
            bottom: 15%;
            right: 10%;
          }
          .hero-shape3 {
            top: 30%;
            right: 25%;
          }
          .hero-shape4 {
            bottom: 10%;
            left: 25%;
          }

          /* ✅ Centrage automatique sur téléphone */
          @media (max-width: 768px) {
            .shape-responsive {
              top: 50% !important;
              left: 50% !important;
              transform: translate(-50%, -50%) !important;
              width: 60px !important;
              height: auto !important;
              opacity: 0.8;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
