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
                        <div className="selected-work-image" id="country-home-image"></div>
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
                        <div className="selected-work-info-section">
                            <div className="info-section-title">The Challenge</div>
                            <div className="info-section-subtitle">Using an API</div>
                            <p className="info-section-body">I've used APIs before, usually in projects that are simple, one page apps. The challenge in creating this app was generating a number of links that directed the user to a country information page upon clicking on one of the country cards displayed on the home page. I also had to include a couple of elements that allow the user to filter the countries by name or by region.</p>
                            <p className="info-section-body">Additionally, I had never made a dark/light mode toggle in react before. This was made more difficult by the fact that this dark mode toggle had to persist when navigating between pages.</p>
                        </div>
                        <div className="selected-work-info-section">
                            <div className="info-section-title">What I Learned</div>
                            <div className="info-section-subtitle">Sorting Countries</div>
                            <p className="info-section-body">The sortedCountries variable is a copy of the original countries array, sorted alphabetically by the common name of the country. This provides a user-friendly way to display the countries.</p>
                            <div className="info-section-subtitle">Reusable Components</div>
                            <p className="info-section-body">I have a separate CountryCard component, and I used the Link component from react-router-dom to create links to individual country pages. This promotes code modularity and reusability.</p>
                            <div className="info-section-subtitle">Dark Mode Toggle Functionality</div>
                            <p className="info-section-body">The toggleDarkMode function toggles the darkMode state when called. This function is then passed down to the Header component, enabling users to switch between light and dark modes.</p>
                        </div>
                    </section>
                    <section className="executive-summary-container">
                        <span className="executive-summary-title">Executive Summary</span>
                        <div className="executive-summary-body">
                            <div className="executive-summary summary-left">
                                <div className="executive-summary-body-title">Goal:</div>
                                <div className="executive-summary-subtitle">Create an app that displays the countries of the world with the ability to switch between a dark and light mode.</div>
                            </div>
                            <div className="executive-summary summary-right">
                                <div className="executive-summary-body-title">Solution:</div>
                                <div className="executive-summary-subtitle">I utilized the RESTCountry API to generate an array of countries which is displayed on a home page. This array can be filtered via a search bar and a dropdown menu.</div>
                            </div>
                        </div>
                    </section>
                    <div className="section-divider"></div>
                    <section className="external-links">
                        <div className="external-links-title">External Links</div>
                        <div className="external-link"><a target="_blank" rel="noopener" href="https://connor-country-api.netlify.app/">Live Preview</a></div>
                        <div className="external-link"><a target="_blank" rel="noopener" href="https://github.com/ayeyaiyai/country-api">Repository</a></div>
                    </section>
                </div>
            </section>
        </section>
    )
}

export default WhereInTheWorld;