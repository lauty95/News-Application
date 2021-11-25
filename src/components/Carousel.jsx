// http://placehold.it/770x500
// http://placehold.it/396x248
import React, { useEffect, useState } from 'react'
import * as actionCreators from './../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

function Carousel(props) {

    function sacarUno(info) {
        let cont = 0
        if (info.length > 0)
            return props.banner.map(el => {
                cont++
                if (cont === 1) return Banner(el, "active")
                return Banner(el)
            })
    }
    return (
        <div className="container-fluid no-left-padding no-right-padding slider-section slider-section2">
            <div className="container">
                <div id="slider-carousel-2" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        {
                            props.banner.length > 0 &&
                                props.banner.length === 1 ?
                                Banner(props.banner[0], "active")
                                :
                                sacarUno(props.banner)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        banner: state.banner,
    }
}

const mapDispatchToProps = function (dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)

function Banner(info, status) {
    console.log(info)
    return (
        <div className={`carousel-item ${status}`}>
            <div className="row">
                <div className="col-lg-8 col-sm-12 post-block post-big">
                    <div className="post-box">
                        <img src={info[0].imagen} alt="Slide" />
                        <div className="entry-content">
                            <span className="post-category">{info[0].categoria}</span>
                            <h3><Link to={`/home/noticia/${info[0].id}`}>{info[0].titulo}</Link></h3>
                            <Link to={`/home/noticia/${info[0].id}`}>Leer Mas</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 post-block post-thumb">
                    <div className="post-box">
                        <img src={info[1].imagen} alt="Slide" />
                        <div className="entry-content">
                            <span className="post-category">{info[1].categoria}</span>
                            <h3><Link to={`/home/noticia/${info[1].id}`}>{info[1].titulo}</Link></h3>
                            <Link to={`/home/noticia/${info[1].id}`}>Leer Mas</Link>
                        </div>
                    </div>
                    <div className="post-box">
                        <img src={info[2].imagen} alt="Slide" />
                        <div className="entry-content">
                            <span className="post-category">{info[2].categoria}</span>
                            <h3><Link to={`/home/noticia/${info[2].id}`}>{info[2].titulo}</Link></h3>
                            <Link to={`/home/noticia/${info[2].id}`}>Leer Mas</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}