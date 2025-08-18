import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/actions/action';

import MobileMenu from '../MobileMenu/MobileMenu';

const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const [cartActive, setCartState] = useState(false);
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

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Add search logic here
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const handleRemoveFromCart = (id) => {
        props.removeFromCart(id);
    };

    const { carts, Logo } = props;

    const totalPrice = (items) => {
        return items.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2);
    };

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

                            {/* Logo container */}
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
                                    {/* Home Link */}
                                    <li>
                                        <Link onClick={scrollToTop} className="active" href="/">Home</Link>
                                    </li>

                                    {/* About Us Link */}
                                    <li>
                                        <Link onClick={scrollToTop} href="/about">About Us</Link>
                                    </li>

                                    {/* Our Work Link (renamed from Services) */}
                                    <li>
                                        <Link onClick={scrollToTop} href="/service">Our Work</Link>
                                    </li>

                                    {/* Gallery Link (renamed from Portfolio) */}
                                    <li>
                                        <Link onClick={scrollToTop} href="/project">Gallery</Link>
                                    </li>

                                    {/* Contact Link */}
                                    <li>
                                        <Link onClick={scrollToTop} href="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Header right icons */}
                            <div className="header-right">
                                <div className="header-search-form-wrapper">
                                    <div className="cart-search-contact">
                                        <button
                                            onClick={() => setMenuState(!menuActive)}
                                            className="search-toggle-btn"
                                            aria-label="Toggle search form"
                                        >
                                            <i className={`fi ti-search ${menuActive ? 'ti-close' : 'fi'}`}></i>
                                        </button>
                                        <div className={`header-search-form ${menuActive ? 'header-search-content-toggle' : ''}`}>
                                            <form onSubmit={handleSearchSubmit}>
                                                <div>
                                                    <input type="text" className="form-control" placeholder="Search here..." />
                                                    <button type="submit" aria-label="Search"><i className="fi flaticon-magnifying-glass"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="mini-cart">
                                    <button className="cart-toggle-btn" onClick={() => setCartState(!cartActive)} aria-label="Toggle cart">
                                        <i className="fi flaticon-bag"></i>
                                        <span className="cart-count">{carts.length}</span>
                                    </button>
                                    <div className={`mini-cart-content ${cartActive ? 'mini-cart-content-toggle' : ''}`}>
                                        <button className="mini-cart-close" onClick={() => setCartState(false)} aria-label="Close cart">
                                            <i className="ti-close"></i>
                                        </button>
                                        <div className="mini-cart-items">
                                            {carts.length > 0 ? (
                                                carts.map((item, index) => (
                                                    <div className="mini-cart-item clearfix" key={index}>
                                                        <div className="mini-cart-item-image">
                                                            <img src={item.proImg} alt={item.title} />
                                                        </div>
                                                        <div className="mini-cart-item-des">
                                                            <p>{item.title}</p>
                                                            <span className="mini-cart-item-price">
                                                                ${item.price} x {item.qty}
                                                            </span>
                                                            <span className="mini-cart-item-quantity">
                                                                <button
                                                                    onClick={() => handleRemoveFromCart(item.id)}
                                                                    className="btn btn-sm btn-danger"
                                                                    aria-label={`Remove ${item.title} from cart`}
                                                                >
                                                                    <i className="ti-close"></i>
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <p>Your cart is empty.</p>
                                            )}
                                        </div>
                                        <div className="mini-cart-action clearfix">
                                            <span className="mini-checkout-price">Subtotal: <span> ${totalPrice(carts)}</span></span>
                                            <div className="mini-btn">
                                                <Link href="/checkout" className="view-cart-btn s1">Checkout</Link>
                                                <Link href="/cart" className="view-cart-btn">View Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};

export default connect(mapStateToProps, { removeFromCart })(Header);