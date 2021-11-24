import React, { useEffect } from 'react'
import * as actionCreators from './../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';


function SideBar(props) {

    useEffect(() => {
        props.getAreas()
    }, [])

    return (
        <div className="col-lg-4 col-md-6 widget-area">
            {/* Widget : Latest Post */}
            <aside className="widget widget_latestposts">
                <h3 className="widget-title">Popular Posts</h3>
                {
                    props.news.slice(0, 5).map(n => miniNew(n.imagen, n.titulo, n.createdAt))
                }
            </aside>
            {/* Widget : Categories */}
            <aside className="widget widget_categories text-center">
                <h3 className="widget-title">Categories</h3>
                <ul>
                    {props.areas.map(el => <li><a href="#" title={el}>{el}</a></li>)}
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

function mapStateToProps(state) {
    return {
        news: state.news,
        areas: state.areas
    }
}

const mapDispatchToProps = function (dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)

function miniNew(imagen, titulo, createdAt) {
    return (
        <div className="latest-content">
            <a href="#" title="Recent Posts"><i><img src={imagen} width="110px" className="wp-post-image" alt="imagen de noticia destacada" /></i></a>
            <h5><a href="#">{titulo}</a></h5>
            <span><a href="#">{createdAt.split('T')[0]}</a></span>
        </div>
    )
}