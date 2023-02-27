function SignupButton () {
    return <button className="signup-button">Sign up</button>
}

function Header () {
    return <div className="header">
        <div className="navbar">
            <h1>Header Logo</h1>
            <div className="navbar-links">
                <a href="https://www.youtube.com">header link one</a>
                <a href="https://www.youtube.com">header link two</a>
                <a href="https://www.youtube.com">header link three</a>
            </div>
        </div>
        <div className="header-content">
            <div className="header-left">
                <h1>This website is awesome</h1>
                <p>This website has some subtext that goes here under the main title. It's a smaller font and the color is lower contrast</p>
                <SignupButton />
            </div>
            <div className="header-right">
                <img src="banner.png" />
            </div>
        </div>
    </div>
}

function Body () {
    function Cell () {
        return <div className="cell">
            <div className="cell-image"></div>
            <p className="cell-description">this is some subtext under and illustration or image</p>
        </div>
    }
    
    function Quote () {
        return <div className="quote">
            <p className="quote-content">This is an inspiring quote, or a testimonial from a customer. Maybe it's just filling up space, or maybe people will actually read it. Who knows? All I know is that it looks nice.</p>
            <p className="quote-author">-Thor, God of Thunder</p>
        </div>
    }
    
    function InfoBox () {
        return <div className="infobox">
            <div className="infobox-content">
                <div className="infobox-title">Call to action! It's time!</div>
                <div className="infobox-description">Sign up for our product by clicking that button right over there!</div>
            </div>
            <SignupButton />
        </div>
    }
    
    return <div className="body">
        <h1>Some random information.</h1>
        <div className="cell-container">
            <Cell />
            <Cell />
            <Cell />
            <Cell />
        </div>
        <Quote />
        <InfoBox />
    </div>
}

function Footer () {
    return <div className="footer">
        Copyright © The Odin Project 2023
    </div>
}

export default function App () {
    return <div className="app">
        <Header />
        <Body />
        <Footer />
    </div>
}
