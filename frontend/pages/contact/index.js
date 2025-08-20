import React, { Fragment } from 'react';
import NewHeader from '../../components/NewHeader/newheader'; // Import your new header
import PageTitle from '../../components/pagetitle/PageTitle'
import Contactpage from '../../components/Contactpage/Contactpage'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/logo-2.svg'

const ContactPage = () => {
    return (
        <Fragment>
            <NewHeader /> {/* Replaced old Navbar with new header */}
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} />
            <Contactpage />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ContactPage;