import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div>
                    {/*================Footer Area =================*/}
                    <footer className="footer_area p_120">
                        <div className="container">
                        <div className="row footer_inner">
                            <div className="col-lg-5 col-sm-6">
                            <aside className="f_widget ab_widget">
                                <div className="f_title">
                                <h3>Motivation</h3>
                                </div>
                                <p>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills.</p>
                            </aside>
                            </div>
                            <div className="col-lg-5 col-sm-6">
                            <aside className="f_widget news_widget">
                                <div className="f_title">
                                <h3>Newsletter</h3>
                                </div>
                                <p>Stay updated with my latest trends</p>
                                <div id="mc_embed_signup">
                                <form target="_blank" action="https://nabilnewaz.us18.list-manage.com/subscribe/post?u=67ebe1879a901f6b2fd4e9dd8&id=686a24de6a" method="get" className="subscribe_form relative">
                                    <div className="input-group d-flex flex-row">
                                    <input name="EMAIL" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address '" required type="email" />
                                    <button className="btn sub-btn"><span className="lnr lnr-arrow-right" /></button>		
                                    </div>				
                                    <div className="mt-10 info" />
                                </form>
                                </div>
                            </aside>
                            </div>
                            <div className="col-lg-2">
                            <aside className="f_widget social_widget">
                                <div className="f_title">
                                <h3>Follow Me</h3>
                                </div>
                                <p>Let us be social</p>
                                <ul className="list">
                                <li><a href="https://www.facebook.com/nabil.newaz.5/" target="_blank" rel="noreferrer"><i className="fa fa-facebook" /></a></li>
                                <li><a href="https://www.twitter.com/Nabil_Newaz/" target="_blank" rel="noreferrer"><i className="fa fa-twitter" /></a></li>
                                <li><a href="https://www.instagram.com/nabil_newaz/" target="_blank" rel="noreferrer"><i className="fa fa-instagram" /></a></li>
                                <li><a href="https://wa.me/8801714940700" target="_blank" rel="noreferrer"><i className="fa fa-whatsapp" /></a></li>
                                </ul>
                            </aside>
                            </div>
                        </div>
                        </div>
                    </footer>
                    {/* Copyright Message */}
                    <br /><aside className="f_widget ab_widget">
                        <center><p>© Nabil Newaz. All Rights Reserved</p></center>
                    </aside>
                    {/*================End Footer Area =================*/}
                </div>
            </div>
        );
    }
}

export default Footer;