import { GET_NEWS, GET_AREAS, PREVIEW, SET_BODY } from "./constants";
import axios from "axios";

export function getNews() {
    return function (dispatch) {
        axios.get('/news')
            .then(r => dispatch({ type: GET_NEWS, payload: r.data }))
    }
}

export function getAreas() {
    return function (dispatch) {
        axios.get('/news/areas')
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