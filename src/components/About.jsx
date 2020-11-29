import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link rel="icon" href="img/favicon.png" type="image/png" />
                    <title>About Me | Nabil Newaz</title>
                    <meta name="title" content="About Me" />
                    <meta name="description" content="Learn More About My Personal Information, Educational Background And Work Experiences." />

                    {/*<!-- Open Graph / Facebook -->*/}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://nabilnewaz.com/about/" />
                    <meta property="og:title" content="About Me" />
                    <meta property="og:description" content="Learn More About My Personal Information, Educational Background And Work Experiences." />
                    <meta property="og:image" content="https://raw.githubusercontent.com/NabilNewaz/NabilNewazPortfolio/master/img/metaimg.png" />
                    <meta property="og:image:width" content="900" />
                    <meta property="og:image:height" content="471" />
                    <meta property="fb:app_id" content="3095171203923902" />

                    {/*</meta><!-- Twitter -->*/}
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://nabilnewaz.com/about/" />
                    <meta property="twitter:title" content="About Me" />
                    <meta property="twitter:description" content="Learn More About My Personal Information, Educational Background And Work Experiences." />
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
                            <h2>About Me</h2>
                            <div className="page_link">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/about'>About</NavLink>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/*================End Home Banner Area =================*/}
                {/*================Home Banner Area =================*/}
                <section className="profile_area">
                    <div className="container">
                    <div className="profile_inner p_120">
                        <div className="row">
                        <div className="col-lg-5">
                            <img className="img-fluid" src="img/personal-2.jpg" alt="" />
                        </div>
                        <div className="col-lg-7">
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
                        <div className="blog_post">
                        <style dangerouslySetInnerHTML={{__html: "\n\t\t\t\t\t\t\t.card-5,.hover-shadow:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)}\n\t\t\t\t\t\t\t.margin{margin:18px!important;border-radius: 15px!important;}\n\t\t\t\t\t\t\t.white,.hover-white:hover{color:#000!important;background-color:#fff!important}\n\t\t\t\t\t\t" }} />
                        <br /><hr />
                        <div className="categories_text">
                            <center>
                            <br /><br />
                            <h2 style={{color: '#007bff'}}>MOBILE SITE CERTIFICATION</h2>
                            <p style={{fontSize: '100%'}}>Completion ID: 18433663 | Google</p>
                            </center>
                        </div>
                        <div className="card-5 margin white">
                            <br />
                            <img src="img/google_msite.jpg" alt="" oncontextmenu="alert('Copyright ©Nabil Newaz');return false;" />
                            <br /><br />
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/*================End Welcome Area =================*/}
                {/*================My Tabs Area =================*/}
                <section className="mytabs_area p_120">
                    <div className="container">
                    <div className="tabs_inner">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">My Experiences</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">My Education</a>
                        </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <ul className="list">
                            <li>
                                <span />
                                <div className="media">
                                <div className="d-flex">
                                    <p>March 2017 To April 18</p>
                                </div>
                                <div className="media-body">
                                    <h4>Junior Android Developer</h4>
                                    <b style={{color: '#FFF'}}>XDA Developer Group</b> <br /><p>Work on Resurrection Remix OS 5.8.1 Project</p>
                                </div>
                                </div>
                            </li>
                            <li>
                                <span />
                                <div className="media">
                                <div className="d-flex">
                                    <p>March 2018 To Present</p>
                                </div>
                                <div className="media-body">
                                    <h4>Graphics Designer</h4>
                                    <b style={{color: '#FFF'}}>Freelancer<a style={{color: '#FFF'}} href="https://www.facebook.com/NGraphicBD" target="_blank" rel="noreferrer"> (NGraphic)</a></b><br /><p>Work on many Design Project</p>
                                </div>
                                </div>
                            </li>
                            <li>
                                <span />
                                <div className="media">
                                <div className="d-flex">
                                    <p>March 2019 To Present</p>
                                </div>
                                <div className="media-body">
                                    <h4>Web Developer</h4>
                                    <b style={{color: '#FFF'}}>Google Developer Group</b> <br /><p>Mobile Sites Certified By Google</p>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <ul className="list">
                            <li>
                                <span />
                                <div className="media">
                                <div className="d-flex">
                                    <p style={{marginRight: '1.9em'}}>Year 2014 To 2016</p>
                                </div>
                                <div className="media-body">
                                    <h4>Completed S.S.C</h4>
                                    <b style={{color: '#FFF'}}>B.L Govt. High School, Sirajganj</b><br /><p>Result : GPA 5</p>
                                </div>
                                </div>
                            </li>
                            <li>
                                <span />
                                <div className="media">
                                <div className="d-flex">
                                    <p style={{marginRight: '1.9em'}}>Year 2016 To 2018</p>
                                </div>
                                <div className="media-body">
                                    <h4>Completed H.S.C</h4>
                                    <b style={{color: '#FFF'}}>Islamia Govt. College, Sirajganj</b><br /><p>Result : GPA 4</p>
                                </div>
                                </div>
                            </li>
                            <li>
                                <span />
                                <div className="media">
                                <div className="d-flex">
                                    <p style={{marginRight: '0.8em'}}>Year 2019 To Present</p>
                                </div>
                                <div className="media-body">
                                    <h4>B.Sc. In C.S.E</h4>
                                    <b style={{color: '#FFF'}}>Daffodil International University</b><br /><p>Result : CGPA 3.62</p>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/*================End My Tabs Area =================*/}
                {/*================Personal Information Area =================*/}
                <section className="home_gallery_area p">
                    <div className="main_title">
                    <style dangerouslySetInnerHTML={{__html: "\n\t\t\t\t.card-5,.hover-shadow:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)}\n\t\t\t\t.inner-border {margin: 0px; padding: 15px; position: relative;}\n\t\t\t\t.margin{margin:18px!important;border-radius: 15px!important;}\n\t\t\t\t.white,.hover-white:hover{color:#000!important;background-color:#fff!important}\n\t\t\t\t" }} />
                    <br /><br />
                    <div className="card-5 margin white inner-border">
                        <br />
                        <h2>Personal Information</h2>
                        <p>Full Name: Nabil Newaz<br />Barth Date: 04 November, 1998<br />Age: Twenty-One<br />Father’s Name: Abdul Kader<br />Mother’s Name: Rebeka Sultana<br />Present Address: Dhaka, Bangladesh<br />Parmanant Address: Sirajganj, Bangladesh</p>
                        <br />
                        <NavLink className="main_btn" to='/resume'>See Full Resume</NavLink><br /><br />
                    </div>
                    </div>
                </section>
                {/*================End Personal Information Area =================*/}
                </div>
            </div>
        );
    }
}

export default About;