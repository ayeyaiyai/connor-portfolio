import Header from "./Header";
import '../styles/About.css';
import headshot from '../images/headshot-cropped.jpg';

function About() {
    return (
        <div className="about">
            <Header />
            <div className='header-cover'></div>
            <section className="about-container">
                <div className="about-body">
                    <section className="about-header">
                        <div className="about-title">About Me</div>
                        <div className="about-image"><img src={headshot} alt="head shot" className="headshot"/></div>
                    </section>
                    <section className="about-info">
                        <p className="about-paragraph">I'm a self-taught front end web developer who began studying in 2022. I thoroughly enjoy problem-solving and turning complex tasks into simple, elegant solutions. Before I started my journey in web development I did data entry. This is a lot more fun.</p>
                        <p className="about-paragraph">I'm a life-long learner with interests ranging from analytical psychology, orangutan behavioral studies, scouring the web for obscure video games, and exercise/nutrition. I have always loved being online, so learning web development only seemed natural!</p>
                    </section>
                    <div className="section-divider"></div>
                </div>
            </section>
        </div>
    )
}

export default About;