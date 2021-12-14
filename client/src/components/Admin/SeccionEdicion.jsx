import React, { useState, useEffect } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as actionCreators from './../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { useSnackbar } from 'notistack';
import Slide from '@material-ui/core/Slide';
import axios from 'axios';

function SeccionEdicion(props) {

    const [data, setData] = useState({
        titulo: '',
        area: '',
        descripcion: '',
        imagen: [],
        video: '',
        autor: '',
        destacar: false,
        noticia: ''
    })

    useEffect(() => {
        props.getAreas()
        props.editar && setData(props.noticiaEditable)
    }, [props.noticiaEditable])

    const handleSubmit = (e) => {
        e.preventDefault()
        const body = data
        if (data.area === '' || data.autor === '' || data.descripcion === '' || data.imagen.length === 0 || data.noticia === '' || data.titulo === '') {
            toastFail()
        } else {
            props.setBodyNew(data)
            props.preview(!props.pagina)
        }
    }

    const handleEdit = (e) => {
        e.preventDefault()
        if (data.area === '' || data.autor === '' || data.descripcion === '' || data.imagen.length === 0 || data.noticia === '' || data.titulo === '') {
            toastFail()
        } else {
            props.setBodyNew(data)
            props.editNew(data)
            toastEdited()
            const redir = () => window.location.href = '/admin/editar';
            setTimeout(redir, 3000)
        }
    }

    const { enqueueSnackbar } = useSnackbar();

    const toastFail = () => {
        enqueueSnackbar('Faltan completar campos!', {
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right',
            },
            TransitionComponent: Slide,
            variant: 'error',
        })
    }
    const toastEdited = () => {
        enqueueSnackbar('Editado con éxito! Serás redireccionado automáticamente', {
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right',
            },
            TransitionComponent: Slide,
            variant: 'success',
        })
    }

    const handleBack = (e) => {
        e.preventDefault()
        window.location.href = "/admin/editar"
    }

    const quitarImagen = (e) => {
        e.preventDefault()
        setData(prevData => {
            const newArray = data.imagen.filter(el => el !== e.target.name)
            const newValue = { ...prevData, imagen: newArray }
            return newValue
        })
    }
    const handleChange = (e) => {
        setData(prevData => {
            const newValue = { ...prevData, [e.target.name]: e.target.value }
            return newValue
        })
    }

    const handleChangeImage = event => {
        const files = event.target.files
        const fd = new FormData()
        for (let i = 0; i < files.length; i++) {
            fd.append("imagen", event.target.files[i])
        }
        axios.post('/uploadImages', fd)
            .then(r => setData(prevData => {
                let nuevoArray = []
                if (data.imagen.length > 0) data.imagen.forEach(el => nuevoArray.push(el))
                r.data.dir.forEach(el => nuevoArray.push(el))
                const newValue = { ...prevData, imagen: nuevoArray }
                return newValue
            }))
    }

    return (
        <div className="br-section-wrapper">
            <h6 className="br-section-label">Editor de Noticias</h6>
            <div className="row mg-b-25">
                <div className="col-lg-7">
                    <div className="form-group mg-b-10-force">
                        <input value={data.titulo} required className="form-control" type="text" name="titulo" placeholder="Título de la noticia" onChange={handleChange} />
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="form-group mg-b-10-force">
                        <select value={data.area} className="form-control select2 selectorArea" name="area" data-placeholder="Área" onChange={handleChange}>
                            <option label="Área" />
                            {props.areas.map(el => <option value={el.categoria}>{el.categoria}</option>)}
                        </select>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="form-group mg-b-10-force">
                        <select value={data.destacar} className="form-control select2 selectorArea" name="destacar" data-placeholder="Banner" onChange={handleChange}>
                            <option value={false}>No destacar</option>
                            <option value={true}>Destacar</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row mg-b-25">
                <div className="col-lg-12">
                    <div className="form-group mg-b-10-force">
                        <input value={data.descripcion} required className="form-control" type="text" name="descripcion" placeholder="Descripción de la noticia" onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="row mg-b-25">
                <div className="col-lg-4">
                    <div className="form-group mg-b-10-force">
                        <input value={data.autor} required className="form-control" type="text" name="autor" placeholder="Ingrese el autor" onChange={handleChange} />
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="form-group mg-b-10-force">
                        {/* <label className="form-control-label">Ingrese el título de la noticia<span className="tx-danger">*</span></label> */}
                        <input value={data.video} required className="form-control" type="text" name="video" placeholder="Ingrese una URL de youtube" onChange={handleChange} />
                    </div>
                </div>
                <div className="col-lg-8">
                    <input class="inputImagen" type="file" multiple id="add-image" id="imagen" name="imagen" onChange={handleChangeImage} />
                    <label class="btn btn-info" htmlFor="imagen">Agregar Fotos</label>
                </div>
                <div className="col-lg-12">
                    <div className="prevImagenes">
                        {
                            data.imagen.length > 0 &&
                            data.imagen.map(foto =>
                                <>
                                    <div className="botonEliminar">
                                        <img src={foto} alt="foto de la noticia" />
                                        <button name={foto} onClick={(e) => quitarImagen(e)}>X</button>
                                    </div>
                                </>)
                        }
                    </div>
                </div>
            </div>
            {props.editar ?
                <CKEditor
                    data={props.noticiaEditable.noticia}
                    editor={ClassicEditor}
                    onChange={(event, editor) => setData(prevData => {
                        const newValue = { ...prevData, noticia: editor.getData() }
                        return newValue
                    })}
                    config={{
                        mediaEmbed: {
                            previewsInData: true
                        }
                    }}
                />
                :
                <CKEditor
                    data='<h2>Escriba aquí la noticia</h2><h4>Subtitulo</h4><blockquote><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni temporibus distinctio commodi delectus dolore cum deserunt corrupti necessitatibus sint eum velit in laudantium blanditiis, reprehenderit quisquam atque omnis quam.</p></blockquote><p>Ejemplo de <i>numeración</i></p><ol><li>Primer <a href="#">enlace</a></li><li>Segunda noticia <strong>importante</strong></li><li>Simple texto</li></ol>'
                    editor={ClassicEditor}
                    onChange={(event, editor) => setData(prevData => {
                        const newValue = { ...prevData, noticia: editor.getData() }
                        return newValue
                    })}
                    config={{
                        mediaEmbed: {
                            previewsInData: true
                        }
                    }}
                />}
            <br />
            {
                props.editar ?
                    <>
                        <div class="form-layout-footer spaceBetweenButtons">
                            <button class="btn btn-info" onClick={handleEdit}>Guardar</button>
                            <button class="btn btn-info" onClick={handleBack}>Volver</button>
                        </div>
                    </>
                    :
                    <div class="form-layout-footer">
                        <button class="btn btn-info" onClick={handleSubmit}>Preview</button>
                    </div>
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        bodyNews: state.bodyNews,
        areas: state.areas
    }
}

const mapDispatchToProps = function (dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SeccionEdicion)
