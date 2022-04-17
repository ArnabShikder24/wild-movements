import React from 'react';
import { Link } from 'react-router-dom';
import './FooterTop.css'

const FooterTop = () => {
    return (
        <div>   
            <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3 className='hover-underline-animation'>Services</h3>
                        <ul>
                            <li><Link to="/">Wild Photograpy</Link></li>
                            <li><Link to="/">Wild event Photograpy</Link></li>
                            <li><Link to="/">Your journey Photograpy</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3 className='hover-underline-animation'>About</h3>
                        <ul>
                            <li><Link to="/about">Company</Link></li>
                            <li><Link to="/about">Team</Link></li>
                            <li><Link to="/about">Careers</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3 className='hover-underline-animation'>Company Name</h3>
                        <p>Wild~Movements is my company name, if you need memorible journey so you need a wild photographer to catch ta moment at photo fream. and you come to the right place to get service from me.</p>
                    </div>
                    <div className="col item social"><a href="/"><i class="icon ion-social-facebook"></i></a><a href="/"><i class="icon ion-social-twitter"></i></a><a href="/"><i class="icon ion-social-snapchat"></i></a><a href="/"><i class="icon ion-social-instagram"></i></a></div>
                </div>
            </div>
        </footer>
    </div>
        </div>
    );
};

export default FooterTop;   