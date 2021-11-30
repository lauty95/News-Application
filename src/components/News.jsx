import React, { useState, useEffect } from 'react'
import * as actionCreators from './../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

function News(props) {
    useEffect(() => {
        props.getBanner()
        props.getNews()
    }, [])

    return (
        props.news.length > 0 ?
            <div className="col-lg-8 col-md-6 content-area">
                <div className="row">
                    {props.news.map(n => miniNew(n.area, n.descripcion, n.poster, n.noticia, n.titulo, n.createdAt, n.autor, n.id))}
                </div>
            </div>
            :
            <div className="col-lg-8 col-md-6 content-area">
                <div className="row">
                    <h1>Sin noticias por aquí...</h1>
                </div>
            </div>
    )
}

function mapStateToProps(state) {
    return {
        news: state.news,
        sobras: state.sobras,
    }
}

const mapDispatchToProps = function (dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(News)


function miniNew(area, descripcion, imagen, noticia, titulo, createdAt, autor, id) {
    return (
        <div className="col-12 col-md-12 col-sm-6 blog-paralle">
            <div className="type-post">
                <div className="entry-cover">
                    <div className="post-meta">
                        <span className="byline">by {autor}</span>
                        <span className="post-date">{createdAt.split('T')[0].split("-").reverse().join("/")}</span>
                    </div>
                    <Link to={`/noticia/${id}`}><img src={imagen} alt="Post" /></Link>
                </div>
                <div className="entry-content">
                    <div className="entry-header">
                        <span className="post-category"><Link to={`/noticia/${id}`}>{area}</Link></span>
                        <h3 className="entry-title"><Link to={`/noticia/${id}`}>{titulo}</Link></h3>
                    </div>
                    <p>{descripcion}</p>
                    <Link to={`/noticia/${id}`}>Leer Mas</Link>
                </div>
            </div>
        </div>
    )
}

