import { GET_NEWS, GET_AREAS, PREVIEW, SET_BODY, GET_BANNER, AGREGAR, FILTRAR } from "./constants";
import axios from "axios";

export function getNews() {
    return function (dispatch) {
        axios.get('/')
            .then(r => dispatch({ type: GET_NEWS, payload: Array.isArray(r.data) ? r.data : [] }))
    }
}

export function getAreas() {
    return function (dispatch) {
        axios.get('/areas')
            .then(r => dispatch({ type: GET_AREAS, payload: r.data }))
    }
}

export function preview(props) {
    return {
        type: PREVIEW,
        payload: props
    }
}

export function setBodyNew(props) {
    return {
        type: SET_BODY,
        payload: props
    }
}

export function getBanner() {
    return function (dispatch) {
        axios.get('/getBannerNews')
            .then(r => dispatch(bannerDispatch(r.data)))
    }
}

function bannerDispatch(data) {
    if (data.sobra) {
        return {
            type: AGREGAR,
            payload: data
        }
    } else
        return {
            type: GET_BANNER,
            payload: data.res
        }
}

export function deleteNew(id) {
    const body = { id }
    return function () {
        axios.post('/deleteNew', body)
    }
}

export function editNew(info) {
    const body = { info }
    return function () {
        axios.put('/updateNew', body)
    }
}

export function filtrar(categoria) {
    return {
        type: FILTRAR,
        payload: categoria
    }
}