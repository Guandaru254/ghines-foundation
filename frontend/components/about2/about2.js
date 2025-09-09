import React from 'react';
import Image from 'next/image';

// We'll choose one impactful image for the intro, or remove it entirely if preferred for minimal design.
// For now, let's keep About1 as a representative image.
import About1 from '/public/images/logo-2.svg';

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
                            <p>
                           The Ghines Foundation is a nonprofit organisation based in South Sudan, dedicated to 
                           transforming the country's approach to healing, growth, and defining its future.
                           Our vision is shaped by the legacy of the late Mr. Ghines, a respected conservationist
                           who championed people, animals, sports and culture as interconnected pillars of wellbeing. 
                            </p>
                            <p>
                               The dignity and well-being of South Sudan’s people, animals, and ecosystems are shaped by
                            interlinked crises—from the scars of conflict and cultural erosion to biodiversity loss and 
                            youth disempowerment. These challenges are not isolated; they reflect broader global concerns, 
                            which are anchored in the Sustainable Development Goals (SDGs) and the Paris Climate Agreement.
                            </p>
                             <p>
                               At the Ghines Foundation, we recognise that the path to a peaceful, just, and sustainable 
                               future must address these intersections. We focus on issues with transformative potential, 
                               identify emerging risks, and champion bold, community-led solutions that restore harmony 
                               between people, culture, and nature.
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