import Header from "./Header";
import Footer from './Footer';
import rightArrow from '../images/arrow-forward-outline.svg';
import '../styles/Works.css';

function Works() {
    return (
        <section className="works">
            <Header />
            <div className="header-cover"></div>
            <section className="works-container">
                <section className="works-body">
                    <div className="title">Selected Works</div>
                    <div className="works-subtitle">These are just a few of the projects I've worked on recently. Check out more on my <a target="_blank" rel="noopener" href='https://github.com/ayeyaiyai'className="works-link">github!</a></div>
                    <section className="works-grid">
                        <div className="grid-column left-column">
                            <div className="work-grid-item grid-item-tall">
                                <div className="grid-item-image"></div>
                                <div className="grid-item-title"><span className="title-text">Where in the World?</span><img src={rightArrow} alt='arrow icon' className="arrow-icon"/></div>
                            </div>
                            <div className="work-grid-item grid-item-short">
                                <div className="grid-item-image"></div>
                                <div className="grid-item-title"><span className="title-text">Weather App</span><img src={rightArrow} alt='arrow icon' className="arrow-icon"/></div>
                            </div>
                        </div>
                        <div className="grid-column right-column">
                            <div className="work-grid-item grid-item-short">
                                <div className="grid-item-image"></div>
                                <div className="grid-item-title"><span className="title-text">Archive</span><img src={rightArrow} alt='arrow icon' className="arrow-icon"/></div>
                            </div>
                            <div className="work-grid-item grid-item-tall">
                                <div className="grid-item-image"></div>
                                <div className="grid-item-title"><span className="title-text">Cody's Portfolio</span><img src={rightArrow} alt='arrow icon' className="arrow-icon"/></div>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
            <Footer />
        </section>
    )
}

export default Works;