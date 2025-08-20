import React, { Fragment } from 'react';
import NewHeader from '../../components/NewHeader'; // Corrected path assuming newheader.js is NewHeader.js
import PageTitle from '../../components/pagetitle/PageTitle';
import AboutS2 from '../../components/about2/about2';
import TeamSection from '../../components/TeamSection/TeamSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const AboutPage = () => {
    return (
        <Fragment>
            <NewHeader />
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            <AboutS2 hclass={'about-section-s4 section-padding'} />
            <TeamSection hclass={'volunteer-section section-padding'} />
            <CtaSection hclass={'cta-section'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default AboutPage;