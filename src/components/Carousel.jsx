// http://placehold.it/770x500
// http://placehold.it/396x248
import React from 'react'

function Carousel() {
    return (
        <div className="container-fluid no-left-padding no-right-padding slider-section slider-section2">
            {/* Container */}
            <div className="container">
                <div id="slider-carousel-2" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-lg-8 col-sm-12 post-block post-big">
                                    <div className="post-box">
                                        <img src="http://placehold.it/770x500" alt="Slide" />
                                        <div className="entry-content">
                                            <span className="post-category"><a href="#" title="Travel">Travel</a></span>
                                            <h3><a href="#" title="Best Surfing Spots for Beginners and Advanced">Best Surfing Spots for Beginners and Advanced</a></h3>
                                            <a href="#" title="Read More">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-12 post-block post-thumb">
                                    <div className="post-box">
                                        <img src="http://placehold.it/396x248" alt="Slide" />
                                        <div className="entry-content">
                                            <span className="post-category"><a href="#" title="Sport">Sport</a></span>
                                            <h3><a href="#" title="High-Tech Prototype Bike Announced">High-Tech Prototype Bike Announced</a></h3>
                                            <a href="#" title="Read More">Read More</a>
                                        </div>
                                    </div>
                                    <div className="post-box">
                                        <img src="http://placehold.it/396x248" alt="Slide" />
                                        <div className="entry-content">
                                            <span className="post-category"><a href="#" title="Nature">Nature</a></span>
                                            <h3><a href="#" title="White Sand of The Desert Discovery">White Sand of The Desert Discovery</a></h3>
                                            <a href="#" title="Read More">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-lg-8 post-block post-big">
                                    <div className="post-box">
                                        <img src="http://placehold.it/770x500" alt="Slide" />
                                        <div className="entry-content">
                                            <span className="post-category"><a href="#" title="Travel">Travel</a></span>
                                            <h3><a href="#" title="Best Surfing Spots for Beginners and Advanced">Best Surfing Spots for Beginners and Advanced</a></h3>
                                            <a href="#" title="Read More">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 post-block post-thumb">
                                    <div className="post-box">
                                        <img src="http://placehold.it/396x248" alt="Slide" />
                                        <div className="entry-content">
                                            <span className="post-category"><a href="#" title="Sport">Sport</a></span>
                                            <h3><a href="#" title="High-Tech Prototype Bike Announced">High-Tech Prototype Bike Announced</a></h3>
                                            <a href="#" title="Read More">Read More</a>
                                        </div>
                                    </div>
                                    <div className="post-box">
                                        <img src="http://placehold.it/396x248" alt="Slide" />
                                        <div className="entry-content">
                                            <span className="post-category"><a href="#" title="Nature">Nature</a></span>
                                            <h3><a href="#" title="White Sand of The Desert Discovery">White Sand of The Desert Discovery</a></h3>
                                            <a href="#" title="Read More">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{/* Container /- */}
        </div>
    )
}

export default Carousel
