import React from "react";
import { Link } from "react-router-dom"

export default function MoreAboutUs() {
    return (
        <div className="about-home-container">
            <h4>More About Us</h4>
            <h2>We Excel in Understanding Your Needs.</h2>
            <p>
                Mwaca Graphix is Malindi’s go-to graphic design and printing company, offering creative solutions to enhance your brand. From logo design and posters to banners, brochures, and digital printing like flyers and business cards, we provide top-quality services tailored to your needs. Let us help your business stand out with professional designs that deliver results.
            </p>
            <div className="btn">
                <button className="moreabout-btn">
                 <Link to="/about" className={('/about')} >Read more</Link>
                </button>
            </div>
            <div className="more-about-img">
                {/* Added alt attribute with meaningful text */}
                <img className="more-image" src="more.png" alt="More about Mwaca Graphix" />
                <div className="more-about-highlight">
                    <div className="more-about-header">
                        <h1>We Take Pride in Our Clients' Satisfaction</h1>
                        <div className="up-arrow-2">
                            {/* Added alt attribute with meaningful text */}
                            <img src="badge.png" alt="Badge icon" width="60px" />
                        </div>
                    </div>
                    <p>
                        <i>Our clients are thrilled with our work, and we take pride in exceeding their expectations every step of the way.</i>
                    </p>
                </div>
            </div>
        </div>
    );
}
