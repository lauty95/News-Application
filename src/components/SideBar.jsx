import React, { useEffect } from 'react'
import * as actionCreators from './../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

function SideBar(props) {

    useEffect(() => {
        props.getAreas()
    }, [])

    const handleFilter = (categoria) => {
        props.filtrar(categoria)
    }

    return (
        <div className="col-lg-4 col-md-6 widget-area">
            <aside className="widget widget_latestposts">
                <h3 className="widget-title">ÚLTIMOS POSTS</h3>
                {
                    props.popular.slice(0, 5).map(n => miniNew(n.poster, n.titulo, n.createdAt, n.id))
                }
            </aside>
            <aside className="widget widget_categories text-center">
                <h3 className="widget-title">CATEGORÍAS</h3>
                <ul>
                    <li><a title={'todos'} onClick={() => handleFilter('Todos')} >TODOS</a></li>
                    {props.areas.map(el => <li><a title={el} onClick={() => handleFilter(el)}>{el}</a></li>)}
                </ul>
            </aside>
            {/* <aside className="widget widget_instagram">
                <h3 className="widget-title">Instagram</h3>
                <ul>
                    <li><a href="#"><img src="http://placehold.it/111x111" alt="Instagram" /></a></li>
                    <li><a href="#"><img src="http://placehold.it/111x111" alt="Instagram" /></a></li>
                    <li><a href="#"><img src="http://placehold.it/111x111" alt="Instagram" /></a></li>
                    <li><a href="#"><img src="http://placehold.it/111x111" alt="Instagram" /></a></li>
                    <li><a href="#"><img src="http://placehold.it/111x111" alt="Instagram" /></a></li>
                    <li><a href="#"><img src="http://placehold.it/111x111" alt="Instagram" /></a></li>
                </ul>
            </aside> */}
            <aside className="widget widget_social">
                <h3 className="widget-title">SÍGUENOS</h3>
                <ul>
                    <li><a href="https://www.facebook.com/grupospaggiari" target="_blank" title><i className="ion-social-facebook-outline" /></a></li>
                    <li><a href="https://www.instagram.com/GrupoSpaggiari/" target="_blank" title><i className="ion-social-instagram-outline" /></a></li>
                    <li><a href="https://www.youtube.com/channel/UCHg9fpcoZ5OzmdAD-o9EPmg" target="_blank" title><i className="ion-social-youtube-outline" /></a></li>
                </ul>
            </aside>
            {/* <aside className="widget widget_newsletter">
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
            </aside> */}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        news: state.news,
        areas: state.areas,
        popular: state.popular
    }
}

const mapDispatchToProps = function (dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)

function miniNew(imagen, titulo, createdAt, id) {
    return (
        <div className="latest-content">
            <Link to={`/home/noticia/${id}`}><i><img src={imagen} width="110px" className="wp-post-image" alt="imagen de noticia destacada" /></i></Link>
            <h5><Link to={`/home/noticia/${id}`}>{titulo}</Link></h5>
            <span>{createdAt.split('T')[0].split("-").reverse().join("/")}</span>
        </div>
    )
}