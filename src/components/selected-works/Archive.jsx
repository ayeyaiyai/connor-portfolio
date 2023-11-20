import "../../styles/SelectedWork.css";
import Header from "../Header.jsx";

function Archive() {
    return (
        <section className="archive">
            <Header />
            <div className="header-cover"></div>
            <section className="selected-work-container">
                <div className="selected-work-body">
                    <section className="selected-work-title">Archive</section>
                    <div className="section-divider"></div>
                    <section className="selected-work-header">
                        <div className="selected-work-image" id="archive-home-image"></div>
                        <div className="selected-work-header-body">
                            <div className="selected-work-body-cluster">
                                <span className="selected-work-header-top">Date</span>
                                <span className="selected-work-header-bottom">March 2023</span>
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
                                <span className="selected-work-header-bottom">react, CSS, API</span>
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
                            <div className="info-section-subtitle">The dreaded shopping cart</div>
                            <p className="info-section-body">This was my first time programming a functioning shopping cart, and a shopping cart that persisted when navigating from page to page. I ended up using the UseContext hook.</p>
                            <p className="info-section-body">I created an small API as well, and rendered that API as an array with grid styling. This API consisted of the products on sale, and each product opens a div where they can view additional information about the product as well as add it to the cart.</p>
                        </div>
                        <div className="selected-work-info-section">
                            <div className="info-section-title">What I Learned</div>
                            <div className="info-section-subtitle">Modular File Structure</div>
                            <p className="info-section-body">The images and clothing data are organized into separate files, promoting a modular and scalable file structure. This separation of concerns enhances code readability and organization.</p>
                            <div className="info-section-subtitle">Context API Usage</div>
                            <p className="info-section-body">The code uses the Context API from React to create a context named CartContext. This context provides a way to pass down the state and actions related to the shopping cart throughout the component tree without manually passing props.</p>
                        </div>
                    </section>
                    <section className="executive-summary-container">
                        <span className="executive-summary-title">Executive Summary</span>
                        <div className="executive-summary-body">
                            <div className="executive-summary summary-left">
                                <div className="executive-summary-body-title">Goal:</div>
                                <div className="executive-summary-subtitle">Create an app that functions as a shopping cart template.</div>
                            </div>
                            <div className="executive-summary summary-right">
                                <div className="executive-summary-body-title">Solution:</div>
                                <div className="executive-summary-subtitle">I utilized an API created to generate an array of products divided between men's and women's products.</div>
                            </div>
                        </div>
                    </section>
                    <div className="section-divider"></div>
                    <section className="external-links">
                        <div className="external-links-title">External Links</div>
                        <div className="external-link"><a target="_blank" rel="noopener" href="https://archive-shop.netlify.app/">Live Preview</a></div>
                        <div className="external-link"><a target="_blank" rel="noopener" href="https://github.com/ayeyaiyai/archive">Repository</a></div>
                    </section>
                </div>
            </section>
        </section>
    )
}

export default Archive;