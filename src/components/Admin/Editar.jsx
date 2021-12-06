import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import * as actionCreators from './../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import SeccionEdicion from './SeccionEdicion';

function Editar(props) {
    const [noticias, setNoticias] = useState([])
    const [show, setShow] = useState(false);
    const [data, setData] = useState({})
    const [refresh, setRefresh] = useState(false)
    const [seccionEdicion, setSeccionEdicion] = useState(false)
    const [noticiaFiltrada, setNoticiaFiltrada] = useState([])

    useEffect(() => {
        axios.get('/getAll')
            .then(r => setNoticias(r.data))
    }, [refresh])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const eliminarNoticia = () => {
        handleClose()
        setRefresh(!refresh)
        props.deleteNew(data.id)
    }

    const buscarNoticiaPorId = (id) => {
        setSeccionEdicion(!seccionEdicion)
        const filtro = noticias.filter(el => el.id === id)
        setNoticiaFiltrada(filtro[0])
    }

    function tarjetaNoticia({ id, poster, titulo, descripcion, createdAt, destacar }) {
        return (
            <>
                <div className={destacar ? `tarjetaNoticia destacar` : "tarjetaNoticia"}>
                    <div className="descripcion">
                        <div>
                            <img src={poster} alt="imagen descriptiva de la noticia" />
                        </div>
                        <div>
                            <h2>{titulo}</h2>
                            <p>{descripcion}</p>
                            {createdAt.split('T')[0].split("-").reverse().join("/")}
                        </div>
                    </div>
                    <div class="opciones">
                        <button class="btn btn-info" onClick={() => buscarNoticiaPorId(id)} >Editar</button>
                        <button class="btn btn-info" onClick={() => {
                            handleShow()
                            setData({ id, titulo })
                        }
                        } >Eliminar</button>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div>
                {/* ########## START: LEFT PANEL ########## */}
                <div className="br-logo"><a href="/admin/crear"><span>[</span>Rodri <i>news</i><span>]</span></a></div>
                <div className="br-sideleft sideleft-scrollbar">
                    <label className="sidebar-label pd-x-10 mg-t-20 op-3">Navegación</label>
                    <ul className="br-sideleft-menu">
                        <li className="br-menu-item">
                            <div className="br-menu-link with-sub">
                                <i className="menu-item-icon icon ion-ios-paper-outline tx-20" />
                                <span className="menu-item-label">Crear &amp; Editar</span>
                            </div>
                            <ul className="br-menu-sub">
                                <li className="sub-item"><a href="/admin/crear" className="sub-link">Crear Nueva Noticia</a></li>
                                <li className="sub-item"><div className="sub-link">Modificar Noticias</div></li>
                            </ul>
                        </li>
                    </ul>
                    <br />
                </div>
                {/* ########## END: LEFT PANEL ########## */}
                {/* ########## START: HEAD PANEL ########## */}
                <div className="br-header">
                    <div className="br-header-left">
                        <div className="navicon-left hidden-md-down"><a id="btnLeftMenu" href><i className="icon ion-navicon-round" /></a></div>
                        <div className="navicon-left hidden-lg-up"><a id="btnLeftMenuMobile" href><i className="icon ion-navicon-round" /></a></div>
                    </div>
                </div>
                {/* ########## END: HEAD PANEL ########## */}
                {/* ########## START: MAIN PANEL ########## */}
                <div className="br-mainpanel">
                    <div className="br-pagetitle">
                        <i className="icon ion-ios-gear-outline" />
                        <div>
                            <h4>Editor de Noticias</h4>
                            <p className="mg-b-0">Edita y/o elimina noticas en esta sección</p>
                        </div>
                    </div>
                    <div className="br-pagebody">
                        <div className={!seccionEdicion ? "br-section-wrapper" : "seccionEdicion"}>
                            {noticias.length > 0 &&
                                noticias.map(noticia => tarjetaNoticia(noticia))
                            }
                        </div>
                        <div className={!seccionEdicion && "seccionEdicion"}>
                            <SeccionEdicion editar={seccionEdicion} noticiaEditable={noticiaFiltrada} />
                        </div>
                    </div>
                    <footer className="br-footer">
                        <div className="footer-left">
                            <div className="mg-b-2">Copyright © 2022. Grupo Spaggiari News. All Rights Reserved.</div>
                            {/* <div>Attentively and carefully made by ThemePixels.</div> */}
                        </div>
                        <div className="footer-right d-flex align-items-center">
                            <a href="http://browsing.com.ar"><span className="tx-uppercase mg-r-10">BROWSING</span></a>
                        </div>
                    </footer>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Atencion!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Estás seguro que quieres borrar esta noticia <b>{data.titulo}</b>?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="primary" onClick={eliminarNoticia}>
                        Si, estoy seguro
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function mapStateToProps(state) {
    return {
        bodyNews: state.bodyNews,
        resetNews: state.resetNews
    }
}

const mapDispatchToProps = function (dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Editar)