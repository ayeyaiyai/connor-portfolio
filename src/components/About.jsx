import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from "./Header";
import '../styles/About.css';

function About() {

    

    return (
        <div className="about">
            <Header />
            <div className='header-cover'></div>
            <section className="about-container">
                <div className="about-body">
                    <section className="about-header">
                        <span className="about-title">About Me</span>
                        <div className="about-image"></div>
                    </section>
                    <section className="about-info">
                        <p className="about-paragraph">I'm a self-taught front end web developer who began studying in 2022. I thoroughly enjoy problem-solving and turning complex tasks into simple, elegant solutions.</p>
                        <p className="about-paragraph">I'm a life-long learner with interests ranging from analytical psychology, orangutan behavioral studies, scouring the web for obscure video games, and exercise/nutrition. I have always loved being online, so learning web development only seemed natural!</p>
                    </section>
                    <div className="section-divider"></div>
                    <section className="about-info">
                        <p className="about-paragraph">I'd love to get in contact!</p>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default About;