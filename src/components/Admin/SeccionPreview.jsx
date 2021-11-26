import React from 'react'
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser'
import * as actionCreators from './../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { useSnackbar } from 'notistack';
import Slide from '@material-ui/core/Slide';

function SeccionPreview(props) {
    const fecha = new Date()

    const volverEditar = (e) => {
        e.preventDefault()
        props.preview(!props.pagina)
    }

    const publicar = (e) => {
        e.preventDefault()
        axios.post('/newPost', props.bodyNews)
            .then(() => {
                toastComplete()
                const redir = () => window.location.href = '/admin/crear';
                setTimeout(redir, 3000)
            })
            .catch(() => {
                toastFail()
            })
    }

    const { enqueueSnackbar } = useSnackbar();

    const toastComplete = () => {
        enqueueSnackbar('Publicado! Serás redirigido pronto', {
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right',
            },
            TransitionComponent: Slide,
            variant: 'success',
        })
    }

    const toastFail = () => {
        enqueueSnackbar('Hubo un error con el servidor', {
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right',
            },
            TransitionComponent: Slide,
            variant: 'error',
        })
    }
    
    return (
        <div className="br-section-wrapper">
            <h1>{props.bodyNews.titulo}</h1>
            <p className="area">{props.bodyNews.area}</p>
            <img className="imagenNoticia" src={props.bodyNews.imagen} />
            <p className="descripcionNoticia">{props.bodyNews.descripcion}</p>
            {ReactHtmlParser(props.bodyNews.noticia)}
            <p className="autor">Publicado por {props.bodyNews.autor}</p>
            <p className="autor">el {`${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`}</p>
            <div class="form-layout-footer">
                <button class="btn btn-info" onClick={volverEditar}>Editar</button>
                <button class="btn btn-info spacing" onClick={publicar}>Publicar</button>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        pagina: state.pagina,
        bodyNews: state.bodyNews,
        areas: state.areas
    }
}

const mapDispatchToProps = function (dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SeccionPreview)