import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactHtmlParser from 'react-html-parser'

function DetailNew(props) {
    const id = props.match.params.id
    const url = `/news/getById/${id}`

    const [noticia, setNoticia] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(r => setNoticia(r.data))
    }, [id])
    
    return (
        noticia.titulo ?
            <div className="col-lg-12 col-md-6 content-area">
                <h1>{noticia.titulo}</h1>
                <p className="area">{noticia.area}</p>
                <img className="imagenNoticia" src={noticia.imagen} />
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
