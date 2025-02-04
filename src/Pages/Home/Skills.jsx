import data from "../../data/index.json";

import React from 'react'

function Skills() {
    return (
        <section className="skills--section" id="mySkills">
            <div className="portfolio--container">
                <p className="section--title">My Skills</p>
                <h2 className="skills--section--heading">My Expertise</h2>
            </div>
            <div className="skills--section--container">
                {data?.skills?.map((item, index) => (
                    <div key={index}
                        className="skills--section--card">
                            <div className="skills--section--img">
                                <img src={item.src} alt="product-chain" />
                            </div>
                            <div className="skills--section--card--content">
                                <p className="skills--section--description">
                                    {item.description}
                                </p>
                            </div>
                    </div>
                ))};    
            </div>
        </section>
    )
}

export default Skills;