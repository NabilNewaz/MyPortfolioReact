import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Resume extends Component {
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