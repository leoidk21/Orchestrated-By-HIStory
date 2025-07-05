import React, { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import AboutUs from "./components/About-us";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./components/App.css";
import "./components/Import.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const servicesRef = useRef(null);

    const scrollToServices = () => {
        const offset = 100;
        const top = servicesRef.current.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth"});
    };

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Router>
                <Navbar />
                <Hero  scrollToServices={scrollToServices} />
                <div ref={servicesRef} id="services">
                    <Services />    
                </div>
                <Gallery openModal={() => setIsOpen(true)} />
                <AboutUs />
                <Contact />
                <Footer />

                {isOpen && (
                    <div className="detailsContent">
                        <div className="detailsOverlay">
                            <button
                                className="close"
                                onClick={() => setIsOpen(false)}
                            >
                                &times;
                            </button>
                            <h2 className="detailsText">Event Details</h2>
                            <p className="details">
                                <span className="boldText">Venue:</span>{" "}
                                Amelia's Garden Events Place
                            </p>
                            <p className="details">
                                <span className="boldText">
                                    Photo and Video:
                                </span>{" "}
                                Denbote Photo & Films
                            </p>
                            <p className="details">
                                <span className="boldText">
                                    Catering and design:
                                </span>{" "}
                                Kyla and Catering Services
                            </p>
                            <p className="details">
                                <span className="boldText">Food Booths:</span>{" "}
                                Pinoy Sorbetes & House of Drinks
                            </p>
                            <p className="details">
                                <span className="boldText">Photobooth:</span>{" "}
                                Grab N' Tag Photobooth
                            </p>
                            <p className="details">
                                <span className="boldText">HMUA:</span> Beauty
                                Pro by Jessie
                            </p>
                            <p className="details">
                                <span className="boldText">Host:</span> Dan
                                Sancho - Events and Voiceovers
                            </p>
                        </div>
                    </div>
                )}
                <Routes>
                    <Route path="/" exact />
                </Routes>
            </Router>
        </>
    );
}

export default App;
