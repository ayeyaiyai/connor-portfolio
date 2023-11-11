import '../styles/Header.css';

function Header() {    
    return (
        <section className='header-container'>
            <div className='header-body'>
                <div className='header-name header-link'>Connor Gilbert</div>
                <div className='header-links'>
                    <span className='header-link'>Work</span>
                    <span className='header-link'>About Me</span>
                    <span className='header-link'>For Fun</span>
                </div>
            </div>
        </section>
    )
}
export default Header;