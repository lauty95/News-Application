import React from 'react'

function Footer() {
    return (
        <footer className="container-fluid no-left-padding no-right-padding footer-main">
            {/* Instagram */}
            <div className="container-fluid no-left-padding no-right-padding instagram-block">
                <ul className="instagram-carousel">
                    <li><a href="#"><img src="http://placehold.it/319x319/aaa" alt="Instagram" /></a></li>
                    <li><a href="#"><img src="http://placehold.it/319x319" alt="Instagram" /></a></li>
                    <li><a href="#"><img src="http://placehold.it/319x319/aaa" alt="Instagram" /></a></li>
                    <li><a href="#"><img src="http://placehold.it/319x319" alt="Instagram" /></a></li>
                    <li><a href="#"><img src="http://placehold.it/319x319/aaa" alt="Instagram" /></a></li>
                    <li><a href="#"><img src="http://placehold.it/319x319" alt="Instagram" /></a></li>
                </ul>
            </div>{/* Instagram /- */}
            {/* Container */}
            <div className="container">
                <ul className="ftr-social">
                    <li><a href="#" title="Facebook"><i className="fa fa-facebook" />Facebook</a></li>
                    <li><a href="#" title="Twitter"><i className="fa fa-twitter" />twitter</a></li>
                    <li><a href="#" title="Instagram"><i className="fa fa-instagram" />Instagram</a></li>
                    <li><a href="#" title="Google Plus"><i className="fa fa-google-plus" />Google plus</a></li>
                    <li><a href="#" title="Pinterest"><i className="fa fa-pinterest-p" />pinterest</a></li>
                    <li><a href="#" title="Youtube"><i className="fa fa-youtube" />youtube</a></li>
                </ul>
                <div className="copyright">
                    <p>Copyright @ 2017 MINIMAG</p>
                </div>
            </div>{/* Container /- */}
        </footer>
    )
}

export default Footer
