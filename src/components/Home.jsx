import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link rel="icon" href="img/favicon.png" type="image/png" />
                    <title>Nabil Newaz</title>
                    <meta name="title" content="Nabil Newaz" />
                    <meta name="description" content="Junior Web & UI/UX Developer. Also expert on Graphics Design, Photo Editing, Video Editing, Android Development And Other IT Sectors." />

                    {/*<!-- Google / Search Engine Tags -->*/}
                    <meta itemprop="name" content="Nabil Newaz" />
                    <meta itemprop="description" content="Junior Web & UI/UX Developer. Also expert on Graphics Design, Photo Editing, Video Editing, Android Development And Other IT Sectors." />
                    <meta itemprop="image" content="https://raw.githubusercontent.com/NabilNewaz/NabilNewazPortfolio/master/img/gallery/Untitled-2.jpg" />

                    {/*<!-- Open Graph / Facebook -->*/}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://nabilnewaz.com/" />
                    <meta property="og:title" content="Nabil Newaz" />
                    <meta property="og:description" content="Junior Web & UI/UX Developer. Also expert on Graphics Design, Photo Editing, Video Editing, Android Development And Other IT Sectors." />
                    <meta property="og:image" content="https://raw.githubusercontent.com/NabilNewaz/NabilNewazPortfolio/master/img/metaimg.png" />
                    <meta property="og:image:width" content="900" />
                    <meta property="og:image:height" content="471" />
                    <meta property="fb:app_id" content="3095171203923902"/>

                    {/*<!-- Twitter -->*/}
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://nabilnewaz.com/" />
                    <meta property="twitter:title" content="Nabil Newaz" />
                    <meta property="twitter:description" content="Junior Web & UI/UX Developer. Also expert on Graphics Design, Photo Editing, Video Editing, Android Development And Other IT Sectors." />
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
                    <section className="home_banner_area">
                        <div className="container box_1620">
                        <div className="banner_inner d-flex align-items-center">
                            <div className="banner_content">
                            <div className="media">
                                <div className="d-flex">
                                <img src="img/personal.jpg" alt="" />
                                </div>
                                <div className="media-body">
                                <div className="personal_text">
                                    <h6>Hello, i am</h6>
                                    <h3>Nabil Newaz</h3>
                                    <h4>Junior Web &amp; UI/UX Developer</h4>
                                    <p>I am expert on Graphics Design, Photo Editing, Video Editing, Web Development, Android Development And Other IT Sectors</p>
                                    <ul className="list basic_info">
                                    <li><a href="tel:+8801714940700"><i className="lnr lnr-phone-handset" />+8801714-940700</a></li>
                                    <li><a href="mailto:contact@nabilnewaz.com"><i className="lnr lnr-envelope" />contact@nabilnewaz.com</a></li>
                                    <li><a href="https://www.google.com/maps/@23.7612002,90.3641564,17z" target="_blank" rel="noreferrer"><i className="lnr lnr-home" /> Mohammadpur, Dhaka, Bangladesh</a></li>
                                    </ul>
                                    <ul className="list personal_social">
                                    <li><a href="https://www.facebook.com/nabil.newaz.5/" target="_blank" rel="noreferrer"><i className="fa fa-facebook" /></a></li>
                                    <li><a href="https://www.twitter.com/Nabil_Newaz/" target="_blank" rel="noreferrer"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="https://www.instagram.com/nabil_newaz/" target="_blank" rel="noreferrer"><i className="fa fa-instagram" /></a></li>
                                    <li><a href="https://www.linkedin.com/in/nabilnewaz/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" /></a></li>
                                    <li><a href="https://www.github.com/NabilNewaz" target="_blank" rel="noreferrer"><i className="fa fa-github" /></a></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    {/*================End Home Banner Area =================*/}
                    {/*================Welcome Area =================*/}
                    <section className="welcome_area p_120">
                        <div className="container">
                        <div className="row welcome_inner">
                            <div className="col-lg-6">
                            <div className="welcome_text">
                                <h4>About My Skills</h4>
                                <p>To Work With A Well Reputed Organization Or Client Where Utilize My Technical Skills For Achieving The Goal &amp; Developing Performance. I Would Like To Implement My Innovation Ideas, Skills, Dedications For The Organization Or Client Development.
                                </p>
                                <div className="row">
                                <div className="col-md-4">
                                    <div className="wel_item">
                                    <i className="lnr lnr-database" />
                                    <h4>$292.69</h4>
                                    <p>Total Earnings</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="wel_item">
                                    <i className="lnr lnr-book" />
                                    <h4>27</h4>
                                    <p>Total Projects</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="wel_item">
                                    <i className="lnr lnr-users" />
                                    <h4>12</h4>
                                    <p>Total Volunteers</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-6">
                            <div className="tools_expert">
                                <div className="skill_main">
                                <div className="skill_item">
                                    <h4>Photoshop <span className="counter">90</span>%</h4>
                                    <div className="progress_br">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    </div>
                                </div>
                                <div className="skill_item">
                                    <h4>Illustrator <span className="counter">70</span>%</h4>
                                    <div className="progress_br">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    </div>
                                </div>
                                <div className="skill_item">
                                    <h4>After Effects <span className="counter">60</span>%</h4>
                                    <div className="progress_br">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    </div>
                                </div>
                                <div className="skill_item">
                                    <h4>Adobe XD <span className="counter">92</span>%</h4>
                                    <div className="progress_br">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={92} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    </div>
                                </div>
                                <div className="skill_item">
                                    <h4>Adobe Muse <span className="counter">70</span>%</h4>
                                    <div className="progress_br">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="more_btn">
                        <NavLink className="main_btn" to='/about'>Know More About Me</NavLink>
                        </div>
                    </section>
                    {/*================End Welcome Area =================*/}
                    {/*================Feature Area =================*/}
                    <section className="feature_area p_120">
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
                        </div>
                        </div>
                        <div className="more_btn">
                        <NavLink className="main_btn" to='/services'>Load More Items</NavLink>
                        </div>
                    </section>
                    {/*================End Feature Area =================*/}
                    {/*================Home Gallery Area =================*/}
                    <section className="home_gallery_area p_120">
                        <div className="container">
                        <div className="main_title">
                            <h2>My Latest Featured Projects</h2>
                            <p>Which Are Extremely Lovely With Eco Friendly System.</p>
                        </div>
                        <div className="isotope_fillter">
                            <ul className="gallery_filter list">
                            <li className="active" data-filter="*"><a href=" ">All</a></li>
                            <li data-filter=".vector"><a href=" ">Vector</a></li>
                            <li data-filter=".design"><a href=" ">Design</a></li>
                            <li data-filter=".ux"><a href=" ">UI/UX</a></li>
                            <li data-filter=".webdev"><a href=" ">Web Development</a></li>
                            </ul>
                        </div>
                        </div>
                        <div className="container">
                        <div className="gallery_f_inner row imageGallery1">
                            <div className="col-lg-4 col-md-4 col-sm-6 vector">
                            <div className="h_gallery_item">
                                <div className="g_img_item">
                                <img className="img-fluid" src="img/gallery/project-2.jpg" alt="" />
                                <a className="light" href="img/gallery/Untitled-2.jpg"><img src="img/gallery/icon.png" alt="" /></a>
                                </div>
                                <div className="g_item_text">
                                <h4>2D Vinyl Design</h4>
                                <p>Own Project</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 design">
                            <div className="h_gallery_item">
                                <div className="g_img_item">
                                <img className="img-fluid" src="img/gallery/project-3.jpg" alt="" />
                                <a className="light" href="img/gallery/Untitled-3.jpg"><img src="img/gallery/icon.png" alt="" /></a>
                                </div>
                                <div className="g_item_text">
                                <h4>Creative Poster Design</h4>
                                <p>Client Project</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 vector">
                            <div className="h_gallery_item">
                                <div className="g_img_item">
                                <img className="img-fluid" src="img/gallery/project-6.jpg" alt="" />
                                <a className="light" href="img/gallery/Untitled-6.jpg"><img src="img/gallery/icon.png" alt="" /></a>
                                </div>
                                <div className="g_item_text">
                                <h4>Face Illustration</h4>
                                <p>Client Project</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 ux webdev">
                            <div className="h_gallery_item">
                                <div className="g_img_item">
                                <img className="img-fluid" src="img/gallery/project-4.jpg" alt="" />
                                <a className="lightweb" href="http://adsfreeshareit.netlify.app" target="_blank" rel="noreferrer"><img src="img/gallery/iconweb.png" alt="" /></a>
                                </div>
                                <div className="g_item_text">
                                <h4>App Showcase Website</h4>
                                <p>Own Project</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 ux">
                            <div className="h_gallery_item">
                                <div className="g_img_item">
                                <img className="img-fluid" src="img/gallery/project-12.jpg" alt="" />
                                <a className="lightweb" href="https://xd.adobe.com/view/c1c9a7a0-c1e0-4a74-7717-3ea956edcbfb-b7f8/?fullscreen" target="_blank" rel="noreferrer"><img src="img/gallery/iconxd.png" alt="" /></a>
                                </div>
                                <div className="g_item_text">
                                <h4>StudyShare App UI Design</h4>
                                <p>Client Project</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 ux webdev">
                            <div className="h_gallery_item">
                                <div className="g_img_item">
                                <img className="img-fluid" src="img/gallery/project-5.jpg" alt="" />
                                <a className="lightweb" href="http://onlinebdfm.unaux.com" target="_blank" rel="noreferrer"><img src="img/gallery/iconweb.png" alt="" /></a>
                                </div>
                                <div className="g_item_text">
                                <h4>Radio Web Application</h4>
                                <p>Own Project</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 design">
                            <div className="h_gallery_item">
                                <div className="g_img_item">
                                <img className="img-fluid" src="img/gallery/project-13.jpg" alt="" />
                                <a className="light" href="img/gallery/Untitled-13.jpg"><img src="img/gallery/icon.png" alt="" /></a>
                                </div>
                                <div className="g_item_text">
                                <h4>Facbook Cover Design</h4>
                                <p>Client Project</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 design">
                            <div className="h_gallery_item">
                                <div className="g_img_item">
                                <img className="img-fluid" src="img/gallery/project-9.jpg" alt="" />
                                <a className="light" href="img/gallery/Untitled-9.jpg"><img src="img/gallery/icon.png" alt="" /></a>
                                </div>
                                <div className="g_item_text">
                                <h4>Flat Logo Design</h4>
                                <p>Own Project</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 none">
                            <div className="h_gallery_item">
                                <div className="g_img_item">
                                <img className="img-fluid" src="img/gallery/project-18.jpg" alt="" />
                                <a className="lightweb" href="https://docdro.id/y0uCYxF" target="_blank" rel="noreferrer"><img src="img/gallery/ppticon.png" alt="" /></a>
                                </div>
                                <div className="g_item_text">
                                <h4>PowerPoint Slide Design</h4>
                                <p>Client Project</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="more_btn">
                            <NavLink className="main_btn" to='/projects'>Load More Items</NavLink>
                        </div>
                        </div>
                    </section>
                    {/*================End Home Gallery Area =================*/}
                </div>
            </div>
        );
    }
}

export default Home;