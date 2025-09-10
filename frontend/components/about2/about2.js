// AboutS2.jsx

import React from 'react';
import Image from 'next/image';

// We'll choose one impactful image for the intro, or remove it entirely if preferred for minimal design.
// For now, let's keep About1 as a representative image.
import About1 from '/public/images/logo-2.svg';

const AboutS2 = (props) => {
    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="about-image">
                            {/* THIS IS THE ONLY CHANGE YOU NEED */}
                            <Image
                                src={About1}
                                alt="Ghines Foundation Introduction Image"
                                width={500}
                                height={350}
                                style={{ borderRadius: '15px' }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="right-content">
                            {/* Updated title to reflect the foundation's name */}
                            <h2>Ghines Foundation Overview</h2>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutS2;