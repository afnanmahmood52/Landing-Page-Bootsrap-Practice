import React from 'react'
import './Section2.css'
import AboutImage from '../../Images/aboutSection.jpeg'

export default function Section2() {
    return (
        <section id="#section2">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="about-section-img">
                            <img src={AboutImage} alt="about section image"/>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="about-section-text">
                            <h1>Afnan Mahmood</h1>
                            <p>A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.[1] The technical term for this physical arrangement is codex (plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its predecessor, the scroll. A single sheet in a codex is a leaf and each side of a leaf is a page.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere iure adipisci harum ducimus accusantium, repudiandae</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
