import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

class Resume extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    {/*<!-- Required meta tags -->*/}
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link rel="icon" href="img/favicon.png" type="image/png" />
                    <title>Resume | Nabil Newaz</title>
                    <meta name="title" content="Resume" />
                    <meta name="description" content="Download My Resume And Use It For Formal Documentation." />

                    {/*<!-- Open Graph / Facebook -->*/}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://nabilnewaz.com/resume" />
                    <meta property="og:title" content="Resume" />
                    <meta property="og:description" content="Download My Resume And Use It For Formal Documentation." />
                    <meta property="og:image" content="https://raw.githubusercontent.com/NabilNewaz/NabilNewazPortfolio/master/img/metaimg.png" />
                    <meta property="og:image:width" content="900" />
                    <meta property="og:image:height" content="471" />
                    <meta property="fb:app_id" content="3095171203923902"/>

                    {/*<!-- Twitter -->*/}
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://nabilnewaz.com/resume" />
                    <meta property="twitter:title" content="Resume" />
                    <meta property="twitter:description" content="Download My Resume And Use It For Formal Documentation." />
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
                                <h2>My Resume</h2>
                                <div className="page_link">
                                <NavLink to='/'>Home</NavLink>
                                <NavLink to='/about'>About</NavLink>
                                <NavLink to='/resume'>Resume</NavLink>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    {/*================End Home Banner Area =================*/}
                    <br />
                    {/*================Iframe Area =================*/}
                    <iframe src="https://www.docdroid.net/ihKzdGz/nabil-newaz.pdf" title="resume" className="iframe" frameBorder={0} marginHeight={0} marginWidth={0} width="100%" height="100%" scrolling="no"> 
                    </iframe>
                    {/*================End Iframe Area =================*/}
                </div>
            </div>
        );
    }
}

export default Resume;