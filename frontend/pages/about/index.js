import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import AboutS2 from '../../components/about2/about2';
import AboutS3 from '../../components/about3/about3';
import ServiceSection2 from '../../components/ServiceSection2/ServiceSection2';
import CtaSection from '../../components/CtaSection/CtaSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Layout from '../../components/Layout/Layout';

const AboutPage = () => {
    return (
        <Fragment>
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            <AboutS2 hclass={'about-section-s4 section-padding'} />
            <ServiceSection2 hclass={'service-section-s2 section-padding pt-0'} />
            <AboutS3 hclass={'about-section-s4 section-padding'} />
            <CtaSection hclass={'cta-section'} />
            <Scrollbar />
        </Fragment>
    );
};

export default AboutPage;