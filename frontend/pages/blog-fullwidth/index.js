import React, {Fragment} from 'react';
import NewHeader from '../../components/NewHeader/newheader.js'; 
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogList from '../../components/BlogList/BlogList'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

import logo from '/public/images/logo-2.svg';

const BlogPageFullwidth = () => {
    return (
        <Fragment>
            <NewHeader/>
            <PageTitle pageTitle={'News & Updates'} pagesub={'Blog'}/> 
            <BlogList blLeft={'d-none'} blRight={'col-lg-10 offset-lg-1'}/>
            <Footer />
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogPageFullwidth;

