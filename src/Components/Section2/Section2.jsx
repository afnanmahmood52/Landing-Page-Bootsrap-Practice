import React from 'react'
import './Section2.css'
import AboutImage from '../../Images/girlReadingBook.jpg'

export default function Section2() {
    return (
        <section id="#section2">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-sm-3"></div>
                    <div className="col-md-6 col-sm-6">
                        <div className="about-main-title">
                            <h1>WHO WE ARE?</h1>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3"></div>
                </div> 

                <div className="row">   
                    <div className="col-md-2 col-sm-2"></div>
                        <div className="col-md-8 col-sm-2">
                        <div className="about-section-img">
                                <img src={AboutImage} alt="about section"/>
                            </div>
                        </div>
                    <div className="col-md-2 col-sm-2"></div>
                </div>

                <div className="row">
                <div className="col-md-2 col-sm-2"></div>
                    <div className="col-md-8 col-sm-8">
                    <div className="about-section-text">
                            <p>A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.[1] The technical term for this physical arrangement is codex (plural, codices). In the history of hand-held physical supports written compositions or records, the codex replaces its predecessor, the scroll. A single sheet in a codex is a leaf and each side of a leaf is a page.</p>
                            <p>A book is a medium for recording information in the form of writing</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-2"></div>
                </div>
                
            </div>
        </section>
    )
}
