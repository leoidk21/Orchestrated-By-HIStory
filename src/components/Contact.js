import React from "react";
import "../components/Contact.css";
import "../components/Responsive.css";
import "../components/Import.css";

export default function Contact() {
    return (
        <div>
            <div className="contact-section">
                <hr className="contact-divider"></hr>

                <div className="contact-content">
                    <div className="contact-form">
                        <form className="form">
                            <h1 className="contact-text">Contact Us</h1>

                            <input type="text" placeholder="Name" required />
                            <input type="email" placeholder="Email" required />
                            <input 
                                type="tel"
                                pattern="[0-9]*"
                                inputMode="numeric"
                                maxLength="11" 
                                placeholder="Phone" 
                                onChange={(e) => {
                                    const onlyNums = e.target.value.replace(/\D/g, '');
                                    e.target.value = onlyNums;
                                }}
                                required
                                />
                            <textarea placeholder="Enter your message..." />

                            <button type="submit" className="button">
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="contact-links">
                        <div className="link">
                            <h1 className="link-header">Connect With Us</h1>
                            <div className="contact-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <p className="location">
                                    Rodriguez, Philippines, 1860
                                </p>
                            </div>

                            <div className="contact-item">
                                <i className="fas fa-phone"></i>
                                <p className="contact">0905 518 3545</p>
                            </div>

                            <div className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <p className="email">
                                    orchestratedbyhistory2021@gmail.com
                                </p>
                            </div>

                            <div className="contact-item">
                                <i className="fab fa-facebook"></i>
                                <p className="facebook">
                                    Orchestrated By HIStory
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
