import React from "react";

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h3 className="about__title">Programming</h3>
                <span className="about__subtitle">5+ Years</span>
            </div>

            <div className="about__box">
            <i className="bx bx-briefcase about__icon"></i>
                <h3 className="about__title">Experience in Industry</h3>
                <span className="about__subtitle">2+ Years</span>
            </div>

            <div className="about__box">
            <i className="bx bx-support about__icon"></i>
                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Remote</span>
            </div>
        </div>   
    )
}

export default Info