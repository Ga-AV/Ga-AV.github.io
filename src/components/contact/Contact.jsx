import React from "react";
import "./contact.css"

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <div className='contact__center'>
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>
            </div>
            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Contact Info</h3>
                    <div className="contact__info">

                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3> 
                            <span className="contact__card-data">ga.alburez.villeda@gmail.com</span>   
                            <a href="mailto:ga.alburez.villeda@gmail.com" className="contact__button">Write me {" "}
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i> </a>               
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>
                            <h3 className="contact__card-title">Whatsapp</h3> 
                            <span className="contact__card-data">+502 49568186</span>   
                            <a href="https://api.whatsapp.com/send?phone=50249568186&text=Hello!" className="contact__button">Write me {" "}
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i> </a>               
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-telegram contact__card-icon"></i>
                            <h3 className="contact__card-title">Telegram</h3> 
                            <span className="contact__card-data">@Gaby_AV2</span>   
                            <a href="https://t.me/Gaby_AV2" className="contact__button">Write me {" "}
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i> </a>               
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;