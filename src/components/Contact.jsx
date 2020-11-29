import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Contact extends Component {
    render() {
        return (
            <div>
               <div>
                    {/*================Home Banner Area =================*/}
                    <section className="banner_area">
                        <div className="box_1620">
                        <div className="banner_inner d-flex align-items-center">
                            <div className="container">
                            <div className="banner_content text-center">
                                <h2>Contact Me</h2>
                                <div className="page_link">
                                <NavLink to='/'>Home</NavLink>
                                <NavLink to='/Contact'>About</NavLink>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    {/*================End Home Banner Area =================*/}
                    {/*================Contact Area =================*/}
                    <section className="contact_area p_120">
                        <div className="container">
                        <div className="mapouter">
                            <div className="gmap_canvas">
                            <iframe title="map" width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=131%2C%20Sher%20Shah%20Suri%20Road%2C%20Mohammadpur+(Nabil%20Newaz)&ie=UTF8&t=&z=14&iwloc=B&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
                            </div>
                            <style dangerouslySetInnerHTML={{__html: "\n.mapouter{\nposition:relative;\ntext-align:right;\nheight:auto;\nwidth:auto;\nmargin-bottom: 80px;\n}\n.gmap_canvas {\noverflow:hidden;\nbackground:none!important;\nheight:auto;\nwidth:auto;\n}\niframe {\ndisplay:inline-block;\nwidth:100%;\nheight:77vh;\npadding:0px;\noverflow: hidden;\nborder-radius: 13px;\n}\n" }} />
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                            <div className="contact_info">
                                <div className="info_item">
                                <i className="lnr lnr-home" />
                                <h6>Dhaka, Bangladesh</h6>
                                <p>131, Sher Shah Suri Road, Mohammadpur</p>
                                </div>
                                <div className="info_item">
                                <i className="lnr lnr-phone-handset" />
                                <h6><a href="tel:+8801714940700">+8801714-940700</a></h6>
                                <p>Mon to Fri 9 AM to 6 PM</p>
                                </div>
                                <div className="info_item">
                                <i className="lnr lnr-envelope" />
                                <h6><a href="mailto:contact@nabilnewaz.com">contact@nabilnewaz.com</a></h6>
                                <p>Send me your query anytime!</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-9">
                            <style dangerouslySetInnerHTML={{__html: "\n.jsmessage_css {\nmargin: auto;\ntext-align: center;\ncolor: none;\nfont-size: 85%;\n}\n" }} />
                            <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate" data-netlify="true">
                                <div className="col-md-6">
                                <div className="form-group jsmessage_css">
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" />
                                </div>
                                <div className="form-group jsmessage_css">
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter email address" />
                                </div>
                                <div className="form-group jsmessage_css">
                                    <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject" />
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group jsmessage_css">
                                    <textarea className="form-control" name="message" id="message" rows={1} placeholder="Enter Message" defaultValue={""} />
                                </div>
                                </div>
                                <div className="col-md-12 text-right">
                                <button type="submit" value="submit" className="btn submit_btn">Send Message</button>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </section>
                    {/*================Contact Area =================*/}
                    </div>

            </div>
        );
    }
}

export default Contact;