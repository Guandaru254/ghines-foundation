// components/BlogList/BlogList.jsx

import React from 'react';
import Link from 'next/link';
import BlogSidebar from '../BlogSidebar/BlogSidebar';
import blogs from '../../api/blogs';
import Image from 'next/image';

const BlogList = (props) => {
    return (
        <section className={`blog-pg-section section-padding ${props.blnewclass}`}>
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-12 ${props.blRight}`}>
                        <div className="blog-content">
                            {blogs.slice(0, 3).map((blog, bitem) => (
                                <div className={`post ${blog.blClass}`} key={bitem}>
                                    <div className="entry-media">
                                        <Image src={blog.blogSingleImg} alt='' />
                                        <span>{blog.day}<br />
                                        {blog.month}</span>
                                    </div>
                                    <div className="entry-meta">
                                        <ul>
                                            <li><i className="fi flaticon-user"></i> By <span>{blog.author}</span> </li>
                                            <li><i className="fi flaticon-clock"></i><span>3 min Read</span></li>
                                        </ul>
                                    </div>
                                    <div className="entry-details">
                                        <h3><a href="#">{blog.title2}</a></h3>
                                        <a href="#" className="read-more">READ MORE...</a>
                                    </div>
                                </div>
                            ))}
                            <div className="pagination-wrapper pagination-wrapper-left">
                                <ul className="pg-pagination">
                                    <li><a href="#" aria-label="Previous"><i className="fi ti-angle-left"></i></a></li>
                                    <li className="active"><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#" aria-label="Next"><i className="fi ti-angle-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <BlogSidebar blLeft={props.blLeft} />
                </div>
            </div>
        </section>
    );
};

export default BlogList;