import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

class Services extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    {/*<!-- Required meta tags -->*/}
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link rel="icon" href="img/favicon.png" type="image/png" />
                    <title>Services | Nabil Newaz</title>
                    <meta name="title" content="Services" />
                    <meta name="description" content="Take A Look At The Services That I Offer To My Clients And Choose The One You Need." />

                    {/*<!-- Open Graph / Facebook -->*/}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://nabilnewaz.com/services" />
                    <meta property="og:title" content="Services" />
                    <meta property="og:description" content="Take A Look At The Services That I Offer To My Clients And Choose The One You Need." />
                    <meta property="og:image" content="https://raw.githubusercontent.com/NabilNewaz/NabilNewazPortfolio/master/img/metaimg.png" />
                    <meta property="og:image:width" content="900" />
                    <meta property="og:image:height" content="471" />
                    <meta property="fb:app_id" content="3095171203923902"/>

                    {/*<!-- Twitter -->*/}
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://nabilnewaz.com/services" />
                    <meta property="twitter:title" content="Services" />
                    <meta property="twitter:description" content="Take A Look At The Services That I Offer To My Clients And Choose The One You Need." />
                    <meta property="twitter:image" content="https://raw.githubusercontent.com/NabilNewaz/NabilNewazPortfolio/master/img/metaimg.png" />

                    <script src="js/jquery-3.3.1.min.js"></script>
                    <script src="js/popper.js"></script>
                    <script src="js/bootstrap.min.js"></script>
                    <script src="js/stellar.js"></script>
                    <script src="vendors/lightbox/simpleLightbox.min.js"></script>
                    <script src="vendors/nice-select/js/jquery.nice-select.min.js"></script>
                    <script src="vendors/isotope/imagesloaded.pkgd.min.js"></script>
                    <script src="vendors/isotope/isotope.pkgd.min.js"></script>
                    <script src="vendors/owl-carousel/owl.carousel.min.js"></script>
                    <script src="vendors/popup/jquery.magnific-popup.min.js"></script>
                    <script src="js/jquery.ajaxchimp.min.js"></script>
                    <script src="vendors/counter-up/jquery.waypoints.min.js"></script>
                    <script src="vendors/counter-up/jquery.counterup.min.js"></script>
                    <script src="js/mail-script.js"></script>
                    <script src="js/theme.js"></script>
                </Helmet>
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