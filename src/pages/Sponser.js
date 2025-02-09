import React from 'react'
import '../css/Sponser.css'
import PastSlider from '../components/PastSlider'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import dubeat from '../assets/sponser/WhatsApp Image 2024-11-18 at 21.33.51_29eec085.jpg'
import shape from '../assets/sponser/WhatsApp Image 2024-12-24 at 17.28.30_bb6a843a.jpg'
import Logo from '../assets/committees/mun_b.png'
const Sponser = () => {
    return (
        <div>
            <NavBar />
            <div className="sponser-bg">
                <div className="sponsors-title">
                    <h1 style={{fontFamily:"Trebuchet MS"}}>OUR SPONSORS</h1>
                </div>
                <div className="logo">
                    <img src={Logo} alt="" className='mun-logo' />
                </div>
            </div>
            <section className="sponsers-container">
                <div className="current-sponsors">
                    <h2>2024 Sponsors</h2>
                    <p>We thank the following sponsors for their support</p>
                    <div className="present-box">
                        <a href="https://www.shankariasacademy.com/" target="_blank">
                            <div className="sponsor-box">
                                <div className="logo-box">
                                    <img className="sponsor-logo" src="https://i0.wp.com/iascoachings.com/wp-content/uploads/2020/11/154.jpg?fit=800%2C600&ssl=1" alt="Shankar IAS" />
                                </div>
                                <div className="sponsor-desc">
                                    <div className="desc-box">
                                        <h3 className="sponsor-name">Shankar IAS</h3>
                                        <h4 className="sponsor-info">Your IAS Partner</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.hitbullseye.com/" target="_blank">
                            <div className="sponsor-box">
                                <div className="logo-box">
                                    <img className="sponsor-logo" src="https://images.yourstory.com/cs/images/companies/Hitbullseye-1594787838742.jpg?fm=png&auto=formatar=1:1&mode=fill&fill=solid" alt="HitBullsEye" />
                                </div>
                                <div className="sponsor-desc">
                                    <div className="desc-box">
                                        <h3 className="sponsor-name">HitBullsEye</h3>
                                        <h4 className="sponsor-info">Prepare with Confidence</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.lawctopus.com/" target="_blank">
                            <div className="sponsor-box">
                                <div className="logo-box">
                                    <img className="sponsor-logo" src="https://www.lawctopus.com/wp-content/uploads/2021/08/Lawctopus-logo-o.svg" alt="Lawctopus" />
                                </div>
                                <div className="sponsor-desc">
                                    <div className="desc-box">
                                        <h3 className="sponsor-name">Lawctopus</h3>
                                        <h4 className="sponsor-info">Legal Opportunities Hub</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://simplybodytalk.com/" target="_blank">
                            <div className="sponsor-box">
                                <div className="logo-box">
                                    <img className="sponsor-logo" src="https://media.licdn.com/dms/image/v2/C4D0BAQHsCs3Y6klK2g/company-logo_200_200/company-logo_200_200/0/1630580672141/simply_body_talk_logo?e=1740009600&v=beta&t=n0KvTrsQSChc0k1bfsXuJuwWWLgNLrwQenFv4NAZ7m0" alt="Simple Body Talk" />
                                </div>
                                <div className="sponsor-desc">
                                    <div className="desc-box">
                                        <h3 className="sponsor-name">Simple Body Talk</h3>
                                        <h4 className="sponsor-info">Body Language Experts</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://edtimes.in/" target="_blank">
                            <div className="sponsor-box">
                                <div className="logo-box">
                                    <img className="sponsor-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8zBwG9YQQnCkDVrpZwokkTUE4r7OlrSM90Q&s" alt="ED Times" />
                                </div>
                                <div className="sponsor-desc">
                                    <div className="desc-box">
                                        <h3 className="sponsor-name">ED Times</h3>
                                        <h4 className="sponsor-info">Youth Media Platform</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://startupnews.fyi/" target="_blank">
                            <div className="sponsor-box">
                                <div className="logo-box">
                                    <img className="sponsor-logo" src="https://media.licdn.com/dms/image/v2/D560BAQFakIj1Vk4v9g/company-logo_200_200/company-logo_200_200/0/1711433767504?e=1740009600&v=beta&t=kQMuDiqLY_OMHTPkD6YGphxM9esREOOISkbpahPIxrA" alt="Startup News FYI" />
                                </div>
                                <div className="sponsor-desc">
                                    <div className="desc-box">
                                        <h3 className="sponsor-name">Startup News FYI</h3>
                                        <h4 className="sponsor-info">Latest in Startups</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://theglobalhues.com/" target="_blank">
                            <div className="sponsor-box">
                                <div className="logo-box">
                                    <img className="sponsor-logo" src="https://media.licdn.com/dms/image/v2/C4D0BAQH-v9FDjtaPzA/company-logo_200_200/company-logo_200_200/0/1663179453334?e=1740009600&v=beta&t=O0tsN6mk548PngSLBc2eywxYbm8c82ct-ac9OA7c-Gc" alt="Global Hues" />
                                </div>
                                <div className="sponsor-desc">
                                    <div className="desc-box">
                                        <h3 className="sponsor-name">Global Hues</h3>
                                        <h4 className="sponsor-info">Insightful Stories</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://dubeat.com/" target="_blank">
                            <div className="sponsor-box">
                                <div className="logo-box">
                                    <img className="sponsor-logo" src={dubeat} alt="Global Hues" />
                                </div>
                                <div className="sponsor-desc">
                                    <div className="desc-box">
                                        <h3 className="sponsor-name">DU Beat</h3>
                                        <h4 className="sponsor-info">Student Newspaper</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://search.app/6KfN19VQx8SSdP7Z6 " target="_blank">
                            <div className="sponsor-box">
                                <div className="logo-box">
                                    <img className="sponsor-logo" src={shape} alt="Global Hues" />
                                </div>
                                <div className="sponsor-desc">
                                    <div className="desc-box">
                                        <h3 className="sponsor-name">Shape</h3>
                                        <h4 className="sponsor-info">Notebook and Arts</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.easemytrip.com/" target="_blank">
                            <div className="sponsor-box">
                                <div className="logo-box">
                                    <img className="sponsor-logo" src="https://play-lh.googleusercontent.com/9xMTcIms0WtWj8Ra4Vhlfm3Dz8zrd53tfrgyyA5kNLHnap2qjSrPDshm3YfKLElY4w" alt="Ease My Trip" />
                                </div>
                                <div className="sponsor-desc">
                                    <div className="desc-box">
                                        <h3 className="sponsor-name">Ease My Trip</h3>
                                        <h4 className="sponsor-info">Best Deals on Flights,Hotel</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="old-sponsors">
                    <h2>Past partners</h2>
                    <PastSlider />
                </div>
            </section >
            <Footer />
        </div>
    )
}

export default Sponser
