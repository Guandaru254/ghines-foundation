import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogList from '../../components/BlogList/BlogList'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Layout from '../../components/Layout/Layout';

import logo from '/public/images/logo-2.svg';

const BlogPageFullwidth = () => {
    return (
        <Fragment>
            <PageTitle pageTitle={'News & Updates'} pagesub={'Blog'}/> 
            <BlogList blLeft={'d-none'} blRight={'col-lg-10 offset-lg-1'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogPageFullwidth;

