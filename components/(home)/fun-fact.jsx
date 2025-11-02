import { experience } from "@/data/site";
import FactExperienceCard from "./ui/fact-experience-card";
import Image from "next/image";

export default function FunFact() {
    return (
        <div
            className="fun-fact-area fun-fact-bg position-relative over-hidden pt-150 pb-120"
            data-aos="fade-up"
            data-aos-duration={1800}
            
        >
            <div className="container">
                 <div className="marquee-w mb-125">
            
                <div className="marquee marquee2 pb-1">
                    <span className="pl-4">
                        I’m Open for new projects * Let’s Work Together *
                    </span>
                    <span className="pl-4">
                        I’m Open for new projects * Let’s Work Together *
                    </span>
                </div>
            </div>
                <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-12 col-sm- col-">
                        <div className="fun-fact-content mb-50 mr-lg-2 mr-xl-0">
                            <div className="position-relative">
                                <div className="title">
                                   <span className="theme-color text-uppercase d-block mb-6">
  Highlights & Achievements
</span>
<h2 className="mb-30 text-white">
  I Build Intelligent Solutions
</h2>
                                </div>
                            </div>
                            <p>
  Passionate about AI and software development, I design and develop 
  applications that integrate machine learning models, automate workflows, 
  and enhance user experiences.
</p>
                        </div>
                    </div>
                    <div className="col-xl-6 offset-xl-1 col-lg-6 col-md-12 col-sm- col-">
                        <div className="row justify-content-center align-items-center">
                            {/* fun fact exp. card start */}
                            {experience?.map((item, i) => (
                                <div
                                    key={i}
                                    className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-10"
                                >
                                    <FactExperienceCard data={item} />
                                </div>
                            ))}
                            {/* fun fact exp. card end */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="fact-style1 position-absolute d-none d-md-inline-block">
                <Image
                    height={410}
                    width={310}
                    src="/images/shape/fact-icon1.png"
                    alt="shape 1"
                />
            </div>

            <div className="fact-style2 position-absolute d-none d-md-inline-block">
                <Image
                    height={410}
                    width={357}
                    src="/images/shape/fact-icon2.png"
                    alt="shape 2"
                    className="h-100 w-auto"
                />
            </div>
        </div>
    );
}
