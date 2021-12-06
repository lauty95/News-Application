import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import SeccionEdicion from './SeccionEdicion';
import * as actionCreators from './../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import SeccionPreview from './SeccionPreview';
import logo from './../../assets/logo.png'

function Crear(props) {
    useEffect(() => {
        props.getAreas()
    }, [])

    return (
        <div>
            {/* ########## START: LEFT PANEL ########## */}
            {/* <div className="br-logo"><a href><span>[</span>Rodri <i>news</i><span>]</span></a></div> */}
            <div className="br-logo"><a href><img src={logo} alt="logo" /></a></div>
            <div className="br-sideleft sideleft-scrollbar">
                <label className="sidebar-label pd-x-10 mg-t-20 op-3">Navegación</label>
                <ul className="br-sideleft-menu">
                    <li className="br-menu-item">
                        <a href="#" className="br-menu-link with-sub">
                            <i className="menu-item-icon icon ion-ios-paper-outline tx-20" />
                            <span className="menu-item-label">Crear &amp; Editar</span>
                        </a>

                        <ul className="br-menu-sub">
                            <li className="sub-item"><div className="sub-link">Crear Nueva Noticia</div></li>
                            <li className="sub-item"><a href="/admin/editar" className="sub-link">Modificar Noticias</a></li>
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
                        <h4>Creación y Edición de Noticias</h4>
                        <p className="mg-b-0">Crea y edita noticas en esta sección</p>
                    </div>
                </div>
                <div className="br-pagebody">
                    <div className={props.pagina && "esconderSeccion"}>
                        <SeccionEdicion />
                    </div>
                    <div className={!props.pagina && "esconderSeccion"}>
                        <SeccionPreview />
                    </div>
                </div>
                <footer className="br-footer">
                    <div className="footer-left">
                        <div className="mg-b-2">Copyright © 2021. Spaggiari News. All Rights Reserved.</div>
                        {/* <div>Attentively and carefully made by ThemePixels.</div> */}
                    </div>
                    <div className="footer-right d-flex align-items-center">
                        <a href="http://browsing.com.ar"><span className="tx-uppercase mg-r-10">BROWSING</span></a>
                    </div>
                </footer>
            </div>
        </div >
    );
}

function mapStateToProps(state) {
    return {
        pagina: state.pagina,
        bodyNews: state.bodyNews
    }
}

const mapDispatchToProps = function (dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Crear)