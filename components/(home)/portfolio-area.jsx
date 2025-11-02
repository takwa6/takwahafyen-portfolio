"use client";

import { portfolioArea } from "@/data/site";
import PortfolioLine from "./ui/portfolio-line";
import PortfolioMarquee from "./ui/portfolio-marquee";
import PortfolioLineModal from "./ui/portfolio-line-modal";

export default function PortfolioArea() {
  return (
    <div id="works" className="portfolio-area over-hidden pb-165">
      <PortfolioMarquee />
      <div className="portfolio-wrapper position-relative mt--5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="title">
                <span className="theme-color text-uppercase d-block mb-2">
                  Portfolio
                </span>
                <h2>My Recent Works</h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center portfolio mt-80">
            {portfolioArea?.slice(0, 4).map((item, i) => (
              <div
                key={i}
                className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch"
              >
                <div className="portfolio-card w-100">
                  <PortfolioLine data={item} />
                </div>
              </div>
            ))}
          </div>

          <PortfolioLineModal />
        </div>
      </div>

      <style jsx>{`
        .portfolio-area {
        }

        .title h2 {
          color: #fff;
          font-size: 32px;
          font-weight: 700;
          margin-top: 10px;
        }

        .portfolio {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .portfolio-card {
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .portfolio-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 6px 25px rgba(158, 240, 26, 0.3);
        }

        @media (max-width: 768px) {
          .title h2 {
            font-size: 24px;
          }

          .portfolio-card {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
}
