// NewHeader.jsx
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './newheader.module.scss';

const NewHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.newHeader}>
            <div className={styles.logoContainer}>
                <Link href="/">
                    <img src="/images/logo-2.svg" alt="Your Logo" />
                </Link>
            </div>
            
            <button className={styles.mobileMenuToggle} onClick={toggleMenu}>
                <i className="fa fa-bars"></i>
            </button>

            <nav className={`${styles.newNav} ${isMenuOpen ? styles.mobileMenuActive : ''}`}>
                <div className={styles.logoMobile}>
                    <img src="/images/logo.svg" alt="Your Logo" />
                    <button className={styles.mobileMenuClose} onClick={closeMenu}>
                        <i className="fa fa-times"></i>
                    </button>
                </div>
                <ul>
                    <li><Link href="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link href="/about" onClick={closeMenu}>Who We Are</Link></li>
                    <li><Link href="/services" onClick={closeMenu}>Our Work</Link></li>
                     <li><Link href="/board" onClick={closeMenu}>Board of Directors</Link></li>
                     <li><Link href="/gallery" onClick={closeMenu}>Resources</Link></li>
                    <li><Link href="/gallery" onClick={closeMenu}>Gallery</Link></li>
                    <li><Link href="/blog" onClick={closeMenu}>News & Updates</Link></li>
                    <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
                </ul>
            </nav>
            
            <div className={styles.ctaButton}>
                <Link href="" className={styles.donateBtn}>
                    Make A Donation
                </Link>
            </div>
        </header>
    );
};

export default NewHeader;