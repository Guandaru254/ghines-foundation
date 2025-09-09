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
                            <span>Introduction</span>
                            <h6 className="board-intro mt-4  "   >Our Board of Directors oversees the legal and strategic direction of the Ghines Foundation
                                . They are responsible for approving the annual goals, strategy, and operating budgets. 
                                The Board ensures the Foundation’s work remains aligned with its mission and values, 
                                while maintaining transparency and accountability.
                                The Chair and Directors collaborate across thematic areas: animal welfare, 
                                youth development, cultural preservation, and social healing to ensure 
                                coherence and long-term vision across all programs.
                           </h6>
                            
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