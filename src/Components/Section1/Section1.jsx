import React from 'react'
import './Section1.css'
import HeaderBook from '../../Images/header-img.png'

export default function Section1() {
    return (
        <section id="#section1">
            <div className="container">
                <div className="row">
                    <div className="col-sm-7 col-md-7">
                        <div className="text-section">
                            <h5>AUTHOR: AFNAN MAHMOOD</h5>
                            <h1>EXCITING ADVENTURE</h1>
                            <p>You can purchase the books as mentioned below.</p>
                            <button className="buy-now">
                                Buy for $5.99
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-5 col-md-5">
                        <div className="book-header-img">
                            <img src={HeaderBook} alt="header Book"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
