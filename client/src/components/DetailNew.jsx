import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactHtmlParser from 'react-html-parser'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

function DetailNew(props) {
    const id = props.match.params.id
    const url = `/getById/${id}`

    const [noticia, setNoticia] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(r => setNoticia(r.data))
    }, [id])

    function youtube_parser(url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : false;
    }

    return (
        noticia.titulo ?
            <div className="col-lg-12 col-md-6 content-area">
                <h1>{noticia.titulo}</h1>
                <p className="area">{noticia.area}</p>
                {
                    noticia.imagen &&
                    <AliceCarousel>
                        {noticia.imagen.map(el => <img src={el} className="imagenBannerDetail" />)}
                    </AliceCarousel>
                }
                {
                    noticia.video &&
                    <iframe src={`https://www.youtube.com/embed/${youtube_parser(noticia.video)}`}
                        width="100%"
                        height="550px"
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                    />
                }
                <p className="descripcionNoticia">{noticia.descripcion}</p>
                {ReactHtmlParser(noticia.noticia)}
                <p className="autor">Publicado por {noticia.autor}</p>
                <p className="autor">el {`${noticia.createdAt.split('T')[0].split("-").reverse().join("/")}`}</p>
            </div>
            :
            <h1>No se encontró la nota</h1>
    )
}

export default DetailNew
