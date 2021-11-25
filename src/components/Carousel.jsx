// http://placehold.it/770x500
// http://placehold.it/396x248
import React, { useEffect, useState } from 'react'
import * as actionCreators from './../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

function Carousel(props) {

    useEffect(() => {
        props.getBanner()
    }, [])

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
    return (
        <div className={`carousel-item ${status}`}>
            <div className="row">
                <div className="col-lg-8 col-sm-12 post-block post-big">
                    <div className="post-box">
                        <img src={info[0].imagen} alt="Slide" />
                        <div className="entry-content">
                            <span className="post-category"><a href="#" title={info[0].categoria}>{info[0].categoria}</a></span>
                            <h3><a href="#" title={info[0].titulo}>{info[0].titulo}</a></h3>
                            <a href="#" title="Leer más">Leer más</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 post-block post-thumb">
                    <div className="post-box">
                        <img src={info[1].imagen} alt="Slide" />
                        <div className="entry-content">
                            <span className="post-category"><a href="#" title={info[1].categoria}>{info[1].categoria}</a></span>
                            <h3><a href="#" title={info[1].titulo}>{info[1].titulo}</a></h3>
                            <a href="#" title="Leer más">Leer más</a>
                        </div>
                    </div>
                    <div className="post-box">
                        <img src={info[2].imagen} alt="Slide" />
                        <div className="entry-content">
                            <span className="post-category"><a href="#" title={info[2].categoria}>{info[2].categoria}</a></span>
                            <h3><a href="#" title={info[2].titulo}>{info[2].titulo}</a></h3>
                            <a href="#" title="Leer más">Leer más</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function BannerSecundario(info) {
    return (
        <div className={`carousel-item`}>
            <div className="row">
                <div className="col-lg-8 col-sm-12 post-block post-big">
                    <div className="post-box">
                        <img src={info[0].imagen} alt="Slide" />
                        <div className="entry-content">
                            <span className="post-category"><a href="#" title={info[0].categoria}>{info[0].categoria}</a></span>
                            <h3><a href="#" title={info[0].titulo}>{info[0].titulo}</a></h3>
                            <a href="#" title="Leer más">Leer más</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 post-block post-thumb">
                    <div className="post-box">
                        <img src={info[1].imagen} alt="Slide" />
                        <div className="entry-content">
                            <span className="post-category"><a href="#" title={info[1].categoria}>{info[1].categoria}</a></span>
                            <h3><a href="#" title={info[1].titulo}>{info[1].titulo}</a></h3>
                            <a href="#" title="Leer más">Leer más</a>
                        </div>
                    </div>
                    <div className="post-box">
                        <img src={info[2].imagen} alt="Slide" />
                        <div className="entry-content">
                            <span className="post-category"><a href="#" title={info[2].categoria}>{info[2].categoria}</a></span>
                            <h3><a href="#" title={info[2].titulo}>{info[2].titulo}</a></h3>
                            <a href="#" title="Leer más">Leer más</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}