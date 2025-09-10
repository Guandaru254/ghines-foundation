// Hero.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.scss';

// Import images from your public directory
import heroImage from '/public/images/hero-pets.webp';

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContentContainer}>
                <div className={styles.heroTextContent}>
                    {/* The new main heading as requested */}
                    <h1 className={styles.mainHeading}>
                        Every Action<br />
                        Big or Small<br />
                        <span className={styles.petCare}>Counts</span>
                    </h1>
                    <div className={styles.heroCtaButtons}>
                        <Link href="/about" className={styles.aboutUsBtn}>
                            Learn More About Us
                        </Link>
                    </div>
                </div>
                <div className={styles.heroImageContent}>
                    <Image
                        src={heroImage}
                        alt="Happy pets"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;