import { GET_NEWS } from "./constants";
import axios from "axios";

export function getNews() {
    axios.get('/news')
        .then(r => getNewsReducer(r.data))
}

function getNewsReducer(data) {
    console.log(data)
    return {
        type: GET_NEWS,
        payload: data
    }
}