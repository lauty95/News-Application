import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
        axios.get('/news/getAll')
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

    function tarjetaNoticia({ id, imagen, titulo, descripcion, createdAt, destacar }) {
        return (
            <>
                <div className={destacar ? `tarjetaNoticia destacar` : "tarjetaNoticia"}>
                    <div className="descripcion">
                        <div>
                            <img src={imagen} alt="imagen descriptiva de la noticia" />
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
                <div className="br-logo"><a href><span>[</span>Rodri <i>news</i><span>]</span></a></div>
                <div className="br-sideleft sideleft-scrollbar">
                    <label className="sidebar-label pd-x-10 mg-t-20 op-3">Navegación</label>
                    <ul className="br-sideleft-menu">
                        <li className="br-menu-item">
                            <a href="#" className="br-menu-link with-sub">
                                <i className="menu-item-icon icon ion-ios-paper-outline tx-20" />
                                <span className="menu-item-label">Crear &amp; Editar</span>
                            </a>

                            <ul className="br-menu-sub">

                                <li className="sub-item"><Link to="/admin/crear" className="sub-link">Crear Nueva Noticia</Link></li>
                                <li className="sub-item"><Link to="/admin/editar" className="sub-link">Modificar Noticias</Link></li>
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
                            <div className="mg-b-2">Copyright © 2021. Rodri News. All Rights Reserved.</div>
                            {/* <div>Attentively and carefully made by ThemePixels.</div> */}
                        </div>
                        <div className="footer-right d-flex align-items-center">
                            <span className="tx-uppercase mg-r-10">Compartir:</span>
                            <a target="_blank" className="pd-x-5" href="https://www.facebook.com/sharer/sharer.php?u=http%3A//themepixels.me/bracketplus/intro"><i className="fab fa-facebook tx-20" /></a>
                            <a target="_blank" className="pd-x-5" href="https://twitter.com/home?status=Bracket%20Plus,%20your%20best%20choice%20for%20premium%20quality%20admin%20template%20from%20Bootstrap.%20Get%20it%20now%20at%20http%3A//themepixels.me/bracketplus/intro"><i className="fab fa-twitter tx-20" /></a>
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