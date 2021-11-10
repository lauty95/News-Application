import React from 'react'

function SideBar() {
    return (
        <div className="col-lg-4 col-md-6 widget-area">
            {/* Widget : Latest Post */}
            <aside className="widget widget_latestposts">
                <h3 className="widget-title">Popular Posts</h3>
                <div className="latest-content">
                    <a href="#" title="Recent Posts"><i><img src="http://placehold.it/100x80" className="wp-post-image" alt="blog-1" /></i></a>
                    <h5><a title="Beautiful Landscape View of Rio de Janeiro" href="#">Beautiful Landscape View of Rio de Janeiro</a></h5>
                    <span><a href="#">march 14, 2017</a></span>
                </div>
                <div className="latest-content">
                    <a href="#" title="Recent Posts"><i><img src="http://placehold.it/100x80" className="wp-post-image" alt="blog-1" /></i></a>
                    <h5><a title="Enjoy Your Holiday with Adventures" href="#">Enjoy Your Holiday with Adventures</a></h5>
                    <span><a href="#">march 15, 2017</a></span>
                </div>
                <div className="latest-content">
                    <a href="#" title="Recent Posts"><i><img src="http://placehold.it/100x80" className="wp-post-image" alt="blog-1" /></i></a>
                    <h5><a title="Best Photography Experience Shooting" href="#">Best Photography Experience Shooting</a></h5>
                    <span><a href="#">march 15, 2017</a></span>
                </div>
                <div className="latest-content">
                    <a href="#" title="Recent Posts"><i><img src="http://placehold.it/100x80" className="wp-post-image" alt="blog-1" /></i></a>
                    <h5><a title="How to Forecast Your Retirement Savings" href="#">How to Forecast Your Retirement Savings</a></h5>
                    <span><a href="#">march 16, 2017</a></span>
                </div>
            </aside>{/* Widget : Latest Post /- */}
            {/* Widget : Categories */}
            <aside className="widget widget_categories text-center">
                <h3 className="widget-title">Categories</h3>
                <ul>
                    <li><a href="#" title="Nature">Nature</a></li>
                    <li><a href="#" title="Technology">Technology</a></li>
                    <li><a href="#" title="Travel">Travel</a></li>
                    <li><a href="#" title="Sport">Sport</a></li>
                    <li><a href="#" title="Lifestyle">Lifestyle</a></li>
                </ul>
            </aside>{/* Widget : Categories /- */}
            {/* Widget : Instagram */}
            <aside className="widget widget_instagram">
                <h3 className="widget-title">Instagram</h3>
                <ul>
                    <li><a href="#"><img src="http://placehold.it/111x111" alt="Instagram" /></a></li>
                    <li><a href="#"><img src="http://placehold.it/111x111" alt="Instagram" /></a></li>
                    <li><a href="#"><img src="http://placehold.it/111x111" alt="Instagram" /></a></li>
                    <li><a href="#"><img src="http://placehold.it/111x111" alt="Instagram" /></a></li>
                    <li><a href="#"><img src="http://placehold.it/111x111" alt="Instagram" /></a></li>
                    <li><a href="#"><img src="http://placehold.it/111x111" alt="Instagram" /></a></li>
                </ul>
            </aside>{/* Widget : Instagram /- */}
            {/* Widget : Follow Us */}
            <aside className="widget widget_social">
                <h3 className="widget-title">FOLLOW US</h3>
                <ul>
                    <li><a href="#" title><i className="ion-social-facebook-outline" /></a></li>
                    <li><a href="#" title><i className="ion-social-twitter-outline" /></a></li>
                    <li><a href="#" title><i className="ion-social-instagram-outline" /></a></li>
                    <li><a href="#" title><i className="ion-social-googleplus-outline" /></a></li>
                    <li><a href="#" title><i className="ion-social-pinterest-outline" /></a></li>
                    <li><a href="#" title><i className="ion-social-vimeo-outline" /></a></li>
                </ul>
            </aside>{/* Widget : Follow Us /- */}
            {/* Widget : Newsletter */}
            <aside className="widget widget_newsletter">
                <h3 className="widget-title">Newsletter</h3>
                <div className="newsletter-box">
                    <i className="ion-ios-email-outline" />
                    <h4>Sign Up for Newsletter</h4>
                    <p>Sign up to receive latest posts and news </p>
                    <form>
                        <input type="text" className="form-control" placeholder="Your email address" />
                        <input type="submit" defaultValue="Subscribe Now" />
                    </form>
                </div>
            </aside>{/* Widget : Newsletter /- */}
        </div>
    )
}

export default SideBar
