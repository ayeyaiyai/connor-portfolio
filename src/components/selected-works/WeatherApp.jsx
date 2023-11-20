import "../../styles/SelectedWork.css";
import Header from "../Header.jsx";

function WeatherApp() {
    return (
        <section className="weather-app">
            <Header />
            <div className="header-cover"></div>
            <section className="selected-work-container">
                <div className="selected-work-body">
                    <section className="selected-work-title">Weather App</section>
                    <div className="section-divider"></div>
                    <section className="selected-work-header">
                        <div className="selected-work-image"></div>
                        <div className="selected-work-header-body">
                            <div className="selected-work-body-cluster">
                                <span className="selected-work-header-top">Date</span>
                                <span className="selected-work-header-bottom">February 2023</span>
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
                                <span className="selected-work-header-bottom">JavaScript, HTML, CSS, API</span>
                            </div>
                            <div className="selected-work-body-cluster">
                                <span className="selected-work-header-top">Source</span>
                                <span className="selected-work-header-bottom">TheOdinProject</span>
                            </div>
                        </div>
                    </section>
                    <div className="section-divider"></div>
                    <section className="selected-work-info">
                        <div className="selected-work-info-section">
                            <div className="info-section-title">The Challenge</div>
                            <div className="info-section-subtitle">Using an API</div>
                            <p className="info-section-body">This was the first project I worked on that required the usage of an API. I used the API to dynamically generate information which is saved to a variable, and then fitted into a template provided in the JavaScript. I also needed to use an async function to fetch that information.</p>
                            <p className="info-section-body">This was my first time crafting a dark/light mode toggle in the form of mon mode, and features a 2 bit color palette.</p>
                        </div>
                        <div className="selected-work-info-section">
                            <div className="info-section-title">What I Learned</div>
                            <div className="info-section-subtitle">Asynchronous Fetch Request</div>
                            <p className="info-section-body">The getWeather function uses the fetch API to make an asynchronous call to the OpenWeatherMap API. The await keyword is used to handle the promise returned by the fetch operation, ensuring that the subsequent code waits for the data to be retrieved.</p>
                            <div className="info-section-subtitle">Light Mode Toggle</div>
                            <p className="info-section-body">The lightMode function toggles the light-mode class on the body, as well as additional classes on specific elements like search buttons and sections. This adds a visual toggle for light and dark mode, demonstrating the ability to dynamically change the appearance of the page.</p>
                        </div>
                    </section>
                    <section className="executive-summary-container">
                        <span className="executive-summary-title">Executive Summary</span>
                        <div className="executive-summary-body">
                            <div className="executive-summary summary-left">
                                <div className="executive-summary-body-title">Goal:</div>
                                <div className="executive-summary-subtitle">Create an app that displays the weather with the ability to switch between a dark and light mode, and the ability to search for cities.</div>
                            </div>
                            <div className="executive-summary summary-right">
                                <div className="executive-summary-body-title">Solution:</div>
                                <div className="executive-summary-subtitle">I utilized the OpenWeather API to generate a number of variables corresponding with the relevant information based on the provided template. You can search for weather by city.</div>
                            </div>
                        </div>
                    </section>
                    <div className="section-divider"></div>
                    <section className="external-links">
                        <div className="external-links-title">External Links</div>
                        <div className="external-link"><a target="_blank" rel="noopener" href="https://ayeyaiyai.github.io/weather-app/">Live Preview</a></div>
                        <div className="external-link"><a target="_blank" rel="noopener" href="https://github.com/ayeyaiyai/weather-app">Repository</a></div>
                    </section>
                </div>
            </section>
        </section>
    )
}

export default WeatherApp;