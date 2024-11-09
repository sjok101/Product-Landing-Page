import "../styles/FooterStyles.css"

function Footer(){
    return(
        <div>
            <h1>Footer</h1>
            <div id= "footer-link-container">
                <div className = "footer-link-column">
                    <a href="">[Footer Link]</a>
                    <a href="">[Footer Link]</a>
                    <a href="">[Footer Link]</a>
                    <a href="">[Footer Link]</a>
                </div>
                <div className = "footer-link-column">
                    <a href="">[Footer Link]</a>
                    <a href="">[Footer Link]</a>
                    <a href="">[Footer Link]</a>
                    <a href="">[Footer Link]</a>
                </div>
                <div className = "footer-link-column">
                    <a href="">[Footer Link]</a>
                    <a href="">[Footer Link]</a>
                    <a href="">[Footer Link]</a>
                    <a href="">[Footer Link]</a>
                </div>
                <div className = "footer-link-column">
                    <a href="">[Footer Link]</a>
                    <a href="">[Footer Link]</a>
                    <a href="">[Footer Link]</a>
                    <a href="">[Footer Link]</a>
                    <a href="">[Footer Link]</a>
                </div>
            </div>

            <div id="footer-social-media-links">
                <a target="_blank" href="https://facebook.com"><img src="facebook-small.png"></img></a>
                <a target="_blank" href="https://instagram.com"><img src="instagram-small.png"></img></a>
                <a target="_blank" href="https://x.com"><img src="twitter-small.png"></img></a>
                <a target="_blank" href="https://youtube.com"><img src="youtube-small.png"></img></a>
            </div>


        </div>
    )
};

export default Footer;