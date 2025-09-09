import React, { Fragment } from 'react';
import NewHeader from '../../components/NewHeader/newheader.js'; // Corrected path assuming newheader.js is NewHeader.js
import PageTitle from '../../components/pagetitle/PageTitle';
import TeamSection from '../../components/TeamSection/TeamSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const AboutPage = () => {
    return (
        <Fragment>
            <NewHeader />
            <PageTitle pageTitle={'The Ghines Foundation Board'} pagesub={'About'} />
            <TeamSection hclass={'volunteer-section section-padding'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default AboutPage;