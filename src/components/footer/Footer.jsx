import React from 'react'
import "./footer.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Gabriela Villeda</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                    <li>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://instagram.com/ga_villeda?igshid=ZDdkNTZiNTM=" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/gabriela-villeda-438313266" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://github.com/Ga-AV" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-github"></i>
                    </a>
                </div>
                <span className="footer__copy">&#169; All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer;