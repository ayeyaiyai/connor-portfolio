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
                        <h3 className="for-fun-section-title">I LOVE GAMES</h3>
                        <p className="info-paragraph">I love games. Video games, board games, word games, etc. I enjoy working within a set of rigid rules, and discovering the ways to play well within those limitations imposed on the player is my favorite. These are skills that can be applied to programming as well!</p>
                    </section>
                    <div className="section-divider"></div>
                    <section className="for-fun-section">
                        <h3 className="for-fun-section-title">FITNESS</h3>
                        <p className="info-paragraph">I've been lifting weights for a while now. It's nice to have an objective measure of your progress in the amount of weight you can lift. It's taught me the value of consistent effort and achieving long term goals. I also love helping people along their fitness journeys!</p>
                    </section>
                    <div className="section-divider"></div>
                    <section className="for-fun-section">
                        <h3 className="for-fun-section-title">SPACE INVADERS EXTREME</h3>
                        <p className="info-paragraph">At my peak I was ranked 34th in the world on the Steam Space Invaders Extreme leaderboards. I'm not particularly good at the game, and the person in first was miles ahead of everybody else, but hey there are 10,000 players so I'll take 34th. Play Space Invaders Extreme!</p>
                    </section>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ForFun;