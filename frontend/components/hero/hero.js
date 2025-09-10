import React from "react";
import Link from 'next/link';
import Image from "next/image";
import styles from './Hero.module.scss';

// Import images from your public directory
import heroImage from '/public/images/hero-pets.webp'; 
import mobileHeroImage from '/public/images/hero-pets.webp'; // Assuming you have a mobile version

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContentContainer}>
                <div className={styles.heroTextContent}>
                    <div className={styles.heroSubTitle}>
                    </div>
                    <h1 className={styles.mainHeading}>
                        Every Action <br />
                        Big or Small<br />
                        <span className={styles.petCare}>Counts</span>
                    </h1>
                    <div className={styles.heroCtaButtons}>
                        <Link href="/about" className={styles.aboutUsBtn}>
                            About Us
                        </Link>
                    </div>
                </div>
                <div className={styles.heroImageContent}>
                    {/* The image component that will be styled in CSS */}
                    <Image 
                        src={heroImage} 
                        alt="Happy pets" 
                        layout="fill" 
                        objectFit="cover"
                    />
                </div>
            </div>
            
            {/* The decorative shapes are now removed from the component */}
        </section>
    );
};

export default Hero;