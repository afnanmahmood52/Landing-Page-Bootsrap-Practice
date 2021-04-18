import React from 'react'
import './Section3.css'
import CountUp from 'react-countup';
import Fade from 'react-reveal/Fade';

import BookImage from '../../Images/FeatureSection/1x/1x/book.png'
import HouseImage from '../../Images/FeatureSection/1x/1x/house.png'
import PlaneImage from '../../Images/FeatureSection/1x/1x/plane.png'


export default function Section3() {
    return (
        <section id="#section3">
            <div className="container">
            <div className="row">
                    <div className="col-md-2 col-sm-2"></div>
                    <div className="col-md-8 col-sm-8">
                        <div className="about-main-title">
                            <h1>OUR UNIQUENESS</h1>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-2"></div>
                </div>

                <Fade bottom>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="feature-section">
                            <div className="feature-card">
                                <img src={HouseImage}/>
                                <h3>
                                    <CountUp
                                    start={0}
                                    end={200}
                                    suffix={"+"}
                                    duration={7}
                                    />
                                </h3>
                                <p>Nationwide Branches</p>
                            </div>

                            <div className="feature-card">
                                <img src={BookImage}/>
                                <h3><CountUp
                                    start={0}
                                    end={250000}
                                    suffix={"+"}
                                    separator=","
                                    duration={7}
                                    /></h3>
                                <p>Copies Sold</p>
                            </div>

                            <div className="feature-card">
                                <img src={PlaneImage}/>
                                <h3><CountUp
                                    start={0}
                                    end={100000}
                                    suffix={"+"}
                                    separator=","
                                    duration={7}
                                    /></h3>
                                
                                <p>Satisfied Customers</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                </Fade>
            </div>
        </section>
    )
}
