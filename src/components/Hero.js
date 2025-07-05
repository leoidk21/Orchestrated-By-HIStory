import React from "react";
import "../components/Hero.css";
import "../components/Import.css";
import "../components/Responsive.css";
import quotationImage from "../assets/quotation.png";
import quotationImage2 from "../assets/quotation-2.png";
    
function Hero() {
    return (
        <>
            <div className="hero-container" id="home">
                <div className="hero-section">
                    <div className="hero-content">
                        <h1 className="hero-txt">
                            Celebrate Your Big Day With Us <span className="exclamation">!</span>
                        </h1>
                        <div className="text-overlay"></div>
                        <p className="hero-text">Event Planner</p>
                        <button className="services-btn" ><span>View Services</span></button>
                    </div>
                </div>

                 <header className="header">
                    <div className="top-overline"></div>
                    <div className="header-content">
                        <img src={quotationImage} alt="quotation" />
                        <p className="header-text">
                            He has made everything beautiful in its time.<br/>
                            He has also set eternity in the human heart
                            <span className="semicolon">;</span> yet no one can
                            <br /> fathom what God has done from beginning to
                            end.
                        </p>
                        <img src={quotationImage2} alt="quotation" />
                        <p className="bible-verse">
                            Ecclesiastes <span className="verse">3:11</span>
                        </p>
                    </div>
                    <div className="bottom-overline"></div>
                </header>

                <section className="quote-section">
                    <div className="quote-image">
                        <p className="section-text">
                            Turning events into unforgettable
                            symphonies, orchestrated by passion
                            guided by divine inspiration.
                        </p>
                        <span className="bottom-underline">ㅤㅤㅤㅤㅤㅤㅤ</span>
                    </div>
                   
                </section>
            </div>
        </>
    );
}

export default Hero;
