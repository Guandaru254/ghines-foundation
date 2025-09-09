import React from "react";
import Link from "next/link";
import Teams from "../../api/team";
import Image from "next/image";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSection = (props) => {

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="section-title text-center">
                            <span>Meet Our</span>
                            <h2>Board of Directors <span></span></h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        Teams.slice(0, 4).map((team, titem) => (
                            <div className="col-lg-3 col-md-6 col-12" key={titem}>
                                <div className="vol-card">
                                    <div className="image">
                                        <Image src={team.timg} alt="" />
                                        {/* Social media icons visible by default */}
                                        <ul className="social-icons-default">
                                            <li><Link onClick={ClickHandler} href="#"><i className="flaticon-facebook-app-symbol"></i></Link></li>
                                            <li><Link onClick={ClickHandler} href="#"><i className="flaticon-linkedin"></i></Link></li>
                                            <li><Link onClick={ClickHandler} href="#"><i className="flaticon-twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="text">
                                        <h3><Link onClick={ClickHandler} href={'/volunteer-single/[slug]'} as={`/volunteer-single/${team.slug}`}>{team.title}</Link></h3>
                                        <span>{team.subtitle}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
              
            </div>
        </section>
    )
}
export default TeamSection;