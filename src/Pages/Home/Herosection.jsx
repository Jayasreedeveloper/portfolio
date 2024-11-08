import React from 'react'

function Herosection() {
  return (
    <section id="hero-section" className="hero-section">
      <div className="herosectioncontbox">
        <div className="hero--content">
          <p className="sectiontitle">
            Hey i'm jaii
          </p>
          <h1 className="hero-section-title">
            <span className="hero-section-title-color">
              Full Stack
            </span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero-section-description">
          Bridging the gap between design and technology, I specialize in creating dynamic, user-friendly applications as a Full Stack Developer. <br />
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>

      <div className="hero-section-img">
        <img src="./img/hero-img.jpeg" alt="Hero-section" />
      </div>
    </section>
  )
}

export default Herosection;