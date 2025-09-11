import React, { Fragment } from 'react';
import Link from "next/link";
import Projects from "../../api/projects";
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-2.svg'
import Image from 'next/image';

const ProjectPage = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <PageTitle pageTitle={'Gallery'} />
            <section className="project-page section-padding">
                <div className="container">
                    <div className="project-wrap">
                        {Projects.slice(0, 6).map((project, pitem) => (
                            <div className="project-grid" key={pitem}>
                                <Image src={project.pimg1} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Scrollbar />
        </Fragment>
    )
};
export default ProjectPage;
