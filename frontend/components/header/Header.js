import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/actions/action';

import MobileMenu from '../MobileMenu/MobileMenu';

const Header = (props) => {
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    // Note: Removed unused functions for search and cart.

    const { Logo } = props;

    return (
        <header id="header" className={`wpo-site-header ${isSticky ? 'sticky-on' : ''}`}>
            <div className="navigation-outer">
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="header-main-flex">
                            {/* Mobile menu toggle button */}
                            <div className="d-lg-none dl-block">
                                <MobileMenu />
                            </div>

                            {/* Logo container and Nav links moved here to be on the left */}
                            <div className="navbar-header-and-nav-links">
                                {/* Logo */}
                                <div className="navbar-header">
                                    <Link onClick={scrollToTop} className="navbar-brand" href="/">
                                        <Image src={Logo} alt="Ghines Foundation Logo" width={100} height={40} />
                                    </Link>
                                </div>

                                {/* Main navigation links */}
                                <div id="navbar" className="collapse navbar-collapse navigation-holder d-none d-lg-block">
                                    <button className="menu-close" aria-label="Close menu">
                                        <i className="ti-close"></i>
                                    </button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li>
                                            <Link onClick={scrollToTop} className="active" href="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link onClick={scrollToTop} href="/about">About Us</Link>
                                        </li>
                                        <li>
                                            <Link onClick={scrollToTop} href="/service">Our Work</Link>
                                        </li>
                                        <li>
                                            <Link onClick={scrollToTop} href="/project">Gallery</Link>
                                        </li>
                                        {/* Removed Blog and Shop links as per new design */}
                                        {/* <li>
                                            <Link onClick={scrollToTop} href="/shop">Shop</Link>
                                        </li>
                                        <li>
                                            <Link onClick={scrollToTop} href="/blog">Blog</Link>
                                        </li> */}
                                        <li>
                                            <Link onClick={scrollToTop} href="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Donate Button moved to the far right */}
                            <div className="header-right ms-auto">
                                <div className="close-form">
                                    <Link onClick={scrollToTop} className="theme-btn" href="/donate">Donate now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

// No changes needed to mapStateToProps or the export, as the logic for these icons is now removed.
// Just to be safe, we will leave the Redux connections as they are, but the component will no longer use them.
const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};

export default connect(mapStateToProps, { removeFromCart })(Header);