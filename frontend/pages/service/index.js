import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import BecomeSection from '../../components/BecomeSection/BecomeSection';
import ServiceSection3 from '../../components/ServiceSection3/ServiceSection3';
import ProjectSectionS2 from '../../components/ProjectSectionS2/ProjectSectionS2';
import InstagamSectionS2 from '../../components/InstagamSectionS2/InstagamSectionS2';
import Testimonial2 from '../../components/Testimonial2/Testimonial2';
import CtaSectionS2 from '../../components/CtaSectionS2/CtaSectionS2';
import PartnerSectionS2 from '../../components/PartnerSectionS2/PartnerSectionS2';
import BlogSectionS2 from '../../components/BlogSectionS2/BlogSectionS2';
import CtaSectionS3 from '../../components/CtaSectionS3/CtaSectionS3';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-2.svg'


const ServicePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Our Work'} />
            <ServiceSection />
            <BecomeSection hclass={"become_volunteer"} />
            <ProjectSectionS2 hclass={'project-section-s2 section-padding'} />
            <Testimonial2 tClass={'testimonial-section-s2 section-padding'} />
            <CtaSectionS2 />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ServicePage;




