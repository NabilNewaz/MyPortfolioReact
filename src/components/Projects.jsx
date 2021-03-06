import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

class Projects extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    {/*<!-- Required meta tags -->*/}
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link rel="icon" href="img/favicon.png" type="image/png" />
                    <title>Projects | Nabil Newaz</title>
                    <meta name="title" content="Projects" />
                    <meta name="description" content="Check Out My Latest Featured Projects. Which Are Extremely Lovely With Eco Friendly System." />

                    {/*<!-- Open Graph / Facebook -->*/}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://nabilnewaz.com/projects" />
                    <meta property="og:title" content="Projects" />
                    <meta property="og:description" content="Check Out My Latest Featured Projects. Which Are Extremely Lovely With Eco Friendly System." />
                    <meta property="og:image" content="https://raw.githubusercontent.com/NabilNewaz/NabilNewazPortfolio/master/img/metaimg.png" />
                    <meta property="og:image:width" content="900" />
                    <meta property="og:image:height" content="471" />
                    <meta property="fb:app_id" content="3095171203923902"/>

                    {/*<!-- Twitter -->*/}
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://nabilnewaz.com/projects" />
                    <meta property="twitter:title" content="Projects" />
                    <meta property="twitter:description" content="Check Out My Latest Featured Projects. Which Are Extremely Lovely With Eco Friendly System." />
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
                                <h2>Projects</h2>
                                <div className="page_link">
                                <NavLink to='/'>Home</NavLink>
                                <NavLink to='/projects'>Projects</NavLink>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    {/*================End Home Banner Area =================*/}
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
                            <div className="col-lg-4 col-md-4 col-sm-6 ux">
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
                            <div className="col-lg-4 col-md-4 col-sm-6 vector">
                            <div className="h_gallery_item">
                                <div className="g_img_item">
                                <img className="img-fluid" src="img/gallery/project-1.jpg" alt="" />
                                <a className="light" href="img/gallery/Untitled-1.jpg"><img src="img/gallery/icon.png" alt="" /></a>
                                </div>
                                <div className="g_item_text">
                                <h4>Dripping Effect Illustration</h4>
                                <p>Own Project</p>
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
                            <div className="col-lg-4 col-md-4 col-sm-6 ux webdev">
                            <div className="h_gallery_item">
                                <div className="g_img_item">
                                <img className="img-fluid" src="img/gallery/project-10.jpg" alt="" />
                                <a className="lightweb" href="https://nabilnewaz.com" target="_blank" rel="noreferrer"><img src="img/gallery/iconweb.png" alt="" /></a>
                                </div>
                                <div className="g_item_text">
                                <h4>Personal Portfolio</h4>
                                <p>Own Project</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 design">
                            <div className="h_gallery_item">
                                <div className="g_img_item">
                                <img className="img-fluid" src="img/gallery/project-17.jpg" alt="" />
                                <a className="light" href="img/gallery/Untitled-17.jpg"><img src="img/gallery/icon.png" alt="" /></a>
                                </div>
                                <div className="g_item_text">
                                <h4>App Icon Design</h4>
                                <p>Client Project</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 design">
                            <div className="h_gallery_item">
                                <div className="g_img_item">
                                <img className="img-fluid" src="img/gallery/project-16.jpg" alt="" />
                                <a className="light" href="img/gallery/Untitled-16.jpg"><img src="img/gallery/icon.png" alt="" /></a>
                                </div>
                                <div className="g_item_text">
                                <h4>Visiting Card</h4>
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
                            <div className="col-lg-4 col-md-4 col-sm-6 ux">
                            <div className="h_gallery_item">
                                <div className="g_img_item">
                                <img className="img-fluid" src="img/gallery/project-8.jpg" alt="" />
                                <a className="lightweb" href="https://github.com/NabilNewaz/BillCalculatorBD" target="_blank" rel="noreferrer"><img src="img/gallery/icongit.png" alt="" /></a>
                                </div>
                                <div className="g_item_text">
                                <h4>Bill Calculator BD</h4>
                                <p>Java Project</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 design">
                            <div className="h_gallery_item">
                                <div className="g_img_item">
                                <img className="img-fluid" src="img/gallery/project-15.jpg" alt="" />
                                <a className="light" href="img/gallery/Untitled-15.jpg"><img src="img/gallery/icon.png" alt="" /></a>
                                </div>
                                <div className="g_item_text">
                                <h4>Hoodie &amp; T-Shirt Design</h4>
                                <p>Client Project</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 webdev">
                            <div className="h_gallery_item">
                                <div className="g_img_item">
                                <img className="img-fluid" src="img/gallery/project-7.jpg" alt="" />
                                <a className="lightweb" href="https://nabilold.netlify.app" target="_blank" rel="noreferrer"><img src="img/gallery/iconweb.png" alt="" /></a>
                                </div>
                                <div className="g_item_text">
                                <h4>Personal Website</h4>
                                <p>Own Project</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 vector">
                            <div className="h_gallery_item">
                                <div className="g_img_item">
                                <img className="img-fluid" src="img/gallery/project-14.jpg" alt="" />
                                <a className="light" href="img/gallery/Untitled-14.jpg"><img src="img/gallery/icon.png" alt="" /></a>
                                </div>
                                <div className="g_item_text">
                                <h4>Pastel Colors Illustration</h4>
                                <p>Client Project</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 webdev">
                            <div className="h_gallery_item">
                                <div className="g_img_item">
                                <img className="img-fluid" src="img/gallery/project-11.jpg" alt="" />
                                <a className="lightweb" href="https://o9coursedetails.netlify.app" target="_blank" rel="noreferrer"><img src="img/gallery/iconweb.png" alt="" /></a>
                                </div>
                                <div className="g_item_text">
                                <h4>Course Details Blog</h4>
                                <p>Own Project</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    {/*================End Home Gallery Area =================*/}
                </div>
            </div>
        );
    }
}

export default Projects;