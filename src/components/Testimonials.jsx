import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Testimonials extends Component {
    render() {
        return (
            <div>
                <Helmet>
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
                {/*================Testimonials Area =================*/}
                <section className="testimonials_area p_120">
                    <div className="container">
                    <div className="main_title">
                        <h2>Testimonials</h2>
                        <p>If you are looking for mobile phone on the web, you may be very confused at the difference in features &amp; price. You must choose it according to it's user review.</p>
                    </div>
                    <div className="testi_inner">
                        <div className="testi_slider owl-carousel">
                        <div className="item">
                            <div className="testi_item">
                            <style dangerouslySetInnerHTML={{__html: "\n\t\t\t\t\t\t\t\t\t.img {\n\t\t\t\t\t\t\t\t\t  max-width: 28%;\n\t\t\t\t\t\t\t\t\t  padding-bottom: 6px;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t" }} />
                            <center>
                                <p>We need skilled and creative<br /> people like you for the development<br /> of our country. I hope you will come up with more innovative and creative work</p>
                                <img className="img" src="img/testiperson/person1.png" alt="" />
                                <h4>Dr. Syed Akhter Hossain</h4>
                                <h6 style={{fontWeight: 'normal'}}>CSE Department Head</h6>
                                <h6>Daffodil International University</h6>
                                <a href="/"><i className="fa fa-star" /></a>
                                <a href="/"><i className="fa fa-star" /></a>
                                <a href="/"><i className="fa fa-star" /></a>
                                <a href="/"><i className="fa fa-star" /></a>
                                <a href="/"><i className="fa fa-star-o" /></a>
                            </center>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testi_item">
                            <center>
                                <p>Your all design works are very beautiful. The balance and alignment, use of color, contrast, concept &amp; all basic elements of your designs are almost perfect.</p>
                                <img className="img" src="img/testiperson/person3.png" alt="" />
                                <h4>Rezwan Islam</h4>
                                <h6 style={{fontWeight: 'normal'}}>Chairman</h6>
                                <h6>Tonitro</h6>
                                <a href="/"><i className="fa fa-star" /></a>
                                <a href="/"><i className="fa fa-star" /></a>
                                <a href="/"><i className="fa fa-star" /></a>
                                <a href="/"><i className="fa fa-star" /></a>
                                <a href="/"><i className="fa fa-star-half-o" /></a>
                            </center>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testi_item">
                            <center>
                                <p>I have seen your work, you have the potential to learn something new and become a better developer. Stick like this, good outcome will come inshallah.</p>
                                <img className="img" src="img/testiperson/person4.png" alt="" />
                                <h4>S.M. Shakil</h4>
                                <h6 style={{fontWeight: 'normal'}}>Full-Stack Web Developer</h6>
                                <h6>IT Conquest</h6>
                                <a href="/"><i className="fa fa-star" /></a>
                                <a href="/"><i className="fa fa-star" /></a>
                                <a href="/"><i className="fa fa-star" /></a>
                                <a href="/"><i className="fa fa-star" /></a>
                                <a href="/"><i className="fa fa-star-half-o" /></a>
                            </center>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testi_item">
                            <center>
                                <p>You started BSc as a half engineer. We need acquaintances like you in this sector. Hopefully going forward in this way will be able to do something good</p>
                                <img className="img" src="img/testiperson/person2.png" alt="" />
                                <h4>MD. Tanvir Siddiquee</h4>
                                <h6 style={{fontWeight: 'normal'}}>Assistant Professor</h6>
                                <h6>Daffodil International University</h6>
                                <a href="/"><i className="fa fa-star" /></a>
                                <a href="/"><i className="fa fa-star" /></a>
                                <a href="/"><i className="fa fa-star" /></a>
                                <a href="/"><i className="fa fa-star" /></a>
                                <a href="/"><i className="fa fa-star-half-o" /></a>
                            </center>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testi_item">
                            <center>
                                <p>Your all design is really sensible based on the concept &amp; you did those with more accuracy. Keep it up &amp; hope you'll be one of the best in this grassland</p>
                                <img className="img" src="img/testiperson/person5.png" alt="" />
                                <h4>MD. Shariful Islam</h4>
                                <h6 style={{fontWeight: 'normal'}}>Sr. Merchandiser</h6>
                                <h6>Dehirst Group Ltd.</h6>
                                <a href="/"><i className="fa fa-star" /></a>
                                <a href="/"><i className="fa fa-star" /></a>
                                <a href="/"><i className="fa fa-star" /></a>
                                <a href="/"><i className="fa fa-star" /></a>
                                <a href="/"><i className="fa fa-star" /></a>
                            </center>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/*================End Testimonials Area =================*/}
            </div>
        );
    }
}

export default Testimonials;