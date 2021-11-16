import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getNews } from './actions'
function News() {

    // const [noticias, setNoticias] = useState([])

    useEffect(() => {
        getNews()
    }, [])
    const noticias = useSelector(state => state.news)

    return (
        <div className="col-lg-8 col-md-6 content-area">
            <div className="row">
                {miniNew()}
            </div>
            {/* Pagination */}
            {/* <nav className="navigation pagination">
                <h2 className="screen-reader-text">Posts navigation</h2>
                <div className="nav-links">
                    <a className="prev page-numbers" href="#">Previous</a>
                    <span className="page-numbers current">
                        <span className="meta-nav screen-reader-text">Page </span>1
                    </span>
                    <a className="page-numbers" href="#"><span className="meta-nav screen-reader-text">Page </span>2</a>
                    <a className="page-numbers" href="#"><span className="meta-nav screen-reader-text">Page </span>3</a>
                    <a className="page-numbers" href="#"><span className="meta-nav screen-reader-text">Page </span>...</a>
                    <a className="page-numbers" href="#"><span className="meta-nav screen-reader-text">Page </span>6</a>
                    <a className="next page-numbers" href="#">Next</a>
                </div>
            </nav> */}
            {/* Pagination /- */}
        </div>
    )
}

export default News


function miniNew() {
    return (
        <div className="col-12 col-md-12 col-sm-6 blog-paralle">
            <div className="type-post">
                <div className="entry-cover">
                    <div className="post-meta">
                        <span className="byline">by <a href="#" title="Indesign">inDesign</a></span>
                        <span className="post-date"><a href="#">MARCH 17, 2017</a></span>
                    </div>
                    <a href="#"><img src="http://placehold.it/330x247" alt="Post" /></a>
                </div>
                <div className="entry-content">
                    <div className="entry-header">
                        <span className="post-category"><a href="#" title="Technology">Technology</a></span>
                        <h3 className="entry-title"><a href="#" title="Traffic Jams Solved">Traffic Jams Solved </a></h3>
                    </div>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings his mistaken...</p>
                    <a href="#" title="Read More">Read More</a>
                </div>
            </div>
        </div>
    )
}