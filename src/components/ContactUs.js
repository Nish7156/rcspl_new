import React from 'react';

const ContactUs = () => {
    return (
        <>
            <section className="contact-section v2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-content contact_form">
                            <div id="note"></div>
                            <div id="fields">
                                <form className="respond-form" id="ajax-contact-form" action="#">
                                    <h6>Contact Us</h6>

                                    <div className="input-line">
                                        <input type="text" name="name" className="check-value" />
                                        <span>Name</span>
                                    </div>

                                    <div className="input-line">
                                        <input type="text" name="email" className="check-value" />
                                        <span>Email</span>
                                    </div>
                                    <div className="input-line">
                                        <input type="text" name="phone" className="check-value" />
                                        <span>Phone</span>
                                    </div>

                                    <div className="input-line textarea">
                                        <textarea className="check-value" name="message" placeholder=""></textarea>
                                        <span>Message</span>
                                    </div>
                                    <input className="form-send btn yellow dark-hover" type="submit" value="submit" />
                                </form>
                            </div>
                        </div>

                        <div className="col-md-3 col-sidebar">
                            <div className="sidebar">
                                <div className="row isotope" style={{ position: 'relative', height: '288.825px' }}>
                                    <div className="col-md-12 col-sm-6 col-xs-12 isotope-item" style={{ position: 'absolute', left: '0px', top: '0px' }}>
                                        <div className="widget widget_contact">
                                            <h4 className="widget-title">Contact Info</h4>
                                            <div className="widget-body">
                                                <ul className="contact-info clean-list">
                                                    <li>
                                                        <span className="title">Phone:</span>
                                                        <p>+91 98220 59460 </p>
                                                    </li>
                                                    <li>
                                                        <span className="title">Email:</span>
                                                        <p><a href="mailto:email@gt3themes.com">info@rcspl.co.in </a></p>
                                                    </li>
                                                    <li>
                                                        <span className="title">Follow Us:</span>
                                                        <ul className="socials clean-list">
                                                            <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-pinterest-square"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-google-plus-square"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-behance-square"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs