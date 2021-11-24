import React, { useState, useEffect } from 'react'
import * as actionCreators from './../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

function News(props) {
    useEffect(() => {
        props.getNews()
    }, [])
    return (
        props.news.length > 0 ?
            <div className="col-lg-8 col-md-6 content-area">
                <div className="row">
                    {props.news.map(n => miniNew(n.area, n.descripcion, n.imagen, n.noticia, n.titulo, n.createdAt, n.autor))}
                </div>
            </div>
            :
            <div className="col-lg-8 col-md-6 content-area">
                <div className="row">
                    <h1>Loading...</h1>
                </div>
            </div>
    )
}

function mapStateToProps(state) {
    return {
        news: state.news
    }
}

const mapDispatchToProps = function (dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(News)


function miniNew(area, descripcion, imagen, noticia, titulo, createdAt, autor) {
    return (
        <div className="col-12 col-md-12 col-sm-6 blog-paralle">
            <div className="type-post">
                <div className="entry-cover">
                    <div className="post-meta">
                        <span className="byline">by <a href="#" title="Indesign">{autor}</a></span>
                        <span className="post-date"><a href="#">{createdAt.split('T')[0]}</a></span>
                    </div>
                    <a href="#"><img src={imagen} alt="Post" /></a>
                </div>
                <div className="entry-content">
                    <div className="entry-header">
                        <span className="post-category"><a href="#" title="Technology">{area}</a></span>
                        <h3 className="entry-title"><a href="#" title="Traffic Jams Solved">{titulo}</a></h3>
                    </div>
                    <p>{descripcion}</p>
                    <a href="#" title="Read More">Read More</a>
                </div>
            </div>
        </div>
    )
}

