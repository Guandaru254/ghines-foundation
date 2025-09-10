// EventSection.jsx

import React from 'react';
import event from '../../api/event';
import Link from 'next/link';
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const EventSection = () => {
    return (
        <section className="MV-section">
            <div className="container-fluid">
                {/* Section title for the Core Pillars */}
                <div className="text-center mb-5">
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Our Core Pillars</h2>
                </div>
            </div>
            <div className="container-fluid p-0">
                <div className="row g-0">
                    {event.slice(0, 3).map((eventitem, item) => (
                        <div className="col-xl-4 col-lg-6 col-md-6 col-12" key={item}>
                            <div className="card-mv">
                                {/* The fix is here: Add a style to the wrapper div to give it a height */}
                                <div style={{ position: 'relative', height: '300px' }}>
                                    <Image src={eventitem.eimg} alt="" layout="fill" objectFit="cover" />
                                </div>
                                <div className="icon">
                                    <Link onClick={ClickHandler} href={'/event-single/[slug]'} as={`/event-single/${eventitem.slug}`}>
                                        <i>+</i>
                                        <div className="shape">
                                            <svg viewBox="0 0 98 99" fill="none">
                                                <path
                                                    d="M0 0H98V99C98 99 61.8947 91.6967 42.5526 55.9918C23.2105 20.2869 0 0 0 0Z"
                                                    fill="#F74F22"
                                                />
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                                <div className="text">
                                    <h2>
                                        <Link onClick={ClickHandler} href={'/event-single/[slug]'} as={`/event-single/${eventitem.slug}`}>
                                            {eventitem.title}
                                        </Link>
                                    </h2>
                                    <i className="flaticon-globe"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventSection;