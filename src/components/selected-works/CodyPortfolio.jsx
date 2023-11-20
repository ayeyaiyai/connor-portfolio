import "../../styles/SelectedWork.css";
import Header from "../Header.jsx";

function CodyPortfolio() {
    return (
        <section className="cody-portfolio">
            <Header />
            <div className="header-cover"></div>
            <section className="selected-work-container">
                <div className="selected-work-body">
                    <section className="selected-work-title">Cody's Portfolio</section>
                    <div className="section-divider"></div>
                    <section className="selected-work-header">
                        <div className="selected-work-image" id='cody-portfolio-image'></div>
                        <div className="selected-work-header-body">
                            <div className="selected-work-body-cluster">
                                <span className="selected-work-header-top">Date</span>
                                <span className="selected-work-header-bottom">November 2023</span>
                            </div>
                            <div className="selected-work-body-cluster">
                                <span className="selected-work-header-top">Duration</span>
                                <span className="selected-work-header-bottom">1 Week</span>
                            </div>
                            <div className="selected-work-body-cluster">
                                <span className="selected-work-header-top">Platform</span>
                                <span className="selected-work-header-bottom">Browser / Mobile</span>
                            </div>
                            <div className="selected-work-body-cluster">
                                <span className="selected-work-header-top">Technology</span>
                                <span className="selected-work-header-bottom">react, CSS</span>
                            </div>
                            <div className="selected-work-body-cluster">
                                <span className="selected-work-header-top">Source</span>
                                <span className="selected-work-header-bottom">Personal Project</span>
                            </div>
                        </div>
                    </section>
                    <div className="section-divider"></div>
                    <section className="selected-work-info">
                        <div className="selected-work-info-section">
                            <div className="info-section-title">The Challenge</div>
                            <div className="info-section-subtitle">Design Design Design</div>
                            <p className="info-section-body">Not too much crazy react flexing in this one. Being an academic portfolio it just needs to convey information about Cody, a math professor teaching at St. Louis University. That being said, I didn't want it to look boring, and having fewer react requirements enabled me to focus on the design.</p>
                            <p className="info-section-body">I focused on reactive elements, and a clear, cohesive design. I also wanted to spice things up by having sections fade in when they come into view. I think overall this is my most professional project (which is great, because it's my most recent).</p>
                        </div>
                        <div className="selected-work-info-section">
                            <div className="info-section-title">What I Learned</div>
                            <div className="info-section-subtitle">Intersection Observer Hook</div>
                            <p className="info-section-body">The code uses the useInView hook from the react-intersection-observer library to determine whether the component is in the viewport. This hook returns a boolean value (inView) indicating whether the observed element is currently in view.</p>
                            <div className="info-section-subtitle">Dropdown Sections</div>
                            <p className="info-section-body">The component implements dropdown sections (publications, invited-talks, workshops) that reveal or hide additional content when clicked. The dropdowns provide details about the researcher's publications, invited talks, and workshops attended.</p>
                            
                        </div>
                    </section>
                    <section className="executive-summary-container">
                        <span className="executive-summary-title">Executive Summary</span>
                        <div className="executive-summary-body">
                            <div className="executive-summary summary-left">
                                <div className="executive-summary-body-title">Goal:</div>
                                <div className="executive-summary-subtitle">Create a professional portfolio website for Dr. Gilbert. A website that can be used in a professional context.</div>
                            </div>
                            <div className="executive-summary summary-right">
                                <div className="executive-summary-body-title">Solution:</div>
                                <div className="executive-summary-subtitle">I took extra care to make sure the website looks good at any resolution, and each of the elements would react when interacted with.</div>
                            </div>
                        </div>
                    </section>
                    <div className="section-divider"></div>
                    <section className="external-links">
                        <div className="external-links-title">External Links</div>
                        <div className="external-link"><a target="_blank" rel="noopener" href="https://codygilbert.netlify.app/">Live Preview</a></div>
                        <div className="external-link"><a target="_blank" rel="noopener" href="https://github.com/ayeyaiyai/cody-portfolio">Repository</a></div>
                    </section>
                </div>
            </section>
        </section>
    )
}

export default CodyPortfolio;