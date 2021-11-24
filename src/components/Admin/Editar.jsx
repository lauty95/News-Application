import React, { useState, useEffect } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser'
import axios from 'axios';
import { Link } from 'react-router-dom';
function Editar() {
    const [areas, setAreas] = useState([])
    const [noticia, setNoticia] = useState('<h2>Escriba aquí la noticia</h2><h4>Subtitulo</h4><blockquote><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni temporibus distinctio commodi delectus dolore cum deserunt corrupti necessitatibus sint eum velit in laudantium blanditiis, reprehenderit quisquam atque omnis quam.</p></blockquote><p>Ejemplo de <i>numeración</i></p><ol><li>Primer <a href="#">enlace</a></li><li>Segunda noticia <strong>importante</strong></li><li>Simple texto</li></ol>')
    const [data, setData] = useState({
        titulo: '',
        area: '',
        descripcion: '',
        imagen: '',
        autor: ''
    })

    useEffect(() => {
        axios.get('/news/areas')
            .then(r => setAreas(r.data))
    }, [])

    const handleChangeNew = (editor) => {
        setNoticia(editor.getData())
    }

    const handleChange = (e) => {
        setData(prevData => {
            const newValue = { ...prevData, [e.target.name]: e.target.value }
            return newValue
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setData(prevData => {
            const newValue = { ...prevData, noticia: noticia }
            return newValue
        })
        const body = data
        axios.post('/news/newPost', body)
            .then(e => console.log(e))
    }
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
                            <li className="sub-item"><Link to="/admin/banner" className="sub-link">Modificar Banner</Link></li>
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
                        <p className="mg-b-0">Crea y edita noticas en esta sección</p>
                    </div>
                </div>
                <div className="br-pagebody">
                    <div className="br-section-wrapper">
                        <h6 className="br-section-label">Editor de Noticias</h6>
                        <div className="row mg-b-25">
                            <div className="col-lg-8">
                                <div className="form-group mg-b-10-force">
                                    {/* <label className="form-control-label">Ingrese el título de la noticia<span className="tx-danger">*</span></label> */}
                                    <input required className="form-control" type="text" name="titulo" placeholder="Título de la noticia" onChange={handleChange} />
                                </div>
                            </div>{/* col-8 */}
                            <div className="col-lg-4">
                                <div className="form-group mg-b-10-force">
                                    {/* <label className="form-control-label">Country: <span className="tx-danger">*</span></label> */}
                                    <select className="form-control select2 selectorArea" name="area" data-placeholder="Área" onChange={handleChange}>
                                        <option label="Área" />
                                        {areas.map(el => <option value="el">{el}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row mg-b-25">
                            <div className="col-lg-12">
                                <div className="form-group mg-b-10-force">
                                    {/* <label className="form-control-label">Ingrese el título de la noticia<span className="tx-danger">*</span></label> */}
                                    <input required className="form-control" type="text" name="descripcion" placeholder="Descripción de la noticia" onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className="row mg-b-25">
                            <div className="col-lg-4">
                                <div className="form-group mg-b-10-force">
                                    {/* <label className="form-control-label">Ingrese el título de la noticia<span className="tx-danger">*</span></label> */}
                                    <input required className="form-control" type="text" name="autor" placeholder="Ingrese el autor" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="form-group mg-b-10-force">
                                    {/* <label className="form-control-label">Ingrese el título de la noticia<span className="tx-danger">*</span></label> */}
                                    <input required className="form-control" type="text" name="imagen" placeholder="Ingrese la URL de la imagen" onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                        <CKEditor
                            data={noticia}
                            editor={ClassicEditor}
                            onChange={handleChangeNew}
                        />
                        <br />
                        <div class="form-layout-footer">
                            <button class="btn btn-info" onClick={handleSubmit}>Publicar</button>
                        </div>
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
    );
}

export default Editar
