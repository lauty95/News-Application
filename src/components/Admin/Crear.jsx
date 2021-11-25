import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import SeccionEdicion from './SeccionEdicion';
import * as actionCreators from './../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import SeccionPreview from './SeccionPreview';

function Crear(props) {
    useEffect(() => {
        props.getAreas()
    }, [])

    return (
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