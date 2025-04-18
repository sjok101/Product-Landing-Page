import Image from 'next/image';
function Footer(){
    const linkStyles = 'flex flex-col'
    return(
        <div>
        <div id="footer-box" className="bg-lime-200 flex flex-col justify-center items-center space-y-10">
            <h1>Footer</h1>
            <div id= "footer-link-container" className='flex flex-row space-x-3'>
                <div className = {linkStyles}>
                    <a href="">[Footer Link]</a>
                    <a href="">[Footer Link]</a>
                    <a href="">[Footer Link]</a>
                    <a href="">[Footer Link]</a>
                </div>
                <div className = {linkStyles}>
                    <a href="">[Footer Link]</a>
                    <a href="">[Footer Link]</a>
                    <a href="">[Footer Link]</a>
                    <a href="">[Footer Link]</a>
                </div>
                <div className = {linkStyles}>
                    <a href="">[Footer Link]</a>
                    <a href="">[Footer Link]</a>
                    <a href="">[Footer Link]</a>
                    <a href="">[Footer Link]</a>
                </div>
                <div className = {linkStyles}>
                    <a href="">[Footer Link]</a>
                    <a href="">[Footer Link]</a>
                    <a href="">[Footer Link]</a>
                    <a href="">[Footer Link]</a>
                    <a href="">[Footer Link]</a>
                </div>
            </div>

            <div id="footer-social-media-links" className="flex flex-row">
                <a target="_blank" href="https://facebook.com"><Image src="/facebook-small.png" alt='facebook' width={40} height={40}></Image></a>
                <a target="_blank" href="https://instagram.com"><Image src="/instagram-small.png" alt='instagram' width={40} height={40}></Image></a>
                <a target="_blank" href="https://x.com"><Image src="/twitter-small.png" alt='twitter' width={40} height={40}></Image></a>
                <a target="_blank" href="https://youtube.com"><Image src="/youtube-small.png" alt='youtube' width={40} height={40}></Image></a>
            </div>


        </div>
        </div>
    )
};

export default Footer;