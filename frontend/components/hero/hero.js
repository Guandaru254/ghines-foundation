import React from "react";
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';
import Image from "next/image";

// Import the new shapes
import shape7 from '/public/images/f-shape7.png';
import shape3 from '/public/images/slider/shape-3.svg';
import shapeline from '/public/images/slider/img-shape2.png';
import shape9 from '/public/images/f-shape9.png';

const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const Hero = () => {
    return (
        <section className={"wpo-hero-slider"}>
            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                navigation
            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-1.jpg'})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-sub-title">
                                    <h2>Every Good Deed <span></span>
                                        <span className="text">Counts </span></h2>
                                </div>
                                <div data-swiper-parallax="500" className="slide-btns">
                                    <Link onClick={ClickHandler} href="/about" className="theme-btn">Learn More</Link>
                                    <div className="call">
                                        <div className="text">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-2.jpg'})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-sub-title">
                                    <h2>Your Donation <span></span>
                                        <span className="text">Matters </span></h2>
                                </div>
                                <div data-swiper-parallax="500" className="slide-btns">
                                    <Link onClick={ClickHandler} href="/donate" className="theme-btn">Donate Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* Shapes from the hero3 component, now integrated into the original Hero component */}
            <div className="shape-1">
                <Image src={shape7} alt="Shape" />
            </div>
            <div className="shape-2">
                <Image src={shape3} alt="Shape" />
            </div>
            <div className="shape-3">
                <Image src={shapeline} alt="Shape" />
            </div>
            <div className="shape-4">
                <Image src={shape9} alt="Shape" />
            </div>
        </section>
    );
};

export default Hero;