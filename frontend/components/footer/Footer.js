import React, { useState } from 'react';
import Link from 'next/link';

import shape1 from '/public/images/f-shape1.svg';
import shape2 from '/public/images/f-shape-2.svg';
import shape3 from '/public/images/f-shape3.svg';
import shape4 from '/public/images/f-shape4.svg';
import Image from 'next/image';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const Footer = (props) => {
    const [email, setEmail] = useState('');

    const handleReset = () => {
        setEmail('');
    };

    const corePillars = [
        { title: 'Animal Welfare & Conservation', slug: 'animal-welfare' },
        { title: 'Social Services & Human Rights', slug: 'social-services' },
        { title: 'Youth, Sports & Culture', slug: 'youth-sports-culture' },
    ];

    return (
        <footer className="wpo-site-footer">
            <div className="footer-socialicon">
                <ul>
                    <li><i className="fab fa-facebook-f"></i> <span>Facebook</span></li>
                    <li><i className="fab fa-twitter"></i> <span>Twitter</span></li>
                    <li><i className="fab fa-instagram"></i> <span>Instagram</span></li>
                    <li><i className="fab fa-linkedin-in"></i> <span>LinkedIn</span></li>
                </ul>
            </div>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget newsletter-s2">
                                <div className="widget-title">
                                    <h3>Join Our Newsletter</h3>
                                </div>
                                <p>Stay informed about our impactful work and how your support makes a difference in South Sudan.</p>
                                <form className="form-fild">
                                    <input
                                        className="fild"
                                        type="email"
                                        placeholder="Your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <button type="submit" onClick={handleReset}>
                                        <i className="flaticon-right-arrow"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget ">
                                <div className="widget-title">
                                    <h3>Our Work</h3>
                                </div>
                                <ul>
                                    {corePillars.map((pillar, index) => (
                                        <li key={index}>
                                            <Link onClick={ClickHandler} href={`/our-work#${pillar.slug}`}>
                                                {pillar.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget ">
                                <div className="widget-title">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/">Home</Link></li>
                                    <li><Link onClick={ClickHandler} href="/about">About Us</Link></li>
                                    <li><Link onClick={ClickHandler} href="/our-work">Our Work</Link></li>
                                    <li><Link onClick={ClickHandler} href="/gallery">Gallery</Link></li>
                                    <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget locations-widget ">
                                <div className="widget-title">
                                    <h3>Contact Us</h3>
                                </div>
                                <p>Juba, South Sudan</p>
                                <ul>
                                    <li>Email: info@ghinesfoundation.org</li>
                                    <li>Phone: +211 912 345 678</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright" style={{ textAlign: 'center' }}>
                                &copy; {new Date().getFullYear()} Ghines Foundation. All rights reserved.
                                <br/>
                                Developed by <a href="https://bravetechnologies.co.ke/" target="_blank" rel="noopener noreferrer">Brave Technologies Ltd</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;