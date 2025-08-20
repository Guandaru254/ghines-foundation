import React, { useState } from 'react';
import Link from 'next/link';

const NewHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="new-header">
            <div className="logo-container">
                <Link href="/">
                    <img src="/images/logo-2.svg" alt="Your Logo" />
                </Link>
            </div>
            
            {/* Mobile menu toggle button */}
            <button className="mobile-menu-toggle" onClick={toggleMenu}>
                <i className="fa fa-bars"></i>
            </button>

            {/* Main desktop navigation */}
            <nav className={`new-nav ${isMenuOpen ? 'mobile-menu-active' : ''}`}>
                <div className="logo-mobile">
                    <img src="/images/logo-2.svg" alt="Your Logo" />
                </div>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/services">Our Work</Link></li>
                    <li><Link href="/gallery">Gallery</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
            
            <div className="cta-button">
                <Link href="" className="donate-btn">
                    Make A Donation
                </Link>
            </div>
        </header>
    );
};

export default NewHeader;