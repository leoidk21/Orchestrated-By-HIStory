import React, { useState } from "react";
import "../components/Responsive.css";
import "../components/Import.css";
import "../components/Gallery.css";
import eventImage from "../assets/beautiful-couple-having-their-wedding-beach_23-2149043942 1 (1).png";
import eventFlower from "../assets/flower.png";

function Gallery({ openModal }) {
    const totalSlides = 5;
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex(index === 0 ? totalSlides - 1 : index - 1);
    };

    const nextSlide = () => {
        setIndex(index === totalSlides - 1 ? 0 : index + 1);
    };

    return (
        <>
            <hr className="gallery-underline"></hr>
            <section className="gallery-section" id="gallery">
                <h1 className="gallery-headline">Gallery</h1>
                <p className="gallery-subheadline">
                    A collection of successful events
                </p>
                <div className="gallery-section-underline"></div>

                <div className="slider">
                    <div
                        className="grid-slider"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        {/* Slide 1 */}
                        <div className="grid">
                            <div className="gallery-grid">
                                <img
                                    src={eventImage}
                                    className="eventImage"
                                    alt="eventImage"
                                />
                                <h1 className="event-date">July 22, 2020</h1>
                                <img
                                    src={eventFlower}
                                    className="eventFlower"
                                    alt="eventFlower"
                                />
                            </div>
                            <div className="gallery-details">
                                <h2>Mrs. Gelica & Mr. Jhudmark Guillermo</h2>
                                <h4>
                                    "And above all these put on love, which
                                    binds everything together in perfect
                                    harmony.” Colossians 3:14
                                </h4>
                                <div className="details-divider"></div>
                                <p className="gallery-message">
                                    May the Lord continue to bless and prosper
                                    your marriage!
                                </p>
                                <p className="prayer-message">
                                    We pray for abundance and <br /> unending
                                    love for your family.
                                </p>

                                <button
                                    onClick={openModal}
                                    className="viewDetails-btn"
                                >
                                    <span>View Details</span>
                                </button>
                            </div>
                        </div>

                        {/* Slide 2 */}
                        <div className="grid">
                            <div className="gallery-grid">
                                <img
                                    src={eventImage}
                                    className="eventImage"
                                    alt="eventImage"
                                />
                                <h1 className="event-date">July 22, 2020</h1>
                                <img
                                    src={eventFlower}
                                    className="eventFlower"
                                    alt="eventFlower"
                                />
                            </div>
                            <div className="gallery-details">
                                <h2>Mrs. Gelica & Mr. Jhudmark Guillermo</h2>
                                <h4>
                                    "And above all these put on love, which
                                    binds everything together in perfect
                                    harmony.” Colossians 3:14
                                </h4>
                                <div className="details-divider"></div>
                                <p className="gallery-message">
                                    May the Lord continue to bless and prosper
                                    your marriage!
                                </p>
                                <p className="prayer-message">
                                    We pray for abundance and <br /> unending
                                    love for your family.
                                </p>

                                <button
                                    onClick={openModal}
                                    className="viewDetails-btn"
                                >
                                    <span>View Details</span>
                                </button>
                            </div>
                        </div>

                        {/* Slide 3 */}
                        <div className="grid">
                            <div className="gallery-grid">
                                <img
                                    src={eventImage}
                                    className="eventImage"
                                    alt="eventImage"
                                />
                                <h1 className="event-date">July 22, 2020</h1>
                                <img
                                    src={eventFlower}
                                    className="eventFlower"
                                    alt="eventFlower"
                                />
                            </div>
                            <div className="gallery-details">
                                <h2>Mrs. Gelica & Mr. Jhudmark Guillermo</h2>
                                <h4>
                                    "And above all these put on love, which
                                    binds everything together in perfect
                                    harmony.” Colossians 3:14
                                </h4>
                                <div className="details-divider"></div>
                                <p className="gallery-message">
                                    May the Lord continue to bless and prosper
                                    your marriage!
                                </p>
                                <p className="prayer-message">
                                    We pray for abundance and <br /> unending
                                    love for your family.
                                </p>

                                <button
                                    onClick={openModal}
                                    className="viewDetails-btn"
                                >
                                    <span>View Details</span>
                                </button>
                            </div>
                        </div>

                        {/* Slide 4 */}
                        <div className="grid">
                            <div className="gallery-grid">
                                <img
                                    src={eventImage}
                                    className="eventImage"
                                    alt="eventImage"
                                />
                                <h1 className="event-date">July 22, 2020</h1>
                                <img
                                    src={eventFlower}
                                    className="eventFlower"
                                    alt="eventFlower"
                                />
                            </div>
                            <div className="gallery-details">
                                <h2>Mrs. Gelica & Mr. Jhudmark Guillermo</h2>
                                <h4>
                                    "And above all these put on love, which
                                    binds everything together in perfect
                                    harmony.” Colossians 3:14
                                </h4>
                                <div className="details-divider"></div>
                                <p className="gallery-message">
                                    May the Lord continue to bless and prosper
                                    your marriage!
                                </p>
                                <p className="prayer-message">
                                    We pray for abundance and <br /> unending
                                    love for your family.
                                </p>

                                <button
                                    onClick={openModal}
                                    className="viewDetails-btn"
                                >
                                    <span>View Details</span>
                                </button>
                            </div>
                        </div>

                        {/* Slide 5 */}
                        <div className="grid">
                            <div className="gallery-grid">
                                <img
                                    src={eventImage}
                                    className="eventImage"
                                    alt="eventImage"
                                />
                                <h1 className="event-date">July 22, 2020</h1>
                                <img
                                    src={eventFlower}
                                    className="eventFlower"
                                    alt="eventFlower"
                                />
                            </div>
                            <div className="gallery-details">
                                <h2>Mrs. Gelica & Mr. Jhudmark Guillermo</h2>
                                <h4>
                                    "And above all these put on love, which
                                    binds everything together in perfect
                                    harmony.” Colossians 3:14
                                </h4>
                                <div className="details-divider"></div>
                                <p className="gallery-message">
                                    May the Lord continue to bless and prosper
                                    your marriage!
                                </p>
                                <p className="prayer-message">
                                    We pray for abundance and <br /> unending
                                    love for your family.
                                </p>

                                <button
                                    onClick={openModal}
                                    className="viewDetails-btn"
                                >
                                    <span>View Details</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="slider-btn">
                        <div className="circle-btn" onClick={prevSlide}>
                            <i className="material-icons">
                                <span>keyboard_arrow_left</span>
                            </i>
                        </div>

                        <div className="circle-btn" onClick={nextSlide}>
                            <i className="material-icons">
                                <span>keyboard_arrow_right</span>
                            </i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Gallery;
