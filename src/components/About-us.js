import React from "react";
import "../components/Responsive.css";
import "../components/Import.css";
import "../components/About-us.css";
import obhLogo from "../assets/OBHFullLogo.png";
import coordinators from "../assets/coordinators.png";

function AboutUs() {
    return (
        <div>
            <div className="about-section" id="about">
                <div className="about-header">
                    {/* <div className="ellipse-container">
                        <div className="ellipse"></div>
                        <div className="ellipse"></div>
                        <div className="ellipse"></div>
                        <div className="ellipse"></div>
                    </div> */}
                    <div className="aboutustext">
                        <h1 className="aboutusheader">
                            <span className="A">A</span>bout Us
                        </h1>
                    </div>
                </div>

                <div className="obh-container">
                    <div className="logo-container">
                        <img src={obhLogo} className="obhLogo" alt="obhLogo" />
                    </div>
                    
                    <div className="obh-divider"></div>

                    <div className="intro-container">
                        <h1 className="obh-intro">
                            We always choose to celebrate and commemorate your
                            special day because we believe that it was He who
                            orchestrated this story.
                        </h1>
                    </div>
                </div>

                <div className="coordinators">
                    <h1 className="coorHeaderText">Meet Our Team</h1>
                    <div className="coordinators-grid">
                        <div className="overlay-container">
                            <img
                                src={coordinators}
                                className="coordinators-img"
                                alt="coordinators"
                            />
                            <div className="overlay">
                                <h1 className="position">John Doe</h1>
                                <p className="name">Coordinator</p>
                            </div>
                        </div>

                        <div className="overlay-container">
                            <img
                                src={coordinators}
                                className="coordinators-img"
                                alt="coordinators"
                            />
                            <div className="overlay">
                                <h1 className="position">John Doe</h1>
                                <p className="name">Coordinator</p>
                            </div>
                        </div>

                        <div className="overlay-container">
                            <img
                                src={coordinators}
                                className="coordinators-img"
                                alt="coordinators"
                            />
                            <div className="overlay">
                                <h1 className="position">John Doe</h1>
                                <p className="name">Coordinator</p>
                            </div>
                        </div>

                        <div className="overlay-container">
                            <img
                                src={coordinators}
                                className="coordinators-img"
                                alt="coordinators"
                            />
                            <div className="overlay">
                                <h1 className="position">John Doe</h1>
                                <p className="name">Coordinator</p>
                            </div>
                        </div>

                        <div className="overlay-container">
                            <img
                                src={coordinators}
                                className="coordinators-img"
                                alt="coordinators"
                            />
                            <div className="overlay">
                                <h1 className="position">John Doe</h1>
                                <p className="name">Coordinator</p>
                            </div>
                        </div>

                        <div className="overlay-container">
                            <img
                                src={coordinators}
                                className="coordinators-img"
                                alt="coordinators"
                            />
                            <div className="overlay">
                                <h1 className="position">John Doe</h1>
                                <p className="name">Coordinator</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
