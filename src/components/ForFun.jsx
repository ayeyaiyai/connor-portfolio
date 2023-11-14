import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import '../styles/ForFun.css';

function ForFun() {
    return (
        <div className="for-fun">
            <Header />
            <div className="header-cover"></div>
            <section className="for-fun-container">
                <div className="for-fun-body">
                    <div className="title">In my spare time...</div>
                    <p className="subtitle">I love front end development, but I do a lot of other stuff too. Let me show you!</p>
                    <div className="section-divider"></div>
                    <section className="for-fun-section">
                        <p className=""></p>
                    </section>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ForFun;