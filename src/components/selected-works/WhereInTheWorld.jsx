import "../../styles/SelectedWork.css";
import Header from "../Header.jsx";

function WhereInTheWorld() {
    return (
        <section className="where-in-the-world">
            <Header />
            <div className="header-cover"></div>
            <section className="selected-work-container">
                <div className="selected-work-body">
                    <section className="selected-work-title">Where in the World?</section>
                    <div className="section-divider"></div>
                    <section className="selected-work-header">
                        <div className="selected-work-image"></div>
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
                                <span className="selected-work-header-bottom">react, CSS, npm, API</span>
                            </div>
                            <div className="selected-work-body-cluster">
                                <span className="selected-work-header-top">Source</span>
                                <span className="selected-work-header-bottom">frontendmentor.io</span>
                            </div>
                        </div>
                    </section>
                    <div className="section-divider"></div>
                    <section className="selected-work-info">
                        <div className="selected-work-info-section"></div>
                        <div className="selected-work-info-section"></div>
                    </section>
                    <section className="executive-summary-container">
                        <div className="executive-summary-title">Executive Summary</div>
                    </section>
                </div>
            </section>
        </section>
    )
}

export default WhereInTheWorld;