import React from 'react';
import Image from 'next/image';

// We'll choose one impactful image for the intro, or remove it entirely if preferred for minimal design.
// For now, let's keep About1 as a representative image.
import About1 from '/public/images/about/about-3.jpg';

// Removed: About2, About3, About4, About5, Aut1, Aut2, Aut3 (author images)
// Removed: Shape1, Shape2, Shape3, Shape4, Shape5, Shape6, Shape7, Shape8 (decorative shapes and icons)

const AboutS2 = (props) => {
    // Removed: activeTab state and handleTabClick function as tabs are being removed.

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="about-image">
                            {/* Simplified image section to one main image */}
                            <Image src={About1} alt="Ghines Foundation Introduction Image" width={500} height={350} style={{ borderRadius: '15px' }} />
                            {/* Removed: image2, shape-love, since-text, countup, and associated shapes/divs */}
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="right-content">
                            {/* Updated title to reflect the foundation's name */}
                            <h2>Welcome to Ghines Foundation</h2>
                            {/* Incorporating Vision, Mission, and Tagline */}
                            <h5>
                                We envision a thriving South Sudan where people, animals, and culture coexist in harmony and dignity.
                                Our mission is to drive transformative change by advancing animal welfare, enabling trauma recovery and justice,
                                and empowering young people through culture, sports, and training.
                            </h5>
                            <p>
                                We are committed to creating pathways for dignity, resilience, and opportunity, built from within communities and led by those most affected.
                                Our work is guided by the Sustainable Development Goals (SDGs 3, 4, 8, 15, and 16).
                            </p>
                            <p className="tagline">
                                Every action, big or small, counts!
                            </p>

                            {/* Removed: about-tab (Our Mission, Our Vision, Excellence tabs and their content) */}
                            {/* Removed: author-wrap and contact sections */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Removed: all decorative shapes (shape-1, shape-2, shape-3) for a cleaner look */}
        </section>
    );
}

export default AboutS2;