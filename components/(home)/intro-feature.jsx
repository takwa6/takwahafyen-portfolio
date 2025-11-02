"use client";
import { Tilt } from "react-tilt";
import IntroFeatureCard from "./ui/intro-feature-card";
import { introFeature } from "@/data/site";
import Image from "next/image";

const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 20, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",
};

export default function IntroFeature() {
    return (
        <div className="intro-feature-area section-bg over-hidden position-relative">
            <div className="container">
                <div className="row single-intro-feature-wrapper justify-content-center pt-170 pb-140">
                    {/* intro feature card start */}
                    {introFeature?.map((item, i) => (
                        <div
                            key={i}
                            className="col-xl-3 col-lg-3 col-md-6 col-sm-9 col-11"
                        >
                            <Tilt options={defaultOptions}>
                                <IntroFeatureCard data={item} index={i} />
                            </Tilt>
                        </div>
                    ))}
                    {/* intro feature card end */}
                </div>
            </div>

            <div className="intro-feature-text-style position-absolute d-none d-md-inline-block">
                <span className="d-inline-block">James</span>
            </div>

            <div className="intro-feature-icon position-absolute d-none d-md-inline-block zoom-animation">
                <Image
                    height={29}
                    width={40}
                    src="/images/shape/content-shape1.png"
                    alt="intro shape 1"
                />
            </div>
        </div>
    );
}
