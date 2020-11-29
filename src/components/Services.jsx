import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Services extends Component {
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
                            <h2>Services</h2>
                            <div className="page_link">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/services'>Services</NavLink>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/*================End Home Banner Area =================*/}
                {/*================Feature Area =================*/}
                <section className="feature_area white_feature p_120">
                    <div className="container">
                    <div className="main_title">
                        <h2>offerings to my clients</h2>
                        <p>If you are looking for mobile phone on the web, you may be very confused at the difference in features. You must choose it according to your needs.</p>
                    </div>
                    <div className="feature_inner row">
                        <div className="col-lg-4 col-md-6">
                        <div className="feature_item">
                            <i className="flaticon-computer" />
                            <h4>Graphics Design</h4>
                            <p>If you are looking for designs of logos, visiting card, PowerPoint, leaflet etc then I am waiting for you to provide service.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                        <div className="feature_item">
                            <i className="flaticon-web-maintenance" />
                            <h4>UI/UX Design</h4>
                            <p>If you are looking for mobile application &amp; website user interface designs then I am waiting for you to provide service.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                        <div className="feature_item">
                            <i className="flaticon-data" />
                            <h4>Web Development</h4>
                            <p>If you are want to build a personal portfolio or app showcase website then I am waiting for you to provide service.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                        <div className="feature_item">
                            <i className="flaticon-online-video" />
                            <h4>Video Editing</h4>
                            <p>If you are looking for a video editor for your youtube channel or other reason then I am waiting for you to provide service.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                        <div className="feature_item">
                            <i className="flaticon-animation" />
                            <h4>Motion Graphics</h4>
                            <p>If you are want to make an animation video for your youtube channel or app advertisement then I am waiting for you to provide service.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                        <div className="feature_item">
                            <i className="flaticon-desktop" />
                            <h4>Android Development</h4>
                            <p>If you are looking for a reverse engineer to develop or mod your app or mobile OS then I am waiting for you to provide service.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/*================End Feature Area =================*/}
            </div>
         </div>
        );
    }
}

export default Services;