import React, { useState, useEffect } from 'react'
import * as actionCreators from './../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import logo from './../../assets/logo.png'
import axios from 'axios';

function Categoria(props) {

    const [categoria, setCategoria] = useState([])
    const [data, setData] = useState("")
    const [render, setRender] = useState(false)

    useEffect(() => {
        axios.get('/areas')
            .then(r => setCategoria(r.data))
    }, [render])

    const eliminar = (id) => {
        axios.post('/deleteArea', { id })
            .then(() => setRender(!render))
    }

    const nuevaCategoria = e => {
        e.preventDefault()
        axios.post('/newArea', { data })
            .then(() => setRender(!render))
        setData("")
    }

    const handleChange = e => {
        e.preventDefault()
        setData(e.target.value)
    }

    return (
        <>
            <div>
                {/* ########## START: LEFT PANEL ########## */}
                {/* <div className="br-logo"><a href="/admin/crear"><span>[</span>Rodri <i>news</i><span>]</span></a></div> */}
                <div className="br-logo"><a href="../../"><img src={logo} alt="logo" /></a></div>
                <div className="br-sideleft sideleft-scrollbar">
                    <label className="sidebar-label pd-x-10 mg-t-20 op-3">Navegación</label>
                    <ul className="br-sideleft-menu">
                        <li className="br-menu-item">
                            <a href="/admin/crear" className="br-menu-link">
                                <i className="menu-item-icon icon ion-ios-paper-outline tx-20" />
                                <span className="menu-item-label">Crear Nueva Noticia</span>
                            </a>
                            <a href="/admin/editar" className="br-menu-link">
                                <i className="menu-item-icon icon ion-ios-paper-outline tx-20" />
                                <span className="menu-item-label">Modificar Noticias</span>
                            </a>
                            <a href="/admin/editar" className="br-menu-link">
                                <i className="menu-item-icon icon ion-ios-paper-outline tx-20" />
                                <span className="menu-item-label">Modificar Noticias</span>
                            </a>
                            <a href="/admin/categorias" className="br-menu-link">
                                <i className="menu-item-icon icon ion-ios-paper-outline tx-20" />
                                <span className="menu-item-label">Modificar Categorías</span>
                            </a>
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
                            <h4>Editor de Categorías</h4>
                            <p className="mg-b-0">Edita crea o elimina categorías en esta sección</p>
                        </div>
                    </div>
                    <div className="br-pagebody">
                        <div className="br-section-wrapper">
                            <div className="categorias">
                                <div className="nuevos-valores-categoria">
                                    <input value={data} className="form-control" type="text" name="categoria" placeholder="Nombre de la categoría" onChange={handleChange} />
                                    <button class="btn btn-info" onClick={nuevaCategoria}>Guardar</button>
                                </div>
                                {
                                    categoria.length > 0 &&
                                    categoria.map(el =>
                                        <div className="nombre-categoria">
                                            {el.categoria}
                                            <div className="opciones">
                                                <span onClick={() => eliminar(el.id)}>Eliminar</span>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <footer className="br-footer">
                        <div className="footer-left">
                            <div className="mg-b-2">Copyright © 2022. Grupo Spaggiari News. All Rights Reserved.</div>
                            {/* <div>Attentively and carefully made by ThemePixels.</div> */}
                        </div>
                        <div className="footer-right d-flex align-items-center">
                            <a href="http://browsing.com.ar" target="_blank"><span className="tx-uppercase mg-r-10">BROWSING</span></a>
                        </div>
                    </footer>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Categoria)