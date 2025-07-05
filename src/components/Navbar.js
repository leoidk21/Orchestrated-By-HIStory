import React, { useState, useEffect } from "react";
import logo from "../assets/image.png";
import "../components/Navbar.css";
import "../components/Import.css";
import "../components/Responsive.css";

function MainComponent() {
    const [click, setClick] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);

    const closeMobileMenu = () => setClick(false);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 960;
            setIsMobile(mobile);

            if (!mobile) {
                setClick(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="container">
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo">
                        <img src={logo} alt="Logo" className="logo" />
                        <h2 className="brand-name">Orchestrated By HIStory</h2>
                    </div>

                    {isMobile && (
                        <div
                            className="menu-container"
                            onClick={() => setClick(!click)}
                        >
                            <i
                                className={
                                    `fas ${click ? "fa-times rotate" : "fa-bars"}`
                                }
                            />
                        </div>
                    )}

                    <ul
                        className={`nav-menu ${isMobile ? (click ? "active" : "hidden") : ""}`}
                    >
                        <li className="nav-item">
                            <a href="#home"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#services"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Services
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#gallery"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Gallery
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#about"
                                className="nav-links about"
                                onClick={closeMobileMenu}
                            >
                                About Us
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default MainComponent;
