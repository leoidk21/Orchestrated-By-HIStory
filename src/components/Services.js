import React, { useState } from "react";
import "../components/Responsive.css";
import "../components/Import.css";
import "../components/Services.css";
import weddingCard from "../assets/wedding-card.png";
import debutCard from "../assets/debut-card.png";
import partiesCard from "../assets/parties-card.png";
import flower from "../assets/360851387_11432686 1.png";
import intimateWedding from "../assets/INTIMATE_WEDDINGS_MODAL_Enhanced.jpg";

function Services() {
    const [modal, setModal] = useState(false);
    const [serviceModal, setServiceModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    const openServiceModal = () => {
        setModal(false); // Close the "Choose Wedding Type" modal
        setServiceModal(true); // Open the Intimate Wedding modal
    };

    const closeServiceModal = () => {
        setServiceModal(false);
    };

    return (
        <div>
            <div className="services-container" id="services">
                <div>
                    <h1 className="services-txt">Services</h1>
                    <div className="services-underline"></div>
                    <p className="services-intro">
                        Planning to tie the knot this year and want to eliminate
                        the stress <span className="sq-mark">?</span> Book as
                        your wedding coordinator
                        <span className="sq-mark">!</span>
                    </p>
                    <h4 className="inquire-txt">
                        Inquire now<span className="sq-mark">!</span>
                    </h4>
                </div>

                <div className="services-card">
                    {/* WEDDING CARD */}
                    <div
                        className="wedding-card"
                        onClick={() => {
                            if (!serviceModal) toggleModal();
                        }}
                    >
                        {modal && (
                            <div className="modal">
                                <div className="modal-content">
                                    <img
                                        className="flower"
                                        src={flower}
                                        alt="flower"
                                        style={{
                                            width: "18%",
                                            marginBottom: "0.5rem",
                                        
                                        }}
                                    />
                                    <h1>Choose Wedding Type</h1>
                                    <button
                                        className="modal-btn"
                                        onClick={openServiceModal}
                                    >
                                    <span>Intimate Wedding</span> 
                                    </button>

                                    <button className="modal-btn">
                                       <span>Grand Wedding</span>  
                                    </button>
                                    <button
                                        className="close-btn"
                                        onClick={toggleModal}
                                    >
                                        &times;
                                    </button>
                                </div>
                            </div>
                        )}

                        {serviceModal && (
                            <div className="intimate-wedding-inclusions">
                                <div className="image-wrapper">
                                    <img
                                        className="package-img"
                                        src={intimateWedding}
                                        alt="intimateWedding"
                                    />
                                    <button
                                        className="close-package"
                                        onClick={closeServiceModal}
                                    >
                                        &times;
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="rotated-arrow">
                            <i className="fa-solid fa-arrow-right rotated-icon"></i>
                        </div>
                        <img 
                            className="weddingImage"
                            src={weddingCard} 
                            alt="weddingCard" />
                        <div className="wedding-link">
                            <h1>Weddings</h1>
                            <p>Learn More</p>
                        </div>
                    </div>

                    {/* DEBUT CARD */}
                    <div className="debut-card">
                        <div className="rotated-arrow">
                            <i className="fa-solid fa-arrow-right rotated-icon"></i>
                        </div>
                        <img
                            className="debutImage" 
                            src={debutCard} 
                            alt="debutCard" />
                        <div className="debut-link">
                            <h1>Debut</h1>
                            <p>Learn More</p>
                        </div>
                    </div>

                    {/* PARTIES CARD */}
                    <div className="parties-card">
                        <div className="rotated-arrow">
                            <i className="fa-solid fa-arrow-right rotated-icon"></i>
                        </div>
                        <img 
                            className="partiesImage"
                            src={partiesCard} 
                            alt="partiesCard" />
                        <div className="parties-link">
                            <h1>Parties</h1>
                            <p>Learn More</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
