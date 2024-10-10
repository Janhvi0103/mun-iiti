import React from 'react'
import '../css/Sponser.css'
import PastSlider from '../components/PastSlider'
import NavBar from '../components/NavBar'
const Sponser = () => {
    return (
        <div>
            <NavBar/>
            <div className="sponser-bg">
                <div className="sponsors-title">
                    <h1 >OUR SPONSERS</h1>
                </div>
                <div className="logo">
                    <img src="http://mun.iiti.ac.in/assets/img/logowhite.png" alt="" className='mun-logo' />
                </div>
            </div>
            <section className="sponsers-container">
                <div className="current-sponsors">
                    <h2>2024 Sponsors</h2>
                    <p>We thank the following sponsors for their support</p>
                    <div className="present-box">
                        <a href="https://unstop.com/" target="_blank">
                            <div className="sponsor-box">
                                <div className="logo-box">
                                    <img className="sponsor-logo" src="http://mun.iiti.ac.in/assets/img/sponsors/unstop.png" alt="" />
                                </div>
                                <div className="sponsor-desc">
                                    <div className="desc-box">
                                        <h3 className="sponsor-name">Upstop</h3>
                                        <h4 className="sponsor-info">Powered by partners</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://unstop.com/" target="_blank">
                            <div className="sponsor-box">
                                <div className="logo-box">
                                    <img className="sponsor-logo" src="http://mun.iiti.ac.in/assets/img/sponsors/unstop.png" alt="" />
                                </div>
                                <div className="sponsor-desc">
                                    <div className="desc-box">
                                        <h3 className="sponsor-name">Upstop</h3>
                                        <h4 className="sponsor-info">Powered by partners</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://unstop.com/" target="_blank">
                            <div className="sponsor-box">
                                <div className="logo-box">
                                    <img className="sponsor-logo" src="http://mun.iiti.ac.in/assets/img/sponsors/unstop.png" alt="" />
                                </div>
                                <div className="sponsor-desc">
                                    <div className="desc-box">
                                        <h3 className="sponsor-name">Upstop</h3>
                                        <h4 className="sponsor-info">Powered by partners</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://unstop.com/" target="_blank">
                            <div className="sponsor-box">
                                <div className="logo-box">
                                    <img className="sponsor-logo" src="http://mun.iiti.ac.in/assets/img/sponsors/unstop.png" alt="" />
                                </div>
                                <div className="sponsor-desc">
                                    <div className="desc-box">
                                        <h3 className="sponsor-name">Upstop</h3>
                                        <h4 className="sponsor-info">Powered by partners</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://unstop.com/" target="_blank">
                            <div className="sponsor-box">
                                <div className="logo-box">
                                    <img className="sponsor-logo" src="http://mun.iiti.ac.in/assets/img/sponsors/unstop.png" alt="" />
                                </div>
                                <div className="sponsor-desc">
                                    <div className="desc-box">
                                        <h3 className="sponsor-name">Upstop</h3>
                                        <h4 className="sponsor-info">Powered by partners</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="old-sponsors">
                    <h2>Past partners</h2>
                    <PastSlider />
                </div>
            </section >
        </div >
    )
}

export default Sponser